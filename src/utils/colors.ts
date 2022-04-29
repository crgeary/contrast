export const getColorsFromUrlHash = () =>
    (window.location.hash ? window.location.hash.substring(1).split(',') : []).map((h) => `#${h}`);
