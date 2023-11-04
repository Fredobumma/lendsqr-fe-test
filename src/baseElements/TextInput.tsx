import { Text } from "./";

interface TextInputProps {
	label?: string;
	name: string;
	placeholder: string;
	type: string;
}

const TextInput = ({ label, name, placeholder, type }: TextInputProps) => {
	return (
		<div className="input-container">
			{label && (
				<label htmlFor={name} className="input-label">
					{label}
				</label>
			)}
			<div className="text-input">
				<input
					className="input"
					id={name}
					name={name}
					placeholder={placeholder}
					type={type}
				/>
				{type === "password" && (
					<span>
						<Text tag="span" className="form-text">
							show
						</Text>
					</span>
				)}
			</div>
		</div>
	);
};

export default TextInput;
// Basic app text-input structure.
