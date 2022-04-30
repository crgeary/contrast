import styled from "styled-components";

export type ContainerProps = {
    isWide?: boolean;
};

export const Container = styled.div<ContainerProps>`
    margin: 0 auto;
    max-width: ${({ isWide }) => (isWide ? 1440 : 1040)}px;
    padding: 0 15px;
`;
