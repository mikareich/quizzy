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
    primaryPalete: typeof purple
    /** Secondary color */
    secondary: string
    secondaryPalete: typeof purple
    /** Text color */
    text: string
    textLight: string
    textOnPrimary: string
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
    primaryPalete: purple,
    secondary: purple[100],
    secondaryPalete: purple,
    text: gray[500],
    textLight: gray[300],
    textOnPrimary: white,
    background: white,
  },
}

export default lightTheme
