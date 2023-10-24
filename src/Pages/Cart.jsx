import { useEffect, useState } from "react";
import ProductList from "./ProductList";

const Cart = () => {

    const [cart, setCart] = useState([])
    const [noFound, setNoFound] = useState("")

    useEffect(() => {
        const cartItems = JSON.parse(localStorage.getItem('cart'))

        if (cartItems) {
            setCart(cartItems)
        }
        else {
            setNoFound('No Data Found!')
        }
    }, [])

    return (
        <div>
            {
                noFound ? <p className="justify-center items-center flex h-[80vh]">{noFound}</p> :
                    <div className="mt-20 grid grid-cols-1 md:grid-cols-2 gap-6">
                        {
                            cart.map(product => <ProductList key={product._id} product={product}></ProductList>)
                        }
                    </div>
            }
        </div>
    );
};

export default Cart;