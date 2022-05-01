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
        border-top: 6px solid #38b2ac;
        background-color: #edf2f7;
        color: #1a202c;

        background-image: linear-gradient(to bottom, transparent 100px, #edf2f7 350px),
            url("data:image/svg+xml,%3Csvg width='20' height='20' viewBox='0 0 20 20' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23e2e8f0' fill-opacity='.45' fill-rule='evenodd'%3E%3Ccircle cx='3' cy='3' r='3'/%3E%3Ccircle cx='13' cy='13' r='3'/%3E%3C/g%3E%3C/svg%3E");

        &--dark {
            border-top-color: #319795;
            background-color: #1a202c;
            color: #edf2f7;
            background-image: linear-gradient(to bottom, transparent 100px, #1a202c 350px),
                url("data:image/svg+xml,%3Csvg width='20' height='20' viewBox='0 0 20 20' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%232D3748' fill-opacity='.25' fill-rule='evenodd'%3E%3Ccircle cx='3' cy='3' r='3'/%3E%3Ccircle cx='13' cy='13' r='3'/%3E%3C/g%3E%3C/svg%3E");
        }
    }
`;
