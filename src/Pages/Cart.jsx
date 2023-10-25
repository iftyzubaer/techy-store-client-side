import { useEffect, useState } from "react";
import ProductList from "./ProductList";
import { toast } from "react-toastify";

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

    const removeFromCart = id => {
        const cartItems = JSON.parse(localStorage.getItem('cart'))
        const remaining = cartItems.filter(idx => idx !== id)
        console.log(cartItems, id, remaining);
        localStorage.setItem('cart', JSON.stringify(remaining))
        toast("Removed From Cart")
    }

    return (
        <div>
            {
                noFound ? <p className="justify-center items-center flex h-[80vh]">{noFound}</p> :
                    <div className="mt-20 grid grid-cols-1 lg:grid-cols-2 gap-6">
                        {
                            cart.map(product => <ProductList key={product._id} removeFromCart={removeFromCart} product={product}></ProductList>)
                        }
                    </div>
            }
        </div>
    );
};

export default Cart;