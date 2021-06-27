import React from "react";
import styled from "styled-components";

import { IButton } from "./Button";

const Container = styled.div<IButton.IProps>`
    cursor: ${({ disabled }) => (disabled ? "not-allowed" : "pointer")};
    color: ${({ theme }) => theme.colors.primary};
`;

export const Button: React.FunctionComponent<IButton.IProps> = props => {
    return <Container {...props} />;
};
