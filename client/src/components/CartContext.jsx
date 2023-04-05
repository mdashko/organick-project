import React, { createContext, useEffect, useState } from "react";

export const CartContext = createContext(null);
export function CartProvider({ children }) {
  const [products, setProducts] = useState([]);

  function updateProducts(newProduct) {
    const cart = JSON.parse(localStorage.getItem("cart") || "[]");

    if (cart.some((product) => product.productID === newProduct.productID)) {
      const changedProductIndex = cart.findIndex(
        (product) => product.productID === newProduct.productID
      );
      cart[changedProductIndex].quantity =
        cart[changedProductIndex].quantity + newProduct.quantity;
      const { newPrice, price, quantity } = cart[changedProductIndex];

      cart[changedProductIndex].totalCost =
        quantity * newPrice ? newPrice : price;
      cart[changedProductIndex].totalDiscount =
        quantity * newPrice ? price - newPrice : 0;
    } else {
      cart.push(newProduct);
    }
    setProducts(cart);
    localStorage.setItem("cart", JSON.stringify(cart));
  }

  const removeProduct = React.useCallback(
    (id) => {
      const newProducts = products.filter(({ productID }) => productID !== id);
      setProducts(newProducts);
      localStorage.setItem("cart", JSON.stringify(newProducts));
    },
    [products]
  );

  const changeQuantityProduct = React.useCallback(
    (id, quantity) => {
      if (quantity && Number(quantity) > 0) {
        const newProducts = products.map((product) => {
          if (product.productID === id) {
            product.quantity = quantity;
            product.totalCost =
              product.quantity *
              (product.newPrice ? product.newPrice : product.price);
            product.totalDiscount =
              product.quantity *
              (product.newPrice ? product.price - product.newPrice : 0);
          }
          return product;
        });
        setProducts(newProducts);
        localStorage.setItem("cart", JSON.stringify(newProducts));
      }
    },
    [products]
  );

  const countTotalCost = React.useCallback(() => {
    return products.reduce((accum, obj) => accum + obj.totalCost, 0);
  }, [products]);

  const countTotalDiscount = React.useCallback(() => {
    return products.reduce((accum, obj) => accum + obj.totalDiscount, 0);
  }, [products]);

  const checkProductAlreadyInCart = React.useCallback(
    (id) => {
      return products.some(({ productID }) => productID === id);
    },
    [products]
  );

  useEffect(() => {
    const products = JSON.parse(localStorage.getItem("cart") || "[]");
    setProducts(products);
  }, []);

  return (
    <CartContext.Provider
      value={{
        products,
        updateProducts,
        removeProduct,
        changeQuantityProduct,
        countTotalCost,
        countTotalDiscount,
        checkProductAlreadyInCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}
