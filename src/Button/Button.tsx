import React from 'react';
import styled from 'styled-components';

const StyledButton = styled.button`
	border: 1px solid red;
	cursor: pointer;
	text-align: center;
	transition: background 250ms ease-in-out, transform 150ms ease;
	:active {
		transform: scale(0.99);
	}
	:hover {
		cursor: pointer;
	}
`;

type Props = {
	children: React.ReactNode;
};

export const Button = ({ children }: Props) => {
	return <StyledButton>{children}</StyledButton>;
};
