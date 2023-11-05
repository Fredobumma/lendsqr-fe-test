import { Figure } from "./";
import { search } from "src/assets";
import type { InputProps } from "src/models";

const SearchInput = ({ name, placeholder, type }: InputProps) => {
	return (
		<div className="input-container search-container">
			<div className="input__box search--input">
				<input
					className="input"
					id={name}
					name={name}
					placeholder={placeholder}
					type={type}
				/>
			</div>
			<div className="search__icon">
				<Figure image={search} />
			</div>
		</div>
	);
};

export default SearchInput;
// Basic app search-input structure.
