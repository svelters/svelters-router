import { writable } from 'svelte/store'

export const location = writable(null)
export const routes = writable([])

export const registerRoute = ({ name, path, component }) =>
  routes.update(routes => [...routes, {
    name: name ? name : path,
    path,
    component
  }])

export const unregisterRoute = ({ name }) => {
  routes.update(routes => {
    const index = routes.findIndex(route => {
      return route.name === name
    })
    routes.splice(index, 1)

    return routes
  })
}
