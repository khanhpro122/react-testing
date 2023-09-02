// Pages
import HomePage from "../pages/HomePage";
import SignInPage from "../pages/SignInPage";
import SignUpPage from "../pages/SignUpPage";

export const routes = [
    {
        path: '/',
        page: HomePage
    },
    {
        path: '/signIn',
        page: SignInPage
    },
    {
        path: '/signup',
        page: SignUpPage
    }
]