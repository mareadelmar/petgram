import styled from "styled-components";
import { Link as LinkRouter } from "react-router-dom";

export const Nav = styled.nav`
	width: 100%;
	max-width: 500px;
	height: 50px;
	display: flex;
	align-items: center;
	justify-content: space-around;
	background: #fcfcfc;
	border-top: 1px solid #e0e0e0;
	position: fixed;
	left: 0;
	right: 0;
	bottom: 0;
	margin: 0 auto;
	z-index: 9;
`;

export const Link = styled(LinkRouter)`
	display: inline-flex;
	align-items: center;
	justify-content: center;
	width: 100%;
	height: 100%;
	color: #888;
	text-decoration: none;
`;
