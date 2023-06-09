import {
    createBrowserRouter
} from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import Home from "../Pages/Home/Home/Home";
import Menu from "../Pages/Menu/Menu/Menu";
import Shop from "../Pages/Shop/Shop/Shop";
import ContactUs from "../Pages/ContactUs/ContactUs";
import ErrorPage from "../Pages/404/ErrorPage";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
import Dashboard from "../Layout/Dashboard";
import MyCart from "../Pages/Dashboard/MyCart/MyCart";
import AllUsers from "../Pages/Dashboard/AllUsers/AllUsers";
import PrivateRoutes from "./PrivateRoutes";
import AddItem from "../Pages/Dashboard/AddItem/AddItem";
import AdminRoutes from "./AdminRoutes";
import ManageItems from "../Pages/Dashboard/ManageItems/ManageItems";
import Payment from "../Pages/Dashboard/Payment/Payment";


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
                path: '/shop/:category',
                element: <Shop />
            },
            {
                path: '/contact',
                element: <ContactUs />
            },
            {
                path: '/login',
                element: <Login />
            },
            {
                path: '/register',
                element: <Register />
            },
        ]
    },
    {
        path: '/dashboard',
        element: <Dashboard />,
        children: [
            // users route
            {
                path: 'my-cart',
                element: <MyCart />
            },
            {
                path: 'payment',
                element: <Payment />
            },
            // admin routes
            {
                path: 'all-users',
                element: <AllUsers />
            },
            {
                path: 'add-item',
                element: <AdminRoutes><AddItem /></AdminRoutes>,
            },
            {
                path: 'manage-items',
                element: <AdminRoutes><ManageItems/></AdminRoutes>,
            },
           
        ]
    },
]);
