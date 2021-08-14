import { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import axiosInstance from "../../services/axiosInstance";
import { ResponsiveCirclePacking } from "@nivo/circle-packing";
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
} from "./styles";

const MostTransactedCompanies = () => {
	const [circleData, setCircleData] = useState([]);

	const { goBack } = useHistory();

	useEffect(() => {
		(async () => {
			let i = 0;
			const colors = ["#C6DBEF", "#4292C6", "#9ECAE1", "#6BAED6", "#BCBDDC", "#9E9AC8"];

			const { data } = await axiosInstance.get("api/record/most_transacted");

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
	}, []);

	return (
		<>
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
									<StyledRow>
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
						*Companies and corresponding number of transactions in the year{" "}
						{new Date().getFullYear()}*
					</Note>
				</CircleChart>
			</MainContainer>
		</>
	);
};

export default MostTransactedCompanies;
