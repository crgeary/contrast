import { AppProps } from "next/app";
import { useState } from "react";
import { ThemeProvider } from "styled-components";
import { GlobalStyles } from "../components/GlobalStyles";
import { theme, darkTheme } from "../theme";

const App = ({ Component, pageProps }: AppProps) => {
    const [isDark, setIsDark] = useState(false);
    return (
        <ThemeProvider theme={isDark ? darkTheme : theme}>
            <GlobalStyles />
            <Component setIsDark={setIsDark} {...pageProps} />
        </ThemeProvider>
    );
};

export default App;
