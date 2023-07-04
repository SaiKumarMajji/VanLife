import { redirect } from './utils'

export async function requireAuth(request) {
    const pathname = new URL(request.url).pathname
    const isLoggedIn = localStorage.getItem("loggedin")

    if (!isLoggedIn) {
        throw redirect(
            `/login?message=You must log in first.&redirectTo=${pathname}`
        )
    } else {
        return null
    }
}
