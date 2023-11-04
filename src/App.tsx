import { TextInput } from "./baseElements";

function App() {
	return (
		<>
			<div className="block-form">
				<TextInput name="email" type="text" placeholder="Email" />
				<TextInput name="email" type="password" placeholder="Password" />
			</div>
			<TextInput name="email" type="text" placeholder="Email" label="Email" />
		</>
	);
}

export default App;
