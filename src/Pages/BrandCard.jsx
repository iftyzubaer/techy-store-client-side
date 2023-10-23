import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const BrandCard = ({ brand }) => {
    return (
        <Link to={`/products/${brand.name}`}>
        <div className="card w-full bg-base-100 shadow-xl">
            <figure><img className="h-56" src={brand.image} alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className="card-title">{brand.name}</h2>
            </div>
        </div>
        </Link>
    );
};

export default BrandCard;

BrandCard.propTypes = {
    brand: PropTypes.object.isRequired,
}