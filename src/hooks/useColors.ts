import { Dispatch, SetStateAction, useEffect, useState } from "react";
import tinycolor from "tinycolor2";

import { getColorsFromUrlHash } from "../utils/colors";

export const useColors = (): [string[], Dispatch<SetStateAction<string[]>>] => {
    const [colors, setColors] = useState<string[]>([]);

    useEffect(() => {
        if (!window.location.hash) {
            return;
        }
        setColors(getColorsFromUrlHash());
    }, []);

    useEffect(() => {
        window.history.replaceState(
            undefined,
            "",
            `#${colors.map((color) => tinycolor(color).toHex()).join(",")}`,
        );
    }, [colors]);

    return [colors, setColors];
};
