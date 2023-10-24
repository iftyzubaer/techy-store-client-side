import { createBrowserRouter } from "react-router-dom";
import Root from "../Layout/Root";
import Home from "../Pages/Home";
import Products from "../Pages/Products";
import AddProduct from "../Layout/AddProduct";
import UpdateProduct from "../Layout/UpdateProduct";
import ProductDetails from "../Pages/ProductDetails";
import ErrorPage from "../Pages/ErrorPage";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Root></Root>,
        errorElement: <ErrorPage></ErrorPage>,
        children: [
            {
                path: "/",
                element: <Home></Home>
            },
            {
                path: "/addProduct",
                element: <AddProduct></AddProduct>
            },
            {
                path: "/updateProduct/:id",
                element: <UpdateProduct></UpdateProduct>,
                loader: ({ params }) => fetch(`http://localhost:5000/product/${params.id}`)
            },
            {
                path: "/products/:name",
                element: <Products></Products>,
                loader: () => fetch('/brand.json')
            },
            {
                path: "/product/:_id",
                element: <ProductDetails></ProductDetails>,
                loader: () => fetch('http://localhost:5000/product')
            }
        ]
    }
])
export default router