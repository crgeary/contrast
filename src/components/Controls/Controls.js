import React from 'react';

import './Controls.scss';

export default function Controls ({ children }) {
    return (
        <div className="controls">
            <div className="container">
                {children}
            </div>
        </div>
    );
}
