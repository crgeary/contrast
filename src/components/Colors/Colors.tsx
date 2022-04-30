import React, { FC } from "react";
import styled from "styled-components";
import tinycolor from "tinycolor2";
import { ScreenReaderText } from "../ScreenReaderText";

type ColorsProps = {
    colors: string[];
    doRemoveColor: (color: string) => void;
};

export const Colors: FC<ColorsProps> = ({ colors, doRemoveColor }) => {
    return (
        <StyledColors>
            <ColorsSwatches data-cy="colors-list">
                {colors
                    .map((c) => tinycolor(c))
                    .map((color, k) => (
                        <ColorsSwatch
                            key={k}
                            $isDark={color.isDark()}
                            style={{ backgroundColor: color.toHexString() }}
                        >
                            <ColorsRemove
                                onClick={() => doRemoveColor(color.getOriginalInput().toString())}
                            >
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
                                <ScreenReaderText>
                                    <>Remove {color.getOriginalInput()}</>
                                </ScreenReaderText>
                            </ColorsRemove>
                            {color.toHexString()}
                        </ColorsSwatch>
                    ))}
            </ColorsSwatches>
        </StyledColors>
    );
};

const StyledColors = styled.div`
    text-align: center;
    display: flex;
    flex-direction: column;
    align-items: center;
    max-width: 720px;
    margin: 25px auto 0 auto;
`;

const ColorsSwatches = styled.ul`
    display: flex;
    padding-left: 0;
    line-height: 28px;
    margin-bottom: 0;
    font-size: 14px;
    flex-wrap: wrap;
    justify-content: center;
`;

const ColorsSwatch = styled.li<{ $isDark: boolean }>`
    list-style: none;
    flex: 1 0 auto;
    height: 28px;
    margin-left: 4px;
    border-radius: 2px;
    border: 1px solid rgba(0, 0, 0, 0.1);
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.075);
    padding: 0 8px 0 0;
    flex: 0 0 auto;
    margin-bottom: 4px;
    display: flex;
    overflow: hidden;
    font-family: monospace;
    color: ${({ $isDark }) => ($isDark ? "#f7fafc" : "#1a202c")};
`;

const ColorsRemove = styled.button`
    background-color: transparent;
    padding: 0 4px;
    border: 0;
    border-right: 1px solid rgba(0, 0, 0, 0.2);
    margin: -1px 5px -1px -1px;
    color: inherit;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;

    & > svg {
        width: 16px;
        height: 16px;
    }
`;
