import React from "react";
import { useAuth } from "../../contexts/AuthContext";
import { useHeaderShadow } from "../../hooks/useHeaderShadow";
import { StyledHeader, StyledNav, StyledLinkDiv, StyledLink } from "./styles";
import {
	FaHome,
	FaSearch,
	FaBookReader,
	FaChartBar,
	FaUserAltSlash,
	FaUserAlt,
} from "react-icons/fa";

function Header({ login }) {
	const { currentUser, logout } = useAuth();
	const [shadow, animate] = useHeaderShadow();

	return (
		<StyledHeader $shadow={shadow} $animate={animate} $login={login}>
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
					<StyledLinkDiv $loginbtn={true} onClick={logout}>
						<FaUserAltSlash />
						<StyledLink $loginbtn={true} $logout={true} to="/login">
							Logout
						</StyledLink>
					</StyledLinkDiv>
				)}
			</StyledNav>
		</StyledHeader>
	);
}

export default React.memo(Header);
