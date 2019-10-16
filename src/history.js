import { createBrowserHistory } from 'history'

const history = createBrowserHistory()

export const push = history.push
export const replace = history.replace
export const goBack = history.goBack
export const goForward = history.goForward

export default history
