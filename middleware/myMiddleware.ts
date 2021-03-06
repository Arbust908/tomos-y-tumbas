import { Middleware } from '@nuxt/types'

const myMiddleware: Middleware = ({ store, redirect }) => {
  if (!store.getters.isAuthenticated) {
    return redirect('/login')
  }
}

export default myMiddleware
