import { createBrowserRouter } from "react-router-dom";
import Root from "../Layout/Root";
import Home from "../Pages/Home";
import AddProduct from "../Layout/AddProduct";
import UpdateProduct from "../Layout/UpdateProduct";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Root></Root>,
        children: [
            {
                path: "/",
                element: <Home></Home>,
                // loader: () => fetch('http://localhost:5000/product')
            },
            {
                path: "/addProduct",
                element: <AddProduct></AddProduct>
            },
            {
                path: "/myCart",
                element: <UpdateProduct></UpdateProduct>
            }
        ]
    }
])
export default router