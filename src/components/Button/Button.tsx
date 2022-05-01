import React, { ComponentPropsWithoutRef, FC } from "react";
import styled from "styled-components";
import { theme } from "../../theme";

export const Button: FC<ComponentPropsWithoutRef<"button">> = (props) => {
    return <StyledButton type="submit" {...props} />;
};

const StyledButton = styled.button`
    display: inline-block;
    cursor: pointer;
    border: none;
    border-radius: 7px;
    font-size: 16px;
    padding: 8px 24px;
    line-height: 1;
    background-color: ${({ theme }) => theme.colors.primary};
    color: #ffffff;

    :disabled {
        opacity: 0.5;
        cursor: not-allowed;
    }
`;
