import { createBrowserRouter } from "react-router-dom";
import Root from "../Layout/Root";
import Home from "../Pages/Home";
import Products from "../Pages/Products";
import AddProduct from "../Layout/AddProduct";
import UpdateProduct from "../Layout/UpdateProduct";
import ProductDetails from "../Pages/ProductDetails";
import ErrorPage from "../Pages/ErrorPage";
import Login from "../Layout/Auth/Login";
import Register from "../Layout/Auth/Register";
import PrivateRoute from "../PrivateRoute/PrivateRoute";
import Cart from "../Pages/Cart";

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
                element: <PrivateRoute><AddProduct></AddProduct></PrivateRoute>
            },
            {
                path: "/updateProduct/:id",
                element: <PrivateRoute><UpdateProduct></UpdateProduct></PrivateRoute>,
                loader: ({ params }) => fetch(`http://localhost:5000/product/${params.id}`)
            },
            {
                path: "/products/:name",
                element: <PrivateRoute><Products></Products></PrivateRoute>,
                loader: () => fetch('/brand.json')
            },
            {
                path: "/product/:_id",
                element: <PrivateRoute><ProductDetails></ProductDetails></PrivateRoute>,
                loader: () => fetch('http://localhost:5000/product')
            },
            {
                path: "/login",
                element: <Login></Login>
            },
            {
                path: "/register",
                element: <Register></Register>
            },
            {
                path: "/cart",
                element: <Cart></Cart>,
                loader: () => fetch('http://localhost:5000/cart')
            }
        ]
    }
])
export default router