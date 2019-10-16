import pathToRegexp from 'path-to-regexp'

export const matchPath = (location, path) => {
  const regexp = pathToRegexp(path)
  const match = regexp.exec(location)

  return match !== null
}

export const parseParameters = (location, path) => {
  const keys = []
  const regexp = pathToRegexp(path, keys)
  const match = regexp.exec(location)

  return keys.reduce((memo, key, index) => {
    memo[key.name] = match[index]

    return memo
  }, {})
}
