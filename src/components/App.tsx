import React, { ChangeEventHandler, FC, useCallback, useEffect, useState } from 'react';
import tinycolor, { Instance } from 'tinycolor2';
import { hex } from 'wcag-contrast';

import { Swatches } from './Swatches/Swatches';
import { Picker } from './Picker/Picker';
import { Header } from './Header/Header';
import { HeaderDescription } from './Header/HeaderDescription';
import { Footer } from './Footer/Footer';
import { Logo } from './Logo';
import { Popup } from './Popup/Popup';
import { Colors } from './Colors/Colors';
import { SwatchDetail } from './SwatchDetail/SwatchDetail';
import { RangeSlider } from './RangeSlider/RangeSlider';
import { Controls } from './Controls/Controls';

import { SwatchColor } from '../types/SwatchColor';
import { Container } from './Container';
import { useColors } from '../hooks/useColors';

type AppProps = {};

export const App: FC<AppProps> = () => {
    const [colors, setColors] = useColors();
    const [isDark, setIsDark] = useState(false);
    const [currentColor, setCurrentColor] = useState<SwatchColor | null>(null);
    const [minContrast, setMinContrast] = useState(0);

    const doNewColor = (color: string) => {
        if (!colors.includes(color) && color !== '') {
            setColors([...colors, color]);
        }
    };
    const doRemoveColor = (color: string) => {
        setColors((v) => v.filter((c) => c !== color));
    };
    const doDarkModeToggle = () => {
        setIsDark((v) => !v);
    };
    const doColorSwatchClick = (color: SwatchColor) => {
        document.body.classList.add('body--popup');
        setCurrentColor(color);
    };
    const doRangeSliderChange: ChangeEventHandler<HTMLInputElement> = (e) => {
        setMinContrast(parseFloat(e.target.value));
    };
    const doSetRangeSlider = (contrast: number) => {
        setMinContrast(contrast);
    };
    const doClosePopup = () => {
        document.body.classList.remove('body--popup');
        setCurrentColor(null);
    };
    const calculateColors = () => {
        const r: SwatchColor[] = [];
        const enrichedColors: Instance[] = colors.map((c) => tinycolor(c));

        enrichedColors.forEach((c1) => {
            enrichedColors.forEach((c2) => {
                if (c1.toHex() === c2.toHex()) return;
                r.push({
                    backgroundColor: c1,
                    textColor: c2,
                    contrast: hex(c1.toHexString(), c2.toHexString()),
                });
            });
        });

        return r.filter((c) => c.contrast >= minContrast);
    };

    return (
        <div className={`app${isDark ? ` app--dark` : ``}`}>
            <Header doDarkModeToggle={doDarkModeToggle}>
                <Logo />
                <HeaderDescription>
                    Check your color palette for accessible combinations
                </HeaderDescription>
            </Header>

            {currentColor && (
                <Popup closePopup={doClosePopup}>
                    <SwatchDetail color={currentColor} />
                </Popup>
            )}

            <div className="main">
                <Controls>
                    <Picker doNewColor={doNewColor} />
                    {colors.length >= 1 ? (
                        <Colors colors={colors} doRemoveColor={doRemoveColor} />
                    ) : null}
                    {colors.length >= 2 ? (
                        <RangeSlider
                            current={minContrast}
                            doRangeSliderChange={doRangeSliderChange}
                            doSetRangeSlider={doSetRangeSlider}
                        />
                    ) : null}
                </Controls>

                <Container isWide>
                    <Swatches
                        colorsTotal={colors.length}
                        minContrast={minContrast}
                        colors={calculateColors()}
                        doColorSwatchClick={doColorSwatchClick}
                    />
                </Container>
            </div>

            <Footer>
                Built by{' '}
                <a href="https://crgeary.com" rel="noopener noreferrer" target="_blank">
                    Christopher Geary
                </a>
            </Footer>
        </div>
    );
};
