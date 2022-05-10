import { gray, purple, white } from './colors'
import { defaultTypeScale } from './typeScale'

export interface Theme {
  /** Font family of all headings */
  headingFont: string
  /** Font family of all text */
  textFont: string
  /** Type scale */
  typeScale: typeof defaultTypeScale
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
  }
}

const lightTheme: Theme = {
  headingFont: '"Montserrat", sans-serif',
  textFont: '"Montserrat", sans-serif',
  typeScale: defaultTypeScale,
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
  },
}

export default lightTheme
