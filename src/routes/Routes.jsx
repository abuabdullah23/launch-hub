import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import Home from "../pages/Home/Home/Home";
import Products from "../pages/Products/Products";
import About from "../pages/About/About";
import Error from "../Error";
import ServiceDetails from "../pages/ServiceDetails/ServiceDetails";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";
import PrivateRoutes from "./PrivateRoutes";

const router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout />,
        children: [
            {
                path: '/',
                element: <Home />
            },
            {
                path: '/service/details/:id',
                element: <PrivateRoutes><ServiceDetails /></PrivateRoutes>,
                loader: () => fetch('/services.json')
            },
            {
                path: '/products',
                element: <PrivateRoutes><Products /></PrivateRoutes>
            },
            {
                path: '/about',
                element: <PrivateRoutes><About /></PrivateRoutes>
            },
            {
                path: '/login',
                element: <Login />
            },
            {
                path: '/register',
                element: <Register />
            },
            {
                path: '*',
                element: <Error />
            },
        ]
    },
]);

export default router;