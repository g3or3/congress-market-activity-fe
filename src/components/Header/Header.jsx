import React, { useState, useEffect } from "react";
import {
	FaHome,
	FaSearch,
	FaBookReader,
	FaChartBar,
	FaUserAltSlash,
	FaUserAlt,
} from "react-icons/fa";
import { StyledHeader, StyledNav, StyledLinkDiv, StyledLink } from "./styles";
import { useAuth } from "../../contexts/AuthContext";

function Header({ login }) {
	const [shadow, setShadow] = useState(false);

	const { currentUser, logout } = useAuth();

	const handleScroll = () => {
		if (document.documentElement.scrollTop !== 0) {
			setShadow(true);
		} else setShadow(false);
	};

	useEffect(() => {
		window.onscroll = () => handleScroll();
	}, []);

	return (
		<StyledHeader $shadow={shadow} $login={login}>
			<StyledNav>
				{!currentUser && (
					<StyledLinkDiv>
						<FaHome />
						<StyledLink to="/home">Home</StyledLink>
					</StyledLinkDiv>
				)}

				{currentUser && (
					<StyledLinkDiv>
						<FaSearch />
						<StyledLink exact to="/">
							Search
						</StyledLink>
					</StyledLinkDiv>
				)}

				<StyledLinkDiv>
					<FaBookReader />
					<StyledLink to="/about">About</StyledLink>
				</StyledLinkDiv>

				<StyledLinkDiv>
					<FaChartBar />
					<StyledLink to="/most-popular">Most Popular</StyledLink>
				</StyledLinkDiv>

				{!currentUser && (
					<StyledLinkDiv $loginbtn={true}>
						<FaUserAlt />
						<StyledLink $loginbtn={true} to="/login">
							Login
						</StyledLink>
					</StyledLinkDiv>
				)}

				{currentUser && (
					<StyledLinkDiv $loginbtn={true}>
						<FaUserAltSlash />
						<StyledLink $loginbtn={true} $logout={true} to="/login" onClick={logout}>
							Logout
						</StyledLink>
					</StyledLinkDiv>
				)}
			</StyledNav>
		</StyledHeader>
	);
}

export default React.memo(Header);
