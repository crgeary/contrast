import React, { ComponentPropsWithoutRef, FC } from "react";
import styled from "styled-components";

import { Container } from "../Container";

export const Controls: FC<ComponentPropsWithoutRef<"div">> = ({ children, ...props }) => {
    return (
        <Wrapper {...props}>
            <Container>{children}</Container>
        </Wrapper>
    );
};

const Wrapper = styled.div`
    margin-bottom: 50px;
`;
