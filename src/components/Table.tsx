import { chevron, filter, options } from "src/assets";
import { Figure, Text } from "src/baseElements";

const Table = () => {
	return (
		<>
			<div className="table-container">
				<table className="table">
					<thead>
						<tr>
							<th className="table__heading">
								<span className="heading">organization</span>
								<Figure image={filter} />
							</th>
							<th className="table__heading">
								<span className="heading">username</span>
								<Figure image={filter} />
							</th>
							<th className="table__heading">
								<span className="heading">email</span>
								<Figure image={filter} />
							</th>
							<th className="table__heading">
								<span className="heading">phone number</span>
								<Figure image={filter} />
							</th>
							<th className="table__heading">
								<span className="heading">date joined</span>
								<Figure image={filter} />
							</th>
							<th className="table__heading">
								<span className="heading">status</span>
								<Figure image={filter} />
							</th>
							<th></th>
						</tr>
					</thead>
					<tbody>
						<tr className="table__row">
							<td className="table__cell">Stephanie Og</td>
							<td className="table__cell">Stephanie Og</td>
							<td className="table__cell">Stephanie Og</td>
							<td className="table__cell">Stephanie Og</td>
							<td className="table__cell">Stephanie Og</td>
							<td className="table__cell">Stephanie Og</td>
							<td className="table__cell">
								<Figure image={options} />
							</td>
						</tr>
						<tr className="table__row">
							<td className="table__cell">Stephanie Og</td>
							<td className="table__cell">Stephanie Og</td>
							<td className="table__cell">Stephanie Og</td>
							<td className="table__cell">Stephanie Og</td>
							<td className="table__cell">Stephanie Og</td>
							<td className="table__cell">Stephanie Og</td>
							<td className="table__cell">
								<Figure image={options} />
							</td>
						</tr>
						<tr className="table__row">
							<td className="table__cell">Stephanie Og</td>
							<td className="table__cell">Stephanie Og</td>
							<td className="table__cell">Stephanie Og</td>
							<td className="table__cell">Stephanie Og</td>
							<td className="table__cell">Stephanie Og</td>
							<td className="table__cell">Stephanie Og</td>
							<td className="table__cell">
								<Figure image={options} />
							</td>
						</tr>
						<tr className="table__row">
							<td className="table__cell">Stephanie Og</td>
							<td className="table__cell">Stephanie Og</td>
							<td className="table__cell">Stephanie Og</td>
							<td className="table__cell">Stephanie Og</td>
							<td className="table__cell">Stephanie Og</td>
							<td className="table__cell">Stephanie Og</td>
							<td className="table__cell">
								<Figure image={options} />
							</td>
						</tr>
					</tbody>
				</table>
			</div>
			<div className="pagination-container">
				<div className="page__details">
					<Text>Showing</Text>
					<div className="page__select">
						<Text>100</Text>
						<Figure image={chevron} containerStyles="chevron" />
					</div>
					<Text>out of 100</Text>
				</div>
				<ul className="page__list">
					<li className="page__btn">
						<Figure image={chevron} containerStyles="chevron" />
					</li>
					<li className="page__numbers"> 1</li>
					<li className="page__numbers active">2</li>
					<li className="page__numbers">3</li>
					<li className="page__numbers">4</li>
					<li className="page__numbers">5</li>
					<li className="page__numbers">6</li>
					<li className="page__dots">...</li>
					<li className="page__numbers"> 10</li>
					<li className="page__btn">
						<Figure image={chevron} containerStyles="chevron" />
					</li>
				</ul>
			</div>
		</>
	);
};

export default Table;
