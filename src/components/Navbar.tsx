import { useState } from "react";

import { Figure, SearchInput } from "src/baseElements";
import { close_menu, logo, menu, notification } from "src/assets";
import { MediaObject } from "./";

const Navbar = () => {
	const [menuVisible, setMenuVisible] = useState(false);

	return (
		<nav className="nav">
			<Figure altText="logo" image={logo} />
			{/* toggling the menu icon */}
			<div onClick={() => setMenuVisible(!menuVisible)}>
				<Figure
					altText="menu"
					image={menuVisible ? close_menu : menu}
					containerStyles="menu"
				/>
			</div>
			<div className={`menu-layout ${menuVisible && "mobile"}`}>
				<SearchInput
					name="search"
					placeholder="Search for anything"
					type="search"
				/>
				<div className="nav__details">
					<a href="/" className="nav__link">
						Docs
					</a>
					<Figure altText="notification icon" image={notification} />
					<MediaObject />
				</div>
			</div>
		</nav>
	);
};

export default Navbar;
// Navbar component structure.
