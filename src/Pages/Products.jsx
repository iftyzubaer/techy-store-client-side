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
        <div>
            <div>
                <div className="carousel w-full">
                    <div id="item1" className="carousel-item w-full">
                        <img src="https://i.ibb.co/fkCSTLm/modern-man-tech-collection-wooden-desk-headphones-sunglasses-smartphone-generated-by-ai-24640-92923.jpg" className="w-full" />
                    </div>
                    <div id="item2" className="carousel-item w-full">
                        <img src="https://i.ibb.co/ZxyNtsd/modern-man-tech-collection-wooden-desk-headphones-sunglasses-smartphone-generated-by-ai-24640-92923.jpg" className="w-full" />
                    </div>
                    <div id="item3" className="carousel-item w-full">
                        <img src="https://i.ibb.co/tJnbpP4/modern-desk-flat-lay-989064-978.jpg" className="w-full" />
                    </div>
                </div>
                <div className="flex justify-center w-full py-2 gap-2">
                    <a href="#item1" className="btn btn-xs">1</a>
                    <a href="#item2" className="btn btn-xs">2</a>
                    <a href="#item3" className="btn btn-xs">3</a>
                </div>
            </div>
            {
                product.length === 0 ? <p className="text-center justify-center my-52 items-center font-semibold text-7xl">No Element Found</p> : <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 px-6 md:px-48 lg:px-60">{product.map(product => <ProductsCard key={name} product={product}></ProductsCard>)}</div>
            }
        </div>
    );
};

export default Products;