import React from 'react';

import ThemeSwitch from '../ThemeSwitch/ThemeSwitch';

import './Header.scss';

export default function Header ({ children, doDarkModeToggle }) {
    return (
        <div className="header">
            <div className="container">
                <ThemeSwitch doDarkModeToggle={doDarkModeToggle} />
                {children}
            </div>
        </div>
    );
}
