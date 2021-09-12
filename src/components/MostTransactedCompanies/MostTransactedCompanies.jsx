import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { fetchMostTransacted } from "../../services";
import { ResponsiveCirclePacking } from "@nivo/circle-packing";
import { FaRegCalendarAlt } from "react-icons/fa";
import {
	CirclePackChartHeading,
	BackButton,
	MainContainer,
	CompanyDiv,
	CompanyTable,
	StyledHeader,
	StyledTableHeadings,
	StyledRow,
	StyledRowData,
	CircleChart,
	Note,
	YearSelectionContainer,
	SelectYear,
} from "./styles";

const MostTransactedCompanies = () => {
	const [circleData, setCircleData] = useState([]);
	const [year, setYear] = useState(new Date().getFullYear().toString());

	const { goBack } = useHistory();

	const handleYearChange = (e) => {
		setYear(e.target.value);
	};

	useEffect(() => {
		(async () => {
			let i = 0;
			const colors = ["#C6DBEF", "#4292C6", "#9ECAE1", "#6BAED6", "#BCBDDC", "#9E9AC8"];

			const { data } = await fetchMostTransacted(year);

			setCircleData(
				data.reduce(
					(acc, curr) => {
						acc.children.push({
							id: curr.ticker,
							value: curr.total,
							color: colors[i++],
							company: curr.company,
						});
						if (i === colors.length) {
							i = 0;
						}
						return acc;
					},
					{ id: "root", children: [] }
				)
			);
		})();
	}, [year]);

	return (
		<div style={{ height: "100vh", backgroundColor: "#eeeef5" }}>
			<BackButton onClick={() => goBack()}>← Back</BackButton>
			<CirclePackChartHeading>Top 25 Transacted Companies</CirclePackChartHeading>
			<MainContainer>
				<CompanyDiv>
					<CompanyTable>
						<thead>
							<StyledHeader>
								<StyledTableHeadings>Ticker</StyledTableHeadings>
								<StyledTableHeadings>Company</StyledTableHeadings>
								<StyledTableHeadings>Total</StyledTableHeadings>
							</StyledHeader>
						</thead>
						<tbody>
							{circleData?.children
								?.sort((a, b) => a.total - b.total)
								.map((record, idx) => (
									<StyledRow key={idx}>
										<StyledRowData>{record.id}</StyledRowData>
										<StyledRowData>{record.company}</StyledRowData>
										<td>{record.value}</td>
									</StyledRow>
								))}
						</tbody>
					</CompanyTable>
				</CompanyDiv>

				<CircleChart>
					<ResponsiveCirclePacking
						data={circleData}
						theme={{
							fontSize: 17,
							fontFamily: "'Quattrocento Sans', sans-serif",
						}}
						colors={(d) => d.data.color}
						colorBy="id"
						leavesOnly
						margin={{ top: 20, right: 20, bottom: 20, left: 20 }}
						padding={10}
						enableLabels
						labelTextColor={{ from: "color", modifiers: [["darker", 1.5]] }}
						borderWidth={2}
						borderColor={{ from: "color", modifiers: [["darker", 0.3]] }}
					/>
					<Note>
						*Companies and corresponding number of transactions in the year
						<YearSelectionContainer>
							<FaRegCalendarAlt />
							<SelectYear onChange={handleYearChange}>
								<option value={2021} label="2021" />
								<option value={2020} label="2020" />
								<option value={2019} label="2019" />
								<option value={2018} label="2018" />
								<option value={2017} label="2017" />
							</SelectYear>
						</YearSelectionContainer>
						*
					</Note>
				</CircleChart>
			</MainContainer>
		</div>
	);
};

export default MostTransactedCompanies;
