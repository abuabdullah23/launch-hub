import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import Home from "../pages/Home/Home/Home";
import Products from "../pages/Products/Products";
import Blog from "../pages/Blog/Blog";
import About from "../pages/About/About";
import Error from "../Error";

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
                path: '/products',
                element: <Products />
            },
            {
                path: '/blog',
                element: <Blog />
            },
            {
                path: '/about',
                element: <About />
            },
            {
                path: '*',
                element: <Error />
            },
        ]
    },
]);

export default router;