import "./scss/App.scss";
import { Header } from "./components/Header/header";
import { Main } from "./pages/main";
import { Footer } from "./components/Footer/footer";

function App() {
	return (
		<div className="App">
			<Header />
			<Main />
			<Footer />
		</div>
	);
}

export default App;
