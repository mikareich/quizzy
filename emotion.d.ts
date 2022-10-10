import '@emotion/react'

import { Theme as ThemeInterface } from './design-system/theme'

declare module '@emotion/react' {
  export interface Theme extends ThemeInterface {}
}
