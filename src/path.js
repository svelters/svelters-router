import pathToRegexp from 'path-to-regexp'

export const matchPath = (location, path) => {
  const regexp = pathToRegexp(path)
  const match = regexp.exec(location)

  return match !== null
}

export const parseParameters = (location, path) => {
  const keys = []
  const regexp = pathToRegexp(path, keys)
  /* eslint-disable no-unused-vars */
  const [url, ...values] = regexp.exec(location)

  return keys.reduce((memo, key, index) => {
    memo[key.name] = values[index]

    return memo
  }, {})
}

export const compileParameters = (path, parameters) => {
  const toPath = pathToRegexp.compile(path)

  return toPath(parameters)
}
