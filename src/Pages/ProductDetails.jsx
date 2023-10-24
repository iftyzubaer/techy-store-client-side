import { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import { toast } from "react-toastify";

const ProductDetails = () => {

    const [product, setProduct] = useState({})
    const { _id } = useParams()
    const products = useLoaderData()

    useEffect(() => {
        const findProduct = products.find(product => product._id == _id)
        setProduct(findProduct)
    }, [_id, products])

    const handleAddToCart = () => {
        const cartArray = []
        const cartItems = JSON.parse(localStorage.getItem('cart'))
        if (!cartItems) {
            cartArray.push(product)
            localStorage.setItem('cart', JSON.stringify(cartArray))
            toast("Added To Cart Successfully")
        }
        else {
            const isExists = cartItems.find(product => product._id == _id)
            if (!isExists) {
                cartArray.push(...cartItems, product)
                localStorage.setItem('cart', JSON.stringify(cartArray))
                toast("Added To Cart Successfully")
            }
            else {
                toast("Already Added to Cart")
            }
        }
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
        </div>
    );
};

export default ProductDetails;