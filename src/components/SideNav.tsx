import { useState } from "react";

import {
	audit_logs,
	bank,
	briefcase,
	chevron,
	dashboard,
	fees_charges,
	fees_pricing,
	guarantors,
	handshake,
	karma,
	loan_bag,
	loan_offer,
	logout,
	piggy_bank,
	preferences,
	reports,
	service_account,
	services,
	settlements,
	systems,
	transactions,
	user_dashboard,
	whitelist,
} from "src/assets";
import { Figure, Text } from "src/baseElements";
import { ListItem } from "./";

const customersList = [
	{ icon: user_dashboard, title: "Users" },
	{ icon: guarantors, title: "Guarantors" },
	{ icon: loan_bag, title: "Loans" },
	{ icon: handshake, title: "Decision Models" },
	{ icon: piggy_bank, title: "Savings" },
	{ icon: loan_offer, title: "Loan Requests" },
	{ icon: whitelist, title: "Whitelist" },
	{ icon: karma, title: "Karma" },
];

const businessesList = [
	{ icon: briefcase, title: "Organization" },
	{ icon: loan_offer, title: "Loan Products" },
	{ icon: bank, title: "Savings Products" },
	{ icon: fees_charges, title: "Fees and Charges" },
	{ icon: transactions, title: "Transactions" },
	{ icon: services, title: "Services" },
	{ icon: service_account, title: "Service Account" },
	{ icon: settlements, title: "Settlements" },
	{ icon: reports, title: "Reports" },
];

const settingsList = [
	{ icon: preferences, title: "Preferences" },
	{ icon: fees_pricing, title: "Fees and Pricing" },
	{ icon: audit_logs, title: "Audit Logs" },
	{ icon: systems, title: "Systems Messages" },
	{ icon: logout, title: "Log Out" },
];

const SideNav = () => {
	const [isVisible, setIsVisible] = useState(false);

	return (
		<nav className="side-nav">
			<div
				className={`toggle-button ${isVisible ? "" : "closed-button"}`}
				onClick={() => setIsVisible(!isVisible)}
			>
				<Figure
					altText="toggle icon"
					containerStyles={isVisible ? "rotate" : ""}
					image={chevron}
				/>
			</div>
			<div className={`side-nav-container ${isVisible ? "" : "hidden"}`}>
				<div className="nav--item">
					<ListItem
						className="list-item--nav"
						icon={briefcase}
						text="Switch Organization"
					/>
					<Figure
						altText="chevron icon"
						containerStyles="chevron"
						image={chevron}
					/>
				</div>

				<ListItem
					className="list-item--nav in-active nav--item"
					icon={dashboard}
					text="Dashboard"
				/>

				<Text className="nav-group--title">CUSTOMERS</Text>
				{customersList.map(({ icon, title }, index) => (
					<ListItem
						className={`list-item--nav nav--item ${
							!index ? "active" : "in-active"
						}`}
						icon={icon}
						key={index}
						text={title}
					/>
				))}

				<Text className="nav-group--title">BUSINESSES</Text>
				{businessesList.map(({ icon, title }, index) => (
					<ListItem
						className="list-item--nav in-active nav--item"
						icon={icon}
						key={index}
						text={title}
					/>
				))}

				<Text className="nav-group--title">SETTINGS</Text>
				{settingsList.map(({ icon, title }, index) => (
					<ListItem
						className="list-item--nav in-active nav--item"
						icon={icon}
						key={index}
						text={title}
					/>
				))}
			</div>
		</nav>
	);
};

export default SideNav;
// Sidebar component structure.
