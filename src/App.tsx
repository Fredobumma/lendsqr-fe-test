import { ListItem } from "./components";

function App() {
	return (
		<>
			<ListItem className="list-item--options" />
			<ListItem className="list-item--nav" />
			<ListItem className="list-item--nav in-active" />
			<ListItem className="list-item--route" />
		</>
	);
}

export default App;
