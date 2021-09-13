import React, { useEffect, useRef, useState, useMemo } from "react";
import { useTable, useSortBy } from "react-table";
import {
	FaSort,
	FaSortAlphaDownAlt,
	FaSortAlphaUp,
	FaSortAmountDown,
	FaSortAmountUpAlt,
} from "react-icons/fa";
import {
	CompanyDiv,
	CompanyTable,
	PopUp,
	StyledHeader,
	StyledRow,
	StyledRowData,
	StyledTableHeadings,
	StyledUrlLink,
} from "./styles";

const MainTable = ({ data }) => {
	const [popUp, setPopUp] = useState({});
	const columns = useMemo(() => colData, []);

	const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } = useTable(
		{
			columns,
			data,
			initialState: {
				hiddenColumns: ["asset", "amount_range", "description", "url"],
			},
		},
		useSortBy
	);

	const tableRef = useRef(null);

	useEffect(() => {
		setPopUp({
			top: tableRef.current.offsetTop,
		});
	}, []);

	return (
		<>
			<PopUp $pos={popUp}>
				<strong>{popUp.data && popUp.data[0]}</strong>
				{popUp.data && popUp.data[1]}
			</PopUp>
			<CompanyDiv>
				<CompanyTable ref={tableRef} {...getTableProps()}>
					<thead>
						{headerGroups.map((headerGroup) => (
							<StyledHeader {...headerGroup.getHeaderGroupProps()}>
								{headerGroup.headers.map((column) => (
									<StyledTableHeadings
										{...column.getHeaderProps({
											...column.getSortByToggleProps(),
											style: { width: column.width },
										})}
										onMouseOver={(e) => {
											setPopUp({
												...popUp,
												data: popUpData[column.id],
												left: e.target.offsetLeft + e.target.children[0].offsetLeft,
											});
										}}
										onMouseLeave={(e) => {
											setPopUp({
												...popUp,
												data: "",
												left: 0,
											});
										}}
									>
										<span
											style={{
												cursor: "pointer",
												pointerEvents: "none",
												display: "flex",
												justifyContent: "center",
											}}
										>
											{column.render("Header")}
											{sortingLogo(column)}
										</span>
									</StyledTableHeadings>
								))}
							</StyledHeader>
						))}
					</thead>

					<tbody {...getTableBodyProps()}>
						{rows.map((row) => {
							prepareRow(row);
							return (
								<StyledRow {...row.getRowProps()}>
									{row.cells.map((cell) => {
										if (cell.column.id === "doc_id") {
											return (
												<StyledRowData {...cell.getCellProps()} $isdocid>
													<StyledUrlLink href={cell.row.values.url} target="_blank">
														{cell.render("Cell")}
													</StyledUrlLink>
												</StyledRowData>
											);
										}
										return (
											<StyledRowData
												{...cell.getCellProps({
													style: { width: cell.width },
												})}
												$iscompany={cell.column.id === "company" ? true : false}
												onClick={() => console.log(cell.row.values)}
											>
												{cell.render("Cell")}
											</StyledRowData>
										);
									})}
								</StyledRow>
							);
						})}
					</tbody>
				</CompanyTable>
			</CompanyDiv>
		</>
	);
};

const colData = [
	{
		Header: "Document ID",
		accessor: "doc_id",
		width: "3%",
		disableSortBy: true,
	},
	{
		Header: "Last Name",
		accessor: "last_name",
		width: "4%",
	},
	{
		Header: "First Name",
		accessor: "first_name",
		width: "5%",
	},
	{
		Header: "Ticker",
		accessor: "ticker",
		width: "3%",
	},
	{
		Header: "Company Name",
		accessor: "company",
		width: "7%",
	},
	{
		Header: "Asset",
		accessor: "asset",
	},
	{
		Header: "Type",
		accessor: "type",
		width: "3%",
		disableSortBy: true,
	},
	{
		Header: "Date",
		id: "date",
		accessor: (row) => new Date(row.date),
		Cell: ({ value }) => value.toLocaleDateString(),
		width: "4%",
		sortType: "datetime",
	},
	{
		Header: "Amount Range",
		accessor: "amount_range",
	},
	{
		Header: "Description",
		accessor: "description",
	},
	{
		Header: "Url",
		accessor: "url",
	},
];

const sortingLogo = (column) => {
	if (column.isSorted) {
		if (column.isSortedDesc) {
			if (column.id === "date") {
				return <FaSortAmountDown style={{ marginLeft: "3px" }} />;
			} else {
				return <FaSortAlphaDownAlt style={{ marginLeft: "3px" }} />;
			}
		} else {
			if (column.id === "date") {
				return <FaSortAmountUpAlt style={{ marginLeft: "3px" }} />;
			} else {
				return <FaSortAlphaUp style={{ marginLeft: "3px" }} />;
			}
		}
	} else if (
		column.id === "last_name" ||
		column.id === "first_name" ||
		column.id === "ticker" ||
		column.id === "company" ||
		column.id === "date"
	) {
		return <FaSort style={{ marginLeft: "3px" }} />;
	}
	return "";
};

const popUpData = {
	doc_id: [
		"Periodic Transaction Report Document ID: ",
		"Click the ID number to be taken to the official report filed by the Office of the Clerk.",
	],
	last_name: [
		"Congress Member's Last Name: ",
		"Searching by last name, first name or both is supported. Click the cells below to display additional details pertaining to the corresponding record.",
	],
	first_name: [
		"Congress Member's First Name: ",
		"Searching by last name, first name or both is supported. Click the cells below to display additional details pertaining to the corresponding record.",
	],
	ticker: [
		"Company Ticker: ",
		"Try searching for your favorite ticker above to see corresponding transactions. Click the cells below to display additional details pertaining to the corresponding record.",
	],
	company: [
		"Company Name: ",
		"Try searching for your favorite company above to see corresponding transactions. Click the cells below to display additional details pertaining to the corresponding record.",
	],
	type: [
		"Type of Transaction: ",
		"'P' is for 'Purchased', 'S' is for 'Sold', and 'S (Partial)' is for 'Sold Partial'. Click the cells below to display additional details pertaining to the corresponding record.",
	],
	date: [
		"Date of Transaction: ",
		"Sorting in ascending or descending order is supported by clicking any of the headers with the arrows.",
	],
};

export default MainTable;
