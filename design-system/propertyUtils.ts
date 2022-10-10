import { SerializedStyles, Theme } from '@emotion/react'
import { CSSInterpolation } from '@emotion/serialize'

/** Default props from emotion */
export interface DefaultProps {
  theme?: Theme
}

/** Combines default props with custom props */
type ExtendedProps<Props> = Props & DefaultProps

/** Prop keys of default and custom props */
type ExtendedPropsKeys<Props> = keyof ExtendedProps<Props>

/** Style function with combinet props (can be called by emotion) */
export type DynamicStyle<Props = {}> = (
  // eslint-disable-next-line no-unused-vars
  props: ExtendedProps<Props>
) => CSSInterpolation | SerializedStyles

/** Parameters passed in the util functions */
type UtilFunctionParameters<Props, Values extends Array<any>> = [
  ...Values,
  DynamicStyle<Props>?
]

/** Logic of the util functions */
type LogicCallback<Props, Values extends Array<any>> = (
  /* eslint-disable no-unused-vars */
  props: any,
  values: Values,
  styles: DynamicStyle<Props>
  /* eslint-enable no-unused-vars */
) => CSSInterpolation | SerializedStyles | null

/** Clousure function to return dynamic style function */
function createUtilFunction<Props, Values extends Array<any>>(
  parameters: UtilFunctionParameters<Props, Values>,
  logicCallback: LogicCallback<Props, Values>,
  requireStyle?: boolean
): DynamicStyle<Props> {
  // split parameters into values and styles
  let values = parameters.slice(0, parameters.length) as Values
  let styles: DynamicStyle<Props> = () => null

  if (requireStyle) {
    styles = parameters[parameters.length - 1] as DynamicStyle<Props>
    values = parameters.slice(0, parameters.length - 1) as Values
  }

  // emotion styled component callback
  return (props: any) => logicCallback(props, values, styles)
}

/**
 * Tests if a property is defined
 * @param params - First parameters are the property values, last parameter is the style
 * @return - The style if the property is defined, null otherwise
 */
export const propertyDefined = <Props>(
  ...params: UtilFunctionParameters<Props, ExtendedPropsKeys<Props>[]>
) =>
  createUtilFunction<Props, ExtendedPropsKeys<Props>[]>(
    params,
    (props, values, styles) => {
      if (values.every((value) => props[value])) {
        return styles(props)
      }

      return null
    },
    true
  )

/**
 * Tests if a property is not defined
 * @param params - First parameters are the property values, last parameter is the style
 * @return - The style if the property is defined, null otherwise
 */
export const propertyNotDefined = <Props>(
  ...params: UtilFunctionParameters<Props, ExtendedPropsKeys<Props>[]>
) =>
  createUtilFunction<Props, ExtendedPropsKeys<Props>[]>(
    params,
    // test if all values are not defined
    (props, values, styles) => {
      if (values.every((value) => !props[value])) {
        return styles(props)
      }

      return null
    },
    true
  )

/**
 * Tests if a property equals a value
 * @param params - First parameters is the property value, second parameter is the value to test, last parameter is the style
 * @return - The style if the property is defined, null otherwise
 */
export const propertyEquals = <Props>(
  ...params: UtilFunctionParameters<Props, [ExtendedPropsKeys<Props>, any]>
) =>
  createUtilFunction<Props, [ExtendedPropsKeys<Props>, any]>(
    params,
    // test if value is equal to a given value
    (props, [value, testValue], styles) => {
      if (props[value] === testValue) {
        return styles(props)
      }

      return null
    },
    true
  )

/**
 * Inserts the value of a property into a style
 * @param params - First parameters is the property, second parameter is the default value
 * @return - Property value if defined, default value otherwise
 */
export const insertProperty = <Props>(
  ...params: UtilFunctionParameters<Props, [ExtendedPropsKeys<Props>, any?]>
) =>
  createUtilFunction<Props, [ExtendedPropsKeys<Props>, any?]>(
    params,
    // return value of a given property
    (props, [name, defaultValue]) => props[name] || defaultValue || null,
    false
  )
