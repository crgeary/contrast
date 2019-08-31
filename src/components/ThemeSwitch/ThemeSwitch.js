import React from 'react';

import SR from '../SR/SR';

import './ThemeSwitch.scss';

export default function ThemeSwitch ({ doDarkModeToggle }) {
    return (
        <label className="theme-switch" htmlFor="theme">
            <input type="checkbox" id="theme" className="sr" onChange={doDarkModeToggle} />
            <span className="theme-switch__indicator" />
            <SR>Dark Mode</SR>
        </label>
    );
}
