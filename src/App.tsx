import { Heading, Text } from "./elements";

function App() {
	return (
		<>
			<div className="block-form">
				<Heading
					tag="h1"
					className="heading form__heading"
					children="Welcome!"
				/>
				<Text children="Enter details to login." />
			</div>
		</>
	);
}

export default App;
