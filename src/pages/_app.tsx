import { AppProps } from "next/app";
import { ThemeProvider } from "styled-components";
import { GlobalStyles } from "../components/GlobalStyles";
import { theme } from "../theme";

const App = ({ Component, pageProps }: AppProps) => {
    return (
        <ThemeProvider theme={theme}>
            <GlobalStyles />
            <Component {...pageProps} />
        </ThemeProvider>
    );
};

export default App;
