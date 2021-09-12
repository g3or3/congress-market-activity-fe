import { useState, useEffect } from "react";
import { fetchMostRecent, fetchSearched } from "../services/index";

const initDisplayRecords = "100";
const initSearchBy = "name";
const initShowRecordsBy = {
	mostRecent: "mostRecent",
	searched: "searched",
};

export const useSearchToolbar = () => {
	const [tableData, setTableData] = useState([]);
	const [searchBy, setSearchBy] = useState(initSearchBy);
	const [searchInput, setSearchInput] = useState("");
	const [lastSearch, setLastSearch] = useState({});
	const [displayRecords, setDisplayRecords] = useState(initDisplayRecords);
	const [showRecordsBy, setShowRecordsBy] = useState(initShowRecordsBy.mostRecent);

	const handleMostRecent = async (numRecords) => {
		let res;
		if (numRecords) {
			const { data } = await fetchMostRecent(numRecords);
			res = data;
		} else {
			const { data } = await fetchMostRecent(displayRecords);
			res = data;
		}
		setTableData(res);
		setShowRecordsBy(initShowRecordsBy.mostRecent);
	};

	const handleSearch = async (numRecords) => {
		let res;
		if (numRecords) {
			const { data } = await fetchSearched(
				lastSearch.searchBy,
				lastSearch.searchInput,
				numRecords
			);
			res = data;
		} else {
			const { data } = await fetchSearched(searchBy, searchInput, displayRecords);
			res = data;
		}
		setTableData(res);
		setShowRecordsBy(initShowRecordsBy.searched);

		if (!numRecords) {
			setLastSearch({ searchBy, searchInput });
			setSearchInput("");
		}
	};

	const handleDisplayRecords = (numRecords) => {
		if (showRecordsBy === initShowRecordsBy.mostRecent) {
			handleMostRecent(numRecords);
		} else if (showRecordsBy === initShowRecordsBy.searched) {
			handleSearch(numRecords);
		}
	};

	useEffect(() => {
		(async () => {
			try {
				const { data } = await fetchMostRecent();
				setTableData(data);
			} catch (err) {
				console.log(err);
			}
		})();
	}, []);

	useEffect(() => {
		setSearchInput("");
	}, [searchBy]);

	return {
		tableData,
		handleMostRecent,
		searchBy,
		setSearchBy,
		searchInput,
		setSearchInput,
		handleSearch,
		setDisplayRecords,
		handleDisplayRecords,
	};
};
