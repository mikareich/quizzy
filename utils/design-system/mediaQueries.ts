import breakpoints from './breakpoints'

function media(size: keyof typeof breakpoints) {
  return `@media (min-width: ${breakpoints[size]}px)`
}

export default media
