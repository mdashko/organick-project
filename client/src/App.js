import "./scss/App.scss";
import Pages from "./pages/Index";
import { Cart } from "./pages/Cart";
//import { Form } from "./components/Form/Form";
import { ProductCart } from "./components/ProductCart/ProductCart";

function App() {
	return (
		<div className="App">
			{/* <Pages />	 */}
			<Cart />
		</div>
	);
}

export default App;
