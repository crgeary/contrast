import React from 'react';

import './SR.scss';

export default function SR ({ children }) {
    return (
        <span className="sr">{children}</span>
    );
}
