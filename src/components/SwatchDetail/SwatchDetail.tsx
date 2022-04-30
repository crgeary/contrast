import React, { FC } from "react";
import styled from "styled-components";
import { SwatchColor } from "../../types/SwatchColor";
import { getConformanceLevel } from "../../utils/contrast";

type SwatchDetailProps = {
    color: SwatchColor;
};

export const SwatchDetail: FC<SwatchDetailProps> = ({ color }) => {
    const contrast = Math.floor(color.contrast * 100) / 100;
    const { regular: score, large: scoreLarge } = getConformanceLevel(contrast);

    return (
        <StyledSwatchDetail className="swatch-detail">
            <SwatchDetailPreview
                style={{
                    backgroundColor: color.backgroundColor.toHexString(),
                    color: color.textColor.toHexString(),
                }}
            >
                <SwatchDetailText $size="large">Abc</SwatchDetailText>
                <SwatchDetailText $size="regular">
                    The quick brown fox jumped over the lazy dog
                </SwatchDetailText>
                <SwatchDetailText $size="small">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                    incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis
                    nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                </SwatchDetailText>
                <div className="swatch-detail__icons">
                    <svg
                        aria-hidden="true"
                        focusable="false"
                        role="img"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 496 512"
                    >
                        <path
                            fill="currentColor"
                            d="M248 8C111 8 0 119 0 256s111 248 248 248 248-111 248-248S385 8 248 8zM90.4 183.6c6.7-17.6 26.7-26.7 44.9-21.9l7.1 1.9 2-7.1c5-18.1 22.8-30.9 41.5-27.9 21.4 3.4 34.4 24.2 28.8 44.5L195.3 243c-1.2 4.5-5.9 7.2-10.5 6l-70.2-18.2c-20.4-5.4-31.9-27-24.2-47.2zM248 432c-60.6 0-134.5-38.3-143.8-93.3-2-11.8 9.2-21.5 20.7-17.9C155.1 330.5 200 336 248 336s92.9-5.5 123.1-15.2c11.4-3.6 22.6 6.1 20.7 17.9-9.3 55-83.2 93.3-143.8 93.3zm133.4-201.3l-70.2 18.2c-4.5 1.2-9.2-1.5-10.5-6L281.3 173c-5.6-20.3 7.4-41.1 28.8-44.5 18.6-3 36.4 9.8 41.5 27.9l2 7.1 7.1-1.9c18.2-4.7 38.2 4.3 44.9 21.9 7.7 20.3-3.8 41.9-24.2 47.2z"
                        ></path>
                    </svg>
                    <svg
                        aria-hidden="true"
                        focusable="false"
                        role="img"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 512 512"
                    >
                        <path
                            fill="currentColor"
                            d="M416 128c-.6 0-1.1.2-1.6.2 1.1-5.2 1.6-10.6 1.6-16.2 0-44.2-35.8-80-80-80-24.6 0-46.3 11.3-61 28.8C256.4 24.8 219.3 0 176 0 114.1 0 64 50.1 64 112c0 7.3.8 14.3 2.1 21.2C27.8 145.8 0 181.5 0 224c0 53 43 96 96 96h320c53 0 96-43 96-96s-43-96-96-96zM48 360c-8.8 0-16 7.2-16 16v40c0 8.8 7.2 16 16 16s16-7.2 16-16v-40c0-8.8-7.2-16-16-16zm96 80c-8.8 0-16 7.2-16 16v40c0 8.8 7.2 16 16 16s16-7.2 16-16v-40c0-8.8-7.2-16-16-16zm96-80c-8.8 0-16 7.2-16 16v40c0 8.8 7.2 16 16 16s16-7.2 16-16v-40c0-8.8-7.2-16-16-16zm96 80c-8.8 0-16 7.2-16 16v40c0 8.8 7.2 16 16 16s16-7.2 16-16v-40c0-8.8-7.2-16-16-16zm96-80c-8.8 0-16 7.2-16 16v40c0 8.8 7.2 16 16 16s16-7.2 16-16v-40c0-8.8-7.2-16-16-16z"
                        ></path>
                    </svg>
                    <svg
                        aria-hidden="true"
                        focusable="false"
                        role="img"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 512 512"
                    >
                        <path
                            fill="currentColor"
                            d="M158.87.15c-16.16-1.52-31.2 8.42-35.33 24.12l-14.81 56.27c187.62 5.49 314.54 130.61 322.48 317l56.94-15.78c15.72-4.36 25.49-19.68 23.62-35.9C490.89 165.08 340.78 17.32 158.87.15zm-58.47 112L.55 491.64a16.21 16.21 0 0 0 20 19.75l379-105.1c-4.27-174.89-123.08-292.14-299.15-294.1zM128 416a32 32 0 1 1 32-32 32 32 0 0 1-32 32zm48-152a32 32 0 1 1 32-32 32 32 0 0 1-32 32zm104 104a32 32 0 1 1 32-32 32 32 0 0 1-32 32z"
                        ></path>
                    </svg>
                    <svg
                        aria-hidden="true"
                        focusable="false"
                        role="img"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 496 512"
                    >
                        <path
                            fill="currentColor"
                            d="M248 8C111 8 0 119 0 256s111 248 248 248 248-111 248-248S385 8 248 8zm80 168c17.7 0 32 14.3 32 32s-14.3 32-32 32-32-14.3-32-32 14.3-32 32-32zM152 416c-26.5 0-48-21-48-47 0-20 28.5-60.4 41.6-77.8 3.2-4.3 9.6-4.3 12.8 0C171.5 308.6 200 349 200 369c0 26-21.5 47-48 47zm16-176c-17.7 0-32-14.3-32-32s14.3-32 32-32 32 14.3 32 32-14.3 32-32 32zm170.2 154.2C315.8 367.4 282.9 352 248 352c-21.2 0-21.2-32 0-32 44.4 0 86.3 19.6 114.7 53.8 13.8 16.4-11.2 36.5-24.5 20.4z"
                        ></path>
                    </svg>
                    <svg
                        aria-hidden="true"
                        focusable="false"
                        role="img"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 448 512"
                    >
                        <path
                            fill="currentColor"
                            d="M436 480h-20V24c0-13.255-10.745-24-24-24H56C42.745 0 32 10.745 32 24v456H12c-6.627 0-12 5.373-12 12v20h448v-20c0-6.627-5.373-12-12-12zM128 76c0-6.627 5.373-12 12-12h40c6.627 0 12 5.373 12 12v40c0 6.627-5.373 12-12 12h-40c-6.627 0-12-5.373-12-12V76zm0 96c0-6.627 5.373-12 12-12h40c6.627 0 12 5.373 12 12v40c0 6.627-5.373 12-12 12h-40c-6.627 0-12-5.373-12-12v-40zm52 148h-40c-6.627 0-12-5.373-12-12v-40c0-6.627 5.373-12 12-12h40c6.627 0 12 5.373 12 12v40c0 6.627-5.373 12-12 12zm76 160h-64v-84c0-6.627 5.373-12 12-12h40c6.627 0 12 5.373 12 12v84zm64-172c0 6.627-5.373 12-12 12h-40c-6.627 0-12-5.373-12-12v-40c0-6.627 5.373-12 12-12h40c6.627 0 12 5.373 12 12v40zm0-96c0 6.627-5.373 12-12 12h-40c-6.627 0-12-5.373-12-12v-40c0-6.627 5.373-12 12-12h40c6.627 0 12 5.373 12 12v40zm0-96c0 6.627-5.373 12-12 12h-40c-6.627 0-12-5.373-12-12V76c0-6.627 5.373-12 12-12h40c6.627 0 12 5.373 12 12v40z"
                        ></path>
                    </svg>
                </div>
            </SwatchDetailPreview>

            <SwatchDetailContent>
                <SwatchDetailDetails>
                    <div className="swatch-detail__detail">
                        <h3>Contrast Ratio</h3>
                        <p>{contrast}</p>
                    </div>
                    <SwatchDetailGroup>
                        <div>
                            <h3>Foreground</h3>
                            <p>{color.textColor.toHexString()}</p>
                        </div>
                        <div>
                            <h3>Background</h3>
                            <p>{color.backgroundColor.toHexString()}</p>
                        </div>
                    </SwatchDetailGroup>
                </SwatchDetailDetails>

                <SwatchDetailA11y>
                    <SwatchDetailLevel>
                        <SwatchDetailLevelLabel>
                            <h3>Normal</h3>
                            <p>Contrast ratio must be at least 4.5:1 for AA, and 7:1 for AAA.</p>
                        </SwatchDetailLevelLabel>
                        <SwatchDetailLevelScore $variant={score ? `pass` : `fail`}>
                            <strong>{score || `X`}</strong>
                            <span>{score ? `Pass` : `Fail`}</span>
                        </SwatchDetailLevelScore>
                    </SwatchDetailLevel>
                    <SwatchDetailLevel>
                        <SwatchDetailLevelLabel>
                            <h3>Large (24px +)</h3>
                            <p>Contrast ratio must be at least 3:1 for AA, and 4.5:1 for AAA.</p>
                        </SwatchDetailLevelLabel>
                        <SwatchDetailLevelScore $variant={scoreLarge ? `pass` : `fail`}>
                            <strong>{scoreLarge || `X`}</strong>
                            <span>{scoreLarge ? `Pass` : `Fail`}</span>
                        </SwatchDetailLevelScore>
                    </SwatchDetailLevel>
                </SwatchDetailA11y>
            </SwatchDetailContent>
        </StyledSwatchDetail>
    );
};

