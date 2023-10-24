import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const ProductsCard = ({ product }) => {
    return (
        <div>
            <div className="card w-96 bg-base-100 shadow-xl">
                <figure><img src={product.photo} alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title">
                        {product.name}
                        <div className="badge badge-secondary">{product.category}</div>
                    </h2>
                    <p className='text-lg'><span className='font-semibold'>Price:</span> {product.price}</p>
                    <p className='text-lg'><span className='font-semibold'>Ratings:</span> {product.rating}</p>
                    <div className="card-actions justify-end">
                        <Link to={`/product/${product._id}`}><button className="btn btn-outline">Details</button></Link>
                        <Link to={`/updateProduct/${product._id}`}><button className="btn btn-outline btn-error">Update</button></Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductsCard;

ProductsCard.propTypes = {
    product: PropTypes.object.isRequired,
}