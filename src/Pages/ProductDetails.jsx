import { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

const ProductDetails = () => {

    const [product, setProduct] = useState({})
    const { _id } = useParams()
    const products = useLoaderData()

    useEffect(() => {
        const findProduct = products.find(product => product._id == _id)
        setProduct(findProduct)
    }, [_id, products])

    const handleAddToCart = e => {
        e.preventDefault()
        const photo = product.photo
        const name = product.name
        const brandName = product.brandName
        const category = product.category
        const price = product.price
        const details = product.details
        const rating = product.rating

        const newCartItem = { photo, name, brandName, category, price, details, rating }

        fetch('https://techy-store-server.vercel.app/cart', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(newCartItem)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                toast("Added To Cart Successfully")
            })
    }

    return (
        <div className="mx-6 md:mx-32 lg:mx-40">
            <img src={product.photo} alt="" />
            <p className="font-semibold pt-4 text-lg">Price: {product.price}</p>
            <h2 className="text-4xl font-bold py-6">{product.name}</h2>
            <p className="pb-6">{product.details}</p>
            <div className="mb-6 text-center">
                <button onClick={handleAddToCart} className="btn btn-md lg:btn-lg">Add to Cart</button>
            </div>
            <ToastContainer />
        </div>
    );
};

export default ProductDetails;