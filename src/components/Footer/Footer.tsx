import React, { ComponentPropsWithoutRef, FC } from 'react';
import styled from 'styled-components';

export const Footer: FC<ComponentPropsWithoutRef<'footer'>> = ({ children, ...props }) => {
    return (
        <StyledFooter role="contentinfo" {...props}>
            {children}
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
