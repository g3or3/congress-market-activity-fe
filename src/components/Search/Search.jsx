import React, { useEffect, useState } from "react";
import { useTable } from "react-table";
import axiosInstance from "../../services/axiosInstance";
import { Header } from "../index";
import {
	CompanyDiv,
	CompanyTable,
	MainContainer,
	StyledHeader,
	StyledRow,
	StyledRowData,
	StyledTableHeadings,
	StyledUrlLink,
} from "./styles";

const Search = () => {
	const [tableData, setTableData] = useState([]);

	const columns = React.useMemo(
		() => [
			{
				Header: "Document ID",
				accessor: "doc_id",
			},
			{
				Header: "First Name",
				accessor: "first_name",
			},
			{
				Header: "Last Name",
				accessor: "last_name",
			},
			{
				Header: "Ticker",
				accessor: "ticker",
			},
			{
				Header: "Company",
				accessor: "company",
			},
			{
				Header: "Asset",
				accessor: "asset",
			},
			{
				Header: "Type",
				accessor: "type",
			},
			{
				Header: "Date",
				accessor: "date",
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
		],
		[]
	);

	const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } = useTable({
		columns,
		data: tableData,
		initialState: {
			hiddenColumns: ["asset", "amount_range", "description", "url"],
		},
	});

	useEffect(() => {
		(async () => {
			try {
				const { data } = await axiosInstance.get("/api/record/most-recent");
				setTableData(data);
			} catch (err) {
				console.log(err);
			}
		})();
	}, []);

	return (
		<MainContainer>
			<Header />
			<CompanyDiv>
				<CompanyTable {...getTableProps()}>
					<thead>
						{headerGroups.map((headerGroup) => (
							<StyledHeader {...headerGroup.getHeaderGroupProps()}>
								{headerGroup.headers.map((column) => (
									<StyledTableHeadings {...column.getHeaderProps()}>
										{column.render("Header")}
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
												<StyledRowData {...cell.getCellProps()}>
													<StyledUrlLink href={cell.row.values.url} target="_blank">
														{cell.render("Cell")}
													</StyledUrlLink>
												</StyledRowData>
											);
										}
										return (
											<StyledRowData
												{...cell.getCellProps()}
												$isdocid={cell.column.id === "doc_id" ? true : false}
												$isfirstname={cell.column.id === "first_name" ? true : false}
												$islastname={cell.column.id === "last_name" ? true : false}
												$iscompany={cell.column.id === "company" ? true : false}
												$isasset={cell.column.id === "asset" ? true : false}
												$isamount={cell.column.id === "amount_range" ? true : false}
												$isdescription={cell.column.id === "description" ? true : false}
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
		</MainContainer>
	);
};

export default Search;
