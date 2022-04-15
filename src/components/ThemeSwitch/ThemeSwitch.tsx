import React, { FC } from 'react';

import { SR } from '../SR/SR';

import './ThemeSwitch.scss';

type ThemeSwitchProps = {
    doDarkModeToggle: () => void;
};

export const ThemeSwitch: FC<ThemeSwitchProps> = ({ doDarkModeToggle }) => {
    return (
        <label className="theme-switch" htmlFor="theme">
            <input type="checkbox" id="theme" className="sr" onChange={doDarkModeToggle} />
            <span className="theme-switch__indicator" />
            <SR>Dark Mode</SR>
        </label>
    );
};
