import { createGlobalStyle } from "styled-components";

import "../../node_modules/modern-normalize/modern-normalize.css";

export const GlobalStyles = createGlobalStyle`
    body,
    #__next,
    .app {
        min-height: 100vh;
        height: 100%;
    }

    body {
        line-height: 1.65;
        font-family: 'Open Sans', Helvetica, Arial, sans-serif;
        font-size: 16px;
    }

    a {
        color: ${({ theme }) => theme.colors.primary};
        text-decoration: none;
        &:hover,
        &:focus {
            text-decoration: underline;
        }
    }

    h1,
    h2,
    h3,
    h4,
    h5,
    h6,
    p,
    ol,
    ul {
        margin-top: 0;
    }

    .body--popup {
        overflow: hidden;
    }

    .app {
        display: flex;
        flex-direction: column;
        border-top: 6px solid ${({ theme }) => theme.page.border};
        background-color: ${({ theme }) => theme.page.background};
        color: ${({ theme }) => theme.page.text};

        &--dark {
            border-top-color: #319795;
        }
    }
`;
