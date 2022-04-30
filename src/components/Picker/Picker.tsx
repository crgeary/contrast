import React, { ChangeEventHandler, FC, FormEventHandler, useState } from 'react';
import { ColorChangeHandler, SketchPicker } from 'react-color';
import styled from 'styled-components';
import tinycolor from 'tinycolor2';

import { Button } from '../Button/Button';
import { ScreenReaderText } from '../ScreenReaderText';
import { Color } from './icons/Color';

type PickerProps = {
    doNewColor: (color: string) => void;
};

export const Picker: FC<PickerProps> = ({ doNewColor }) => {
    const [currentColor, setCurrentColor] = useState('');
    const [showColorPicker, setShowColorPicker] = useState(false);

    const doInputChange: ChangeEventHandler<HTMLInputElement> = (e) => {
        setCurrentColor(e.target.value);
    };
    const doColorPickerToggle = () => {
        setShowColorPicker((v) => !v);
    };
    const doColorPickerChange: ColorChangeHandler = (color) => {
        setCurrentColor(color.hex);
    };
    const doNewColorSubmit: FormEventHandler<HTMLFormElement> = (e) => {
        e.preventDefault();
        doNewColor(currentColor);
        setCurrentColor('');
        setShowColorPicker(false);
    };

    return (
        <StyledPicker onSubmit={doNewColorSubmit}>
            <PickerInput>
                <input
                    type="text"
                    placeholder="Hex/RGB"
                    onChange={doInputChange}
                    value={currentColor}
                    data-cy="add-color-input"
                />
                <PickerSwatch type="button" onClick={doColorPickerToggle}>
                    <Color />
                    <ScreenReaderText>Color Picker</ScreenReaderText>
                </PickerSwatch>
                <PickerColorPicker style={{ display: showColorPicker ? `block` : `none` }}>
                    <SketchPicker
                        color={currentColor}
                        onChange={doColorPickerChange}
                        disableAlpha={true}
                    />
                </PickerColorPicker>
            </PickerInput>
            <Button
                style={{
                    backgroundColor: currentColor,
                    color: tinycolor(currentColor).isDark() ? `#FFFFFF` : `#000000`,
                }}
                disabled={currentColor ? false : true}
                data-cy="add-color-button"
            >
                Add Color
            </Button>
        </StyledPicker>
    );
};

const StyledPicker = styled.form`
    display: flex;
    margin: 0 auto;
    max-width: 520px;
    background-color: #ffffff;
    padding: 3px;
    border: 1px solid #cbd5e0;
    border-radius: 2px;
`;

const PickerColorPicker = styled.div`
    position: absolute;
    top: calc(100% + 10px);
    left: 50%;
    z-index: 20;
`;

const PickerSwatch = styled.button`
    border: none;
    background-color: transparent;
    flex: 0 0 auto;
    display: flex;
    justify-content: center;
    align-items: center;
    color: #718096;
    cursor: pointer;
    margin: 0 5px;

    svg {
        width: 24px;
        height: 24px;
    }
`;

const PickerInput = styled.div`
    display: flex;
    flex: 1 1 auto;
    border-radius: 2px;
    position: relative;

    input[type='text'] {
        background-color: #ffffff;
        border: none;
        margin: 0;
        height: 100%;
        flex: 1 1 auto;
        font-size: 20px;
        padding: 7px 10px;
        width: 100%;
    }
`;

/*


.app--dark {
    .picker {
        border-color: #4a5568;
        background-color: #2d3748;

        &__input {
            input[type='text'] {
                background-color: #2d3748;
                color: #f7fafc;

                &::placeholder {
                    color: #a0aec0;
                }
            }
        }
    }
}

*/