const StyledSwatchDetail = styled.div`
    font-size: 14px;

    @media screen and (min-width: 768px) {
        display: flex;
    }
`;

const SwatchDetailPreview = styled.div`
    padding: 25px;
    margin: -25px -25px 25px -25px;
    border-top-right-radius: 2px;
    border-top-left-radius: 2px;

    svg {
        width: 32px;
        margin-right: 5px;
    }

    @media screen and (min-width: 768px) {
        width: 60%;
        margin: 0;
        border-radius: 2px;
    }
`;

const SwatchDetailText = styled.p<{ $size: "small" | "regular" | "large" }>`
    display: block;
    font-weight: 600;
    margin-bottom: 15px;

    ${({ $size }) => {
        if ($size === "large") {
            return `
                font-size: 64px;
                line-height: 1.1;
            `;
        }
        if ($size === "regular") {
            return `
                font-size: 24px;
                line-height: 1.25;
            `;
        }
        if ($size === "small") {
            return `font-size: 16px;`;
        }
    }}
`;

const SwatchDetailDetails = styled.div`
    h3 {
        margin-bottom: 0;
        text-transform: uppercase;
        font-size: 12px;
        font-weight: 400;
        color: #718096;
    }
    p {
        font-size: 24px;
        font-weight: 600;
        color: #1a202c;
    }
`;

