import React, { ComponentPropsWithoutRef, FC } from 'react';
import styled from 'styled-components';

export const Controls: FC<ComponentPropsWithoutRef<'div'>> = ({ children, ...props }) => {
    return (
        <StyledControls {...props}>
            <div className="container">{children}</div>
        </StyledControls>
    );
};

const StyledControls = styled.div`
    margin-bottom: 50px;
`;
