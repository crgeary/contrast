import React, { FC } from "react";
import styled from "styled-components";

import { ScreenReaderText } from "../ScreenReaderText";

type ThemeSwitchProps = {
    doDarkModeToggle: () => void;
};

export const ThemeSwitch: FC<ThemeSwitchProps> = ({ doDarkModeToggle, ...props }) => {
    return (
        <StyledThemeSwitch htmlFor="theme" {...props}>
            <input type="checkbox" id="theme" onChange={doDarkModeToggle} />
            <Indicator />
            <ScreenReaderText>Dark Mode</ScreenReaderText>
        </StyledThemeSwitch>
    );
};

const Indicator = styled.span`
    width: 24px;
    height: 24px;
    background-color: ${({ theme }) => theme.colors.primary};
    display: block;
    transition: transform 0.2s ease;
    border-radius: 9999px;
`;

const StyledThemeSwitch = styled.label`
    position: absolute;
    top: 25px;
    right: 25px;
    height: 30px;
    width: 54px;
    background-color: ${({ theme }) => theme.themeSwitch.background};
    padding: 3px;
    border-radius: 9999px;
    cursor: pointer;
    box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06);

    input[type="checkbox"] {
        position: absolute;
        width: 1px;
        height: 1px;
        padding: 0;
        margin: -1px;
        overflow: hidden;
        clip: rect(0, 0, 0, 0);
        border: 0;
    }

    input[type="checkbox"]:checked + ${Indicator} {
        transform: translateX(100%);
    }

    @media print {
        display: none;
    }
`;

/*

.app--dark {
    .theme-switch {
        background-color: #2d3748;
        &__indicator {
            background-color: #38b2ac;
        }
    }
}

*/
