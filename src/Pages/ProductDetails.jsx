import { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";

const ProductDetails = () => {

    const [product, setProduct] = useState({})
    const { id } = useParams()
    const products = useLoaderData()

    useEffect(() => {
        const findProduct = products.find(product => product.id == id)
        setProduct(findProduct)
    }, [id, products])

    return (
        <div className="mx-40 ">
            <img src={product.photo} alt="" />
            <p className="font-semibold pt-4 text-lg">Price: {product.price}</p>
            <h2 className="text-4xl font-bold py-6">{product.name}</h2>
            <p className="pb-6">{product.details}</p>
            <div className="mb-6 text-center">
                <button className="btn btn-xs sm:btn-sm md:btn-md lg:btn-lg">Add to Cart</button>
            </div>
        </div>
    );
};

export default ProductDetails;