import breakpoints from './breakpoints'

function greaterThan(size: keyof typeof breakpoints) {
  return `@media (min-width: ${breakpoints[size] + 1}px)`
}

function lessThan(size: keyof typeof breakpoints) {
  return `@media (max-width: ${breakpoints[size]}px)`
}

function between(
  start: keyof typeof breakpoints,
  end: keyof typeof breakpoints
) {
  return `@media (min-width: ${breakpoints[start] + 1}px) and (max-width: ${
    breakpoints[end]
  }px)`
}

export default {
  greaterThan,
  lessThan,
  between,
}
