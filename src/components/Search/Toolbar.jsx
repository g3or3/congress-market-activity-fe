import { FaSearchPlus, FaSlidersH, FaRegCalendarAlt, FaMouse } from "react-icons/fa";
import {
	ToolBar,
	ShowingRecords,
	MostRecentBtn,
	SearchInput,
	SearchBar,
	SearchButton,
	SelectTotal,
	SearchBy,
	RadioLabel,
	SearchByLabel,
} from "./styles";

const Toolbar = (props) => {
	const {
		handleMostRecent,
		searchBy,
		setSearchBy,
		searchInput,
		setSearchInput,
		handleSearch,
		setDisplayRecords,
		handleDisplayRecords,
	} = props;

	return (
		<ToolBar>
			<MostRecentBtn onClick={() => handleMostRecent()}>
				<FaRegCalendarAlt />
				<span style={{ marginLeft: "10px" }}>Most Recent</span>
			</MostRecentBtn>
			<SearchBy>
				<SearchByLabel>
					<span style={{ marginBottom: 10, fontWeight: "bold" }}>Search By:</span>
					<FaMouse style={{ marginLeft: "10px" }} />
				</SearchByLabel>
				<div>
					<RadioLabel>
						Name{" "}
						<input
							type="radio"
							name="searchBy"
							value="name"
							defaultChecked
							onChange={(e) => setSearchBy(e.target.value)}
						/>
					</RadioLabel>
					<RadioLabel>
						Ticker{" "}
						<input
							type="radio"
							name="searchBy"
							value="ticker"
							onChange={(e) => setSearchBy(e.target.value)}
						/>
					</RadioLabel>
					<RadioLabel>
						Company{" "}
						<input
							type="radio"
							name="searchBy"
							value="company"
							onChange={(e) => setSearchBy(e.target.value)}
						/>
					</RadioLabel>
					<RadioLabel>
						Date{" "}
						<input
							type="radio"
							name="searchBy"
							value="date"
							onChange={(e) => setSearchBy(e.target.value)}
						/>
					</RadioLabel>
				</div>
			</SearchBy>

			<SearchInput>
				<FaSearchPlus style={{ color: "#807dba", marginLeft: "11px" }} />
				<SearchBar
					type={searchBy === "date" ? "date" : "text"}
					placeholder="Enter search term here.."
					value={searchInput}
					onChange={(e) => {
						setSearchInput(e.target.value);
					}}
				/>
				<SearchButton
					onClick={(e) => {
						e.preventDefault();
						handleSearch();
					}}
				>
					Search
				</SearchButton>
			</SearchInput>

			<ShowingRecords>
				<FaSlidersH />
				<SelectTotal
					onChange={(e) => {
						setDisplayRecords(e.target.value);
						handleDisplayRecords(e.target.value);
					}}
				>
					<option value={100} label="100" />
					<option value={250} label="250" />
					<option value={500} label="500" />
					<option value={1000} label="1000" />
				</SelectTotal>
			</ShowingRecords>
		</ToolBar>
	);
};

export default Toolbar;
