import React, { ComponentPropsWithoutRef, FC } from "react";
import styled from "styled-components";

export const HeaderDescription: FC<ComponentPropsWithoutRef<"div">> = ({ children, ...props }) => {
    return (
        <StyledHeaderDescription {...props}>
            <p>{children}</p>
        </StyledHeaderDescription>
    );
};

const StyledHeaderDescription = styled.div`
    p {
        display: inline-block;
    }

    svg {
        color: #285e61;
    }

    @media print {
        display: none;
    }
`;
