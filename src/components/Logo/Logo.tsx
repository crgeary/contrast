import React, { ComponentPropsWithoutRef, FC } from "react";
import styled from "styled-components";

export const Logo: FC<ComponentPropsWithoutRef<"a">> = ({ ...props }) => {
    return (
        <StyledLogo href="/" {...props}>
            <svg fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 478 94">
                <path
                    d="M85 72.45C77.3 85.12 62.97 93.18 46.6 93.18 19.57 93.18 0 72.96 0 46.6 0 20.22 19.58 0 46.6 0 62.84 0 77.17 8.06 85 20.74L67.32 30.98c-3.97-6.92-11.65-11.01-20.74-11.01-15.87 0-26.11 10.62-26.11 26.62s10.24 26.63 26.11 26.63c9.09 0 16.9-4.1 20.74-11.01l17.66 10.24Zm69.1-13.06c0 19.07-15.1 33.8-33.92 33.8s-33.93-14.73-33.93-33.8c0-19.07 15.1-33.79 33.92-33.79s33.92 14.72 33.92 33.8Zm-22.74-10.2-21.4 21.41c-2.8-2.65-4.5-6.52-4.5-11.2 0-9.1 6.4-15.11 14.72-15.11 4.54 0 8.51 1.8 11.18 4.9Zm65.98-23.59c-8.45 0-14.85 3.07-18.3 7.8v-6h-19.2v64h19.2V56.44c0-9.09 4.86-13.19 11.9-13.19 6.14 0 11.13 3.72 11.13 11.65V91.4h19.2V52.1c0-17.27-11-26.49-23.93-26.49Zm69.5 1.8v18.42h-13.18v22.66c0 5.5 4.74 6.02 13.18 5.5V91.4c-25.08 2.56-32.38-4.99-32.38-22.91V45.82h-10.24V27.4h10.24V15.23l19.2-5.76V27.4h13.18Zm26.2 11.38V27.4h-19.2v64h19.2V62.46c0-12.67 11.27-15.87 19.2-14.59V26.11c-8.06 0-16.63 4.1-19.2 12.67Zm67.65-5.37v-6.02h19.2v64h-19.2v-6.01c-4.23 4.86-10.5 7.8-19.07 7.8-16.77 0-30.6-14.72-30.6-33.79s13.83-33.79 30.6-33.79c8.57 0 14.84 2.94 19.07 7.8Zm-30.46 25.98c0 9.6 6.4 15.62 15.23 15.62s15.23-6.02 15.23-15.62-6.4-15.61-15.23-15.61-15.23 6.01-15.23 15.61Zm76.18-13.31c0-2.3 2.04-3.58 5.37-3.58 4.23 0 6.79 2.3 8.58 5.63l15-8.1v5.8h10.25v22.65c0 17.92 7.3 25.47 32.38 22.91V74c-8.45.5-13.19 0-13.19-5.51V45.82H478V27.4H464.8V9.47l-19.2 5.76V27.4h-10.24v9.8c-5.5-7.7-14.05-11.59-23.58-11.59-13.31 0-25.09 7.04-25.09 21 0 14.15 12.88 17.74 22.16 20.33 5.24 1.46 9.33 2.6 9.33 5.13 0 2.56-2.3 3.97-6.91 3.97-5.63 0-9.22-2.69-10.88-7.55l-16.64 9.47c5 10.37 14.72 15.23 27.52 15.23 13.82 0 26.62-6.27 26.62-20.99 0-15.23-13.02-18.65-22.31-21.1-5.16-1.35-9.17-2.4-9.17-5.01Z"
                    clipRule="evenodd"
                    fillRule="evenodd"
                    fill="currentColor"
                />
            </svg>
        </StyledLogo>
    );
};

const StyledLogo = styled.a`
    margin-bottom: 10px;
    width: 220px;
    display: inline-block;
    color: ${({ theme }) => theme.colors.primary};

    svg {
        display: block;
    }

    @media print {
        width: 160px;
        margin-bottom: 0;
    }
`;
