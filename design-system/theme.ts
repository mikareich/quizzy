import {
  Color,
  ColorPalette,
  gray,
  green,
  purple,
  red,
  white,
  yellow,
} from './colors'
import { defaultTypeScale, mobileTypeScale } from './typeScale'
import { bodyFont, headingFont } from './typography'

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
    primary: Color
    primaryLight: Color
    primaryPalette: ColorPalette
    /** Secondary color */
    secondary: Color
    secondaryLight: Color
    secondaryPalette: ColorPalette
    /** Text color */
    text: Color
    textLight: Color
    textOnPrimary: Color
    textOnSecondary: Color
    /** Border color */
    border: Color
    /** Background color */
    background: Color
    /** Status colors */
    success: Color
    warning: Color
    error: Color
  }
}

const lightTheme: Theme = {
  headingFont,
  textFont: bodyFont,
  typeScale: defaultTypeScale,
  mobileTypeScale,
  colors: {
    primary: purple[500],
    primaryLight: purple[400],
    primaryPalette: purple,
    secondary: purple[200],
    secondaryLight: purple[100],
    secondaryPalette: purple,
    text: gray[500],
    textLight: gray[300],
    textOnPrimary: white,
    textOnSecondary: gray[500],
    border: gray[100],
    background: white,
    success: green[500],
    warning: yellow[500],
    error: red[500],
  },
}

export default lightTheme
