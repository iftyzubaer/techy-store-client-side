import { useState } from 'react';
import { useEffect } from 'react';
import BrandCard from './BrandCard';

const Brand = () => {

    const [brand, setBrand] = useState([])

    useEffect(() => {
        fetch('/brand.json')
            .then(res => res.json())
            .then(data => setBrand(data))
    }, [])

    return (
        <div className='dark:text-white'>
            <h2 className="text-5xl font-bold text-center mb-4">Brand Category</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 px-2 md:px-20 lg:px-40">
                {
                    brand.map(brand => <BrandCard key={brand.name} brand={brand}></BrandCard>)
                }
            </div>
        </div>
    );
};

export default Brand;