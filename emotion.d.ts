import '@emotion/react'
import { Theme as ThemeInterface } from './utils/design-system/theme'

declare module '@emotion/react' {
  export interface Theme extends ThemeInterface {}
}
