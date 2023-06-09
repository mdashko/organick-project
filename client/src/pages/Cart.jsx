import React, { useState, useContext } from "react";
import { Header } from "../components/Header/Header";
import { Footer } from "../components/Footer/Footer";
import { StyledText } from "../UI/StyledText";
import { StyledBtn } from "../UI/StyledBtn";
import { images } from "../images/index.js";
import { ProductCart } from "../components/ProductCart/ProductCart";
import { Form } from "../components/Form/Form";
import { CartContext } from "../components/CartContext";

export const Cart = () => {
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [isButtonVisible, setIsButtonVisible] = useState(true);

  const { products, countTotalCost, countTotalDiscount } = useContext(CartContext);
  const openForm = () => {
    setIsFormOpen(true);
    setIsButtonVisible(false);
  };

  return (
    <>
      <Header />
      <div className="cart">
        <section className="cart__banner">
          <img
            className="cart__banner__background"
            src={images.cartBanner}
            alt="peaches"
          />
          <div className="cart__banner__name-wrapper">
            <StyledText
              size="h2"
              weight="bold"
              family="headings"
              color="headings"
            >
              Cart
            </StyledText>
          </div>
        </section>

        {products.length && (
          <div className="cart__cart">
            <div className="cart__cart__products-container">
              {products.map((product) => (
                <ProductCart
                  productID={product.productID}
                  image={product.image}
                  name={product.name}
                  type={product.type}
                  price={product.price}
                  newPrice={product.newPrice}
                  quantity={product.quantity}
                  totalCost={product.totalCost}
                  totalDiscount={product.totalDiscount}
                />
              ))}
            </div>
            <div className="cart__cart__price-container">
              <div className="cart__cart__price-container__price">
                <StyledText
                  size="h6"
                  weight="thin"
                  family="products"
                  color="productText"
                >
                  Total Cost: {countTotalCost()}
                  {" $"}
                </StyledText>
                <StyledText
                  size="h6"
                  weight="thin"
                  family="products"
                  color="productText"
                >
                  Discount: {countTotalDiscount()}
                  {" $"}
                </StyledText>
              </div>
            </div>
            <div className="cart__cart__order-btn">
              {isButtonVisible && (
                <StyledBtn
                  textColor="buttonTextWhite"
                  bgColor="buttons"
                  borderColor="buttonBorder"
                  onClick={openForm}
                >
                  To order
                </StyledBtn>
              )}
            </div>
            {isFormOpen && <Form />}
          </div>
        )}
      </div>
      <Footer />
    </>
  );
};
