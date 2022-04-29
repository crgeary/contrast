export const getConformanceLevel = (contrast: number) => {
    let regular = null,
        large = null;

    if (contrast >= 4.5 && contrast < 7) {
        regular = `AA`;
    } else if (contrast >= 7) {
        regular = `AAA`;
    }

    if (contrast >= 3 && contrast < 4.5) {
        large = `AA`;
    } else if (contrast >= 4.5) {
        large = `AAA`;
    }

    return { regular, large };
};
