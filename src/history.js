import { location } from './store'

export const push = path => {
  window.history.pushState(null, null, path)
  location.update(() => window.location)
}

export const replace = path => {
  window.history.replaceState(null, null, path)
  location.update(() => window.location)
}

export const goBack = () => {
  window.history.back()
  location.update(() => window.location)
}

export const goForward = () => {
  window.history.forward()
  location.update(() => window.location)
}
