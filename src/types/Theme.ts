export type Theme = {
    colors: {
        primary: string;
        success: string;
        error: string;
    };
    page: {
        border: string;
        background: string;
        text: string;
    };
    themeSwitch: {
        background: string;
    };
    picker: {
        input: {
            background: string;
            border: string;
            text: string;
        };
    };
    swatch: {
        background: string;
        info: {
            text: string;
        };
        label: {
            text: string;
        };
        value: {
            text: string;
        };
        border: string;
    };
    popup: {
        background: string;
    };
    range: {
        track: {
            background: string;
            text: string;
        };
    };
};
