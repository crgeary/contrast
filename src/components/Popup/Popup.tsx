import React, { FC, ReactNode } from 'react';
import styled from 'styled-components';
import { ScreenReaderText } from '../ScreenReaderText';

type PopupProps = {
    children: ReactNode;
    closePopup: () => void;
};

export const Popup: FC<PopupProps> = ({ children, closePopup }) => {
    return (
        <StyledPopup data-cy="popup">
            <PopupBackface onClick={closePopup}></PopupBackface>
            <PopupWindow>
                {children}
                <PopupClose onClick={closePopup}>
                    <svg
                        aria-hidden="true"
                        focusable="false"
                        role="img"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 320 512"
                    >
                        <path
                            fill="currentColor"
                            d="M207.6 256l107.72-107.72c6.23-6.23 6.23-16.34 0-22.58l-25.03-25.03c-6.23-6.23-16.34-6.23-22.58 0L160 208.4 52.28 100.68c-6.23-6.23-16.34-6.23-22.58 0L4.68 125.7c-6.23 6.23-6.23 16.34 0 22.58L112.4 256 4.68 363.72c-6.23 6.23-6.23 16.34 0 22.58l25.03 25.03c6.23 6.23 16.34 6.23 22.58 0L160 303.6l107.72 107.72c6.23 6.23 16.34 6.23 22.58 0l25.03-25.03c6.23-6.23 6.23-16.34 0-22.58L207.6 256z"
                        ></path>
                    </svg>
                    <ScreenReaderText>Close</ScreenReaderText>
                </PopupClose>
            </PopupWindow>
        </StyledPopup>
    );
};

const StyledPopup = styled.div`
    position: fixed;
    z-index: 20;
    display: flex;
    padding: 100px 25px;
    min-height: 100%;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    overflow: auto;
`;

const PopupBackface = styled.div`
    background-color: rgba(74, 85, 104, 0.85);
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 30;
    position: fixed;
`;

const PopupWindow = styled.div`
    background-color: #ffffff;
    border-radius: 2px;
    box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05);
    max-width: 750px;
    padding: 25px;
    width: 100%;
    position: relative;
    z-index: 50;
    margin: auto;
`;

const PopupClose = styled.button`
    border: none;
    background-color: transparent;
    padding: 0;
    position: absolute;
    bottom: calc(100% + 10px);
    right: 0;
    cursor: pointer;
    color: rgba(#ffffff, 0.65);

    & > svg {
        width: 32px;
        height: 32px;
    }
`;

/*

.app--dark {
    .popup {
        background-color: rgba(#1a202c, 0.85);
        &__window {
            background-color: #2d3748;
        }
    }
}

*/
