import React from "react";
import { useSearchToolbar } from "../../hooks/useSearchToolbar";
import { Header } from "../index";
import MainTable from "./MainTable";
import Toolbar from "./Toolbar";
import { MainContainer } from "./styles";

const Search = () => {
	const {
		tableData,
		handleMostRecent,
		searchBy,
		setSearchBy,
		searchInput,
		setSearchInput,
		handleSearch,
		setDisplayRecords,
		handleDisplayRecords,
	} = useSearchToolbar();

	return (
		<MainContainer>
			<Header />
			<Toolbar
				handleMostRecent={handleMostRecent}
				searchBy={searchBy}
				setSearchInput={setSearchInput}
				setSearchBy={setSearchBy}
				searchInput={searchInput}
				handleSearch={handleSearch}
				handleDisplayRecords={handleDisplayRecords}
				setDisplayRecords={setDisplayRecords}
			/>
			<MainTable data={tableData} />
		</MainContainer>
	);
};

export default Search;
