import "./scss/App.scss";
import { Header } from "./components/Header/header";
import { Main } from "./pages/main";

function App() {
	return (
		<div className="App">
			<Header />
			<Main />
		</div>
	);
}

export default App;
