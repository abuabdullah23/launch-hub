import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import Home from "../pages/Home/Home/Home";
import Products from "../pages/Products/Products";
import About from "../pages/About/About";
import Error from "../Error";
import ServiceDetails from "../pages/ServiceDetails/ServiceDetails";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";

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
                element: <ServiceDetails />,
                loader: () => fetch('/services.json')
            },
            {
                path: '/products',
                element: <Products />
            },
            {
                path: '/about',
                element: <About />
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