import {
    createBrowserRouter
} from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import Home from "../Pages/Home/Home/Home";
import Menu from "../Pages/Menu/Menu/Menu";
import Shop from "../Pages/Shop/Shop/Shop";
import ContactUs from "../Pages/ContactUs/ContactUs";
import ErrorPage from "../Pages/404/ErrorPage";


export const router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout />,
        errorElement: <ErrorPage />,
        children: [
            {
                path: '/',
                element: <Home />,
            },
            {
                path: '/menu',
                element: <Menu />
            },
            {
                path: '/shop',
                element: <Shop />
            },
            {
                path: '/contact',
                element: <ContactUs />
            },
        ]
    },
]);
