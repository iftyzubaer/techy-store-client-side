import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const ProductList = ({ product, removeFromCart }) => {
    return (
        <div>
            <div className="relative flex max-w-[48rem] flex-col md:flex-row rounded-xl bg-white bg-clip-border text-gray-700 shadow-md">
                <div className="relative m-0 w-2/5 shrink-0 overflow-hidden rounded-xl rounded-r-none bg-white bg-clip-border text-gray-700">
                    <img
                        src={product.photo}
                        alt="image"
                        className="h-full w-full object-cover"
                    />
                </div>
                <div className="p-6">
                    <div className="badge rounded px-3 py-2 border-none text-sm font-medium">{product.category}</div>
                    <h4 className="mb-2 block font-sans text-2xl font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased">
                        {product.name}
                    </h4>
                    <p className="mb-8 block font-sans text-base font-semibold leading-relaxed text-gray-700 antialiased">
                        ${product.price}
                    </p>
                    <div className='gap-6 flex'>
                        <Link to={`/product/${product._id}`}><button className="btn btn-neutral" type="button">View Details</button></Link>
                        <button onClick={() => removeFromCart(product._id)} className="btn btn-outline">Remove From Cart</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductList;

ProductList.propTypes = {
    product: PropTypes.object.isRequired,
    removeFromCart: PropTypes.func.isRequired,
}