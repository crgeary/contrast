import 'styled-components';

import { Theme } from './src/types/Theme';

declare module 'styled-components' {
    export interface DefaultTheme extends Theme {}
}
