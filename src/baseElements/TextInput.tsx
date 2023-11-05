import { Text } from "./";
import type { InputProps } from "src/models";

const TextInput = ({ label, name, placeholder, type }: InputProps) => {
	return (
		<div className="input-container">
			{label && (
				<label htmlFor={name} className="input__label">
					{label}
				</label>
			)}
			<div className="input__box text--input">
				<input
					className="input"
					id={name}
					name={name}
					placeholder={placeholder}
					type={type}
				/>
				{type === "password" && (
					<span>
						<Text tag="span" className="form__text">
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
