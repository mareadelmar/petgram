import styled from "styled-components";
import { Link as LinkRouter } from "react-router-dom";

export const Link = styled(LinkRouter)`
	display: flex;
	flex-direction: column;
	text-align: center;
	width: 75px;
	text-decoration: none;
`;

export const Img = styled.img`
	height: 75px;
	width: 75px;
	border-radius: 50%;
	object-fit: cover;
	overflow: hidden;
	border: 1px solid #fff;
	box-shadow: 0px 10px 14px rgba(0, 0, 0, 0.2);
`;
