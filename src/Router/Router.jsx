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
                element: <Home></Home>
            }
        ]
    },
    {
        path: "/addProduct",
        element: <AddProduct></AddProduct>
    },
    {
        path: "/updateProduct",
        element: <UpdateProduct></UpdateProduct>
    }
])
export default router