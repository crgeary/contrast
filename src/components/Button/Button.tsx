import React, { ComponentPropsWithoutRef, FC } from "react";
import styled from "styled-components";

export const Button: FC<ComponentPropsWithoutRef<"button">> = (props) => {
    return <StyledButton type="submit" {...props} />;
};

const StyledButton = styled.button`
    display: inline-block;
    cursor: pointer;
    border: none;
    border-radius: 2px;
    font-size: 16px;
    padding: 8px 20px;
    line-height: 1;
    background-color: #718096;
    color: #ffffff;

    [disabled] {
        opacity: 0.35;
        cursor: not-allowed;
    }
`;
