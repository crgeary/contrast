import React, { ComponentPropsWithoutRef, FC } from "react";
import styled from "styled-components";
import { Container } from "../Container";

export const Footer: FC<ComponentPropsWithoutRef<"footer">> = ({ children, ...props }) => {
    return (
        <StyledFooter role="contentinfo" {...props}>
            <Container>{children}</Container>
        </StyledFooter>
    );
};

const StyledFooter = styled.footer`
    font-size: 14px;
    margin-bottom: 25px;
    color: #718096;
    margin-top: auto;
    text-align: center;
`;
