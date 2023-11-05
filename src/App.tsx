import { SearchInput, SelectInput, TextInput } from "./baseElements";

const selectOptions = [
	{ value: 1, label: "English" },
	{ value: 2, label: "Hindi" },
];

function App() {
	return (
		<>
			<SearchInput
				name="search"
				type="search"
				placeholder="Search for anything"
			/>
			<div className="block-form">
				<TextInput name="email" type="text" placeholder="Email" />
				<TextInput name="email" type="password" placeholder="Password" />
			</div>
			<SelectInput label="Status" name="search" optionsList={selectOptions} />
			<TextInput name="email" type="text" placeholder="Email" label="Email" />
		</>
	);
}

export default App;