const SwatchDetailGroup = styled.div`
    display: flex;
    justify-content: space-between;
`;

const SwatchDetailContent = styled.div`
    @media screen and (min-width: 768px) {
        width: 40%;
        padding-left: 25px;
        display: flex;
        flex-direction: column;
    }
`;

const SwatchDetailA11y = styled.div`
    @media screen and (min-width: 768px) {
        margin-top: auto;
    }
`;

const SwatchDetailLevel = styled.div`
    font-size: 12px;
    display: flex;
    border-top: 1px solid #cbd5e0;
    border-radius: 2px;
    padding: 10px 0;
`;

const SwatchDetailLevelLabel = styled.div`
    flex: 1 1 auto;
    h3 {
        color: #1a202c;
        font-size: 14px;
    }
    h3,
    p {
        margin-bottom: 0;
    }
`;

const SwatchDetailLevelScore = styled.div<{ $variant: "pass" | "fail" }>`
    width: 100px;
    border-left: 1px solid #cbd5e0;
    margin-left: 10px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    strong,
    span {
        display: block;
    }
    strong {
        font-size: 16px;
        font-weight: 700;
        letter-spacing: 0.5px;
    }
    span {
        font-size: 12px;
        text-transform: uppercase;
    }

    ${({ $variant }) => `
        color: ${$variant === "pass" ? "#276749" : null};
        color: ${$variant === "fail" ? "#9b2c2c" : null};
    `}
`;

/*

.app--dark {
    .swatch-detail {
        &__detail {
            p {
                color: #edf2f7;
            }
        }
        &__level {
            border-top-color: #4a5568;
            color: #718096;
            &-score {
                border-left-color: #4a5568;
                &--fail {
                    color: #f56565;
                }
                &--pass {
                    color: #48bb78;
                }
            }
            h3 {
                color: #edf2f7;
            }
        }
    }
}

*/
