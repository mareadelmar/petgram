import styled from "styled-components";
import { fadeIn } from "../../styles/animation";

export const Article = styled.article`
	min-height: 200px;
	width: 100%;
`;

export const ImgWrapper = styled.div`
	display: block;
	height: 0;
	border-radius: 8px;
	overflow: hidden;
	padding: 56.25% 0 0 0;
	position: relative;
`;

export const Img = styled.img`
	${fadeIn()}
	box-shadow: 0 10px 14px rgba(0, 0, 0, 0.2);
	height: 100%;
	width: 100%;
	object-fit: cover;
	position: absolute;
	top: 0;
`;

export const Button = styled.button`
	padding-top: 8px;
	display: flex;
	align-items: center;
	& svg {
		margin-right: 4px;
	}
`;
