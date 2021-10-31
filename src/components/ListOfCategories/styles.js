import styled, { css } from "styled-components";

export const List = styled.ul`
	display: flex;
	overflow: scroll;
	width: 100%;
	list-style: none;
	${props =>
		props.fixed &&
		css`
			 {
				background: #fff;
				border-radius: 60px;
				box-shadow: 0 0 20px rgba(0, 0, 0, 0.3);
				margin: 0 auto;
				left: 0;
				right: 0;
				top: -20px;
				max-width: 400px;
				padding: 8px;
				position: fixed;
				transform: scale(0.75);
				z-index: 1;
			}
		`}
`;

export const ListItem = styled.li`
	padding: 0 8px;
`;
