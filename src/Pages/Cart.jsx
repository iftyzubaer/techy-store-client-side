import { useEffect, useState } from "react";
import ProductList from "./ProductList";
import { useLoaderData } from "react-router-dom";

const Cart = () => {

    const cartItems = useLoaderData()

    const [cart, setCart] = useState([])
    const [noFound, setNoFound] = useState("")

    useEffect(() => {
        if (cartItems.length > 0) {
            setCart(cartItems)
        }
        else {
            setNoFound('No Data Found!')
        }
    }, [cartItems])

    return (
        <div>
            {
                noFound ? <p className="justify-center text-6xl items-center flex h-[50vh]">{noFound}</p> :
                    <div className="mt-20 grid grid-cols-1 lg:grid-cols-2 gap-6">
                        {
                            cart.map(product => <ProductList key={product._id} product={product}></ProductList>)
                        }
                    </div>
            }
        </div>
    );
};

export default Cart;