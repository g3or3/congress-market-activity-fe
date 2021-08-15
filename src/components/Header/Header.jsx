import React, { useState, useEffect } from "react";
import {
	FaChartBar,
	FaHome,
	FaCommentAlt,
	FaUserCircle,
	FaUserAltSlash,
} from "react-icons/fa";
import { StyledHeader, StyledNav, StyledLinkDiv, StyledLink } from "./styles";
import { useAuth } from "../../contexts/AuthContext";

function Header(props) {
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
		<StyledHeader shadow={shadow}>
			<StyledNav>
				<StyledLinkDiv>
					<FaHome />
					<StyledLink exact to="/">
						Home
					</StyledLink>
				</StyledLinkDiv>

				<StyledLinkDiv>
					<FaCommentAlt />
					<StyledLink to="/about">About</StyledLink>
				</StyledLinkDiv>

				<StyledLinkDiv>
					<FaChartBar />
					<StyledLink to="/most-transacted">Most Transacted</StyledLink>
				</StyledLinkDiv>

				{!currentUser && (
					<StyledLinkDiv loginBtn={true}>
						<FaUserCircle />
						<StyledLink loginBtn={true} to="/login">
							Login
						</StyledLink>
					</StyledLinkDiv>
				)}

				{currentUser && (
					<StyledLinkDiv loginBtn={true}>
						<FaUserAltSlash />
						<StyledLink loginBtn={true} logout={true} to="/login" onClick={logout}>
							Logout
						</StyledLink>
					</StyledLinkDiv>
				)}
			</StyledNav>
		</StyledHeader>
	);
}

export default Header;
