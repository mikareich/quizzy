import { gray, green, purple, red, white, yellow } from './colors'
import { defaultTypeScale, mobileTypeScale } from './typeScale'

export interface Theme {
  /** Font family of all headings */
  headingFont: string
  /** Font family of all text */
  textFont: string
  /** Type scale */
  typeScale: typeof defaultTypeScale
  /** Type scale for mobiles */
  mobileTypeScale: typeof mobileTypeScale
  /** Theme colors */
  colors: {
    /** Primary color */
    primary: string
    primaryLight: string
    primaryPalete: typeof purple
    /** Secondary color */
    secondary: string
    secondaryLight: string
    secondaryPalete: typeof purple
    /** Text color */
    text: string
    textLight: string
    textOnPrimary: string
    textOnSecondary: string
    /** Background color */
    background: string
    /** Status colors */
    success: string
    warning: string
    error: string
  }
}

const lightTheme: Theme = {
  headingFont: '"Montserrat", sans-serif',
  textFont: '"Montserrat", sans-serif',
  typeScale: defaultTypeScale,
  mobileTypeScale,
  colors: {
    primary: purple[500],
    primaryLight: purple[400],
    primaryPalete: purple,
    secondary: purple[200],
    secondaryLight: purple[100],
    secondaryPalete: purple,
    text: gray[500],
    textLight: gray[300],
    textOnPrimary: white,
    textOnSecondary: gray[500],
    background: white,
    success: green[500],
    warning: yellow[500],
    error: red[500],
  },
}

export default lightTheme
