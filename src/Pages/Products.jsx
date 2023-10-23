import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ProductsCard from "./ProductsCard";

const Products = () => {

    const { name } = useParams()
    const [products, setProducts] = useState([])
    const [product, setProduct] = useState([])

    useEffect(() => {
        fetch('http://localhost:5000/product')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])

    useEffect(() => {
        const findProduct = products.filter(product => product.brandName == name)
        setProduct(findProduct)
    }, [name, products])

    return (
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 px-6 md:px-48 lg:px-60">
            {
                product.map(product => <ProductsCard key={name} product={product}></ProductsCard>)
            }
        </div>
    );
};

export default Products;