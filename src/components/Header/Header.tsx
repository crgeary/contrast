import React, { ComponentPropsWithoutRef, FC } from 'react';
import styled from 'styled-components';
import { Container } from '../Container';

import { ThemeSwitch } from '../ThemeSwitch/ThemeSwitch';

type HeaderProps = ComponentPropsWithoutRef<'header'> & {
    doDarkModeToggle: () => void;
};

export const Header: FC<HeaderProps> = ({ children, doDarkModeToggle, ...props }) => {
    return (
        <StyledHeader role="banner" {...props}>
            <Container>
                <ThemeSwitch doDarkModeToggle={doDarkModeToggle} />
                {children}
            </Container>
        </StyledHeader>
    );
};

const StyledHeader = styled.header`
    text-align: center;
    padding-top: 65px;
    margin-bottom: 40px;
    font-size: 18px;
    position: relative;

    *:last-child {
        margin-bottom: 0;
    }
`;
