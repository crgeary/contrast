import React, { ComponentPropsWithoutRef, FC } from 'react';
import styled from 'styled-components';

import { ThemeSwitch } from '../ThemeSwitch/ThemeSwitch';

type HeaderProps = ComponentPropsWithoutRef<'header'> & {
    doDarkModeToggle: () => void;
};

export const Header: FC<HeaderProps> = ({ children, doDarkModeToggle, ...props }) => {
    return (
        <StyledHeader role="banner" {...props}>
            <div className="container">
                <ThemeSwitch doDarkModeToggle={doDarkModeToggle} />
                {children}
            </div>
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
