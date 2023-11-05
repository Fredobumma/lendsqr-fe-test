import Select, { StylesConfig } from "react-select";
import type { InputProps } from "src/models";

type OmittedInputProps = Omit<Omit<InputProps, "type">, "placeholder">;

type SelectInputProps = {
	optionsList: object[];
} & OmittedInputProps;

const customStyles: StylesConfig = {
	control: (provided, { isFocused }) => ({
		...provided,
		border: isFocused
			? "1px solid #39CDCC"
			: "1px solid rgba(33, 63, 125, 0.2)",
		borderRadius: "8px",
		boxShadow: "none",
		"&:hover": {
			boxShadow: "none",
		},
		fontWeight: 600,
		height: 44,
		paddingInline: "12px",
	}),
	dropdownIndicator: (provided) => ({
		...provided,
		color: "#213F7D",
		opacity: 0.7,
	}),
	indicatorSeparator: (provided) => ({
		...provided,
		display: "none",
	}),
	singleValue: (provided) => ({
		...provided,
		color: "inherit",
	}),
	option: (provided, { isSelected }) => ({
		...provided,
		backgroundColor: isSelected ? "#39CDCC" : "transparent",
	}),
	placeholder: (provided) => ({
		...provided,
		color: "inherit",
		fontWeight: 400,
		opacity: 0.7,
	}),
};

const SelectInput = ({ label, name, optionsList }: SelectInputProps) => {
	return (
		<div className="input-container">
			{label && (
				<label htmlFor={name} className="input__label">
					{label}
				</label>
			)}
			<Select
				isSearchable
				name={name}
				noOptionsMessage={(value) => `${value} not found.`}
				options={optionsList}
				placeholder="Select"
				styles={customStyles}
			/>
		</div>
	);
};

export default SelectInput;
// Basic app select-input structure.
