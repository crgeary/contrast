import React, { ChangeEventHandler, FC, useCallback, useEffect, useState } from 'react';
import tinycolor, { Instance } from 'tinycolor2';
import { hex } from 'wcag-contrast';

import { Swatches } from './components/Swatches/Swatches';
import { Picker } from './components/Picker/Picker';
import { Header } from './components/Header/Header';
import { HeaderDescription } from './components/Header/HeaderDescription';
import { Footer } from './components/Footer/Footer';
import { Logo } from './components/Logo/Logo';
import { Popup } from './components/Popup/Popup';
import { Colors } from './components/Colors/Colors';
import { SwatchDetail } from './components/SwatchDetail/SwatchDetail';
import { RangeSlider } from './components/RangeSlider/RangeSlider';
import { Controls } from './components/Controls/Controls';

import './app.scss';
import { SwatchColor } from './types/SwatchColor';

type AppProps = {};

export const App: FC<AppProps> = () => {
    const [colors, setColors] = useState<string[]>([]);
    const [isDark, setIsDark] = useState(false);
    const [currentColor, setCurrentColor] = useState<SwatchColor | null>(null);
    const [minContrast, setMinContrast] = useState(0);

    const updateHash = useCallback(() => {
        window.history.replaceState(
            undefined,
            '',
            `#${colors.map((color) => tinycolor(color).toHex()).join(',')}`
        );
    }, [colors]);

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

    useEffect(() => {
        if (!window.location.hash) {
            return;
        }
        const colors = window.location.hash
            .substr(1)
            .split(',')
            .map((h) => `#${h}`);
        setColors(colors);
    }, []);

    useEffect(() => {
        updateHash();
    }, [colors, updateHash]);

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

                <div className="container container--wide">
                    <Swatches
                        colorsTotal={colors.length}
                        minContrast={minContrast}
                        colors={calculateColors()}
                        doColorSwatchClick={doColorSwatchClick}
                    />
                </div>
            </div>

            <Footer>
                <p>
                    Built by{' '}
                    <a href="https://crgeary.com" rel="noopener noreferrer" target="_blank">
                        Christopher Geary
                    </a>
                </p>
            </Footer>
        </div>
    );
};
