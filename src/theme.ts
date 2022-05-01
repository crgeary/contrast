import { DefaultTheme } from "styled-components";

export const theme: DefaultTheme = {
    colors: {
        primary: "#4338ca",
        success: "#15803d",
        error: "#b91c1c",
    },
    page: {
        border: "#4338ca",
        background: "#ffffff",
        text: "#334155",
    },
    themeSwitch: {
        background: "#ffffff",
    },
    picker: {
        input: {
            background: "#ffffff",
            border: "#cbd5e1",
            text: "#1e293b",
        },
    },
    swatch: {
        background: "#ffffff",
        info: {
            text: "#4b5563",
        },
        label: {
            text: "#4b5563",
        },
        value: {
            text: "#111827",
        },
        border: "#d1d5db",
    },
    popup: {
        background: "#ffffff",
    },
    range: {
        track: {
            background: "#cbd5e1",
            text: "#0f172a",
        },
    },
};

export const darkTheme: DefaultTheme = {
    colors: {
        primary: "#ec4899",
        success: "#22c55e",
        error: "#ef4444",
    },
    page: {
        border: "#ec4899",
        background: "#111827",
        text: "#e5e7eb",
    },
    themeSwitch: {
        background: "#1f2937",
    },
    picker: {
        input: {
            background: "#1f2937",
            border: "#374151",
            text: "#f8fafc",
        },
    },
    swatch: {
        background: "#1f2937",
        info: {
            text: "#6b7280",
        },
        label: {
            text: "#6b7280",
        },
        value: {
            text: "#f3f4f6",
        },
        border: "#374151",
    },
    popup: {
        background: "#1f2937",
    },
    range: {
        track: {
            background: "#475569",
            text: "#ffffff",
        },
    },
};
