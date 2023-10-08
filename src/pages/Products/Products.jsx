import React, { useEffect, useState } from 'react';
import SectionTitle from '../../components/SectionTitle/SectionTitle';
import SingleProduct from './SingleProduct';

const Products = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch('products.json')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])

    return (
        <div className='mt-16'>
            <SectionTitle sectionTitle={'Sample Products'} sectionDescription={`"Welcome to our 'Products' page, where innovation meets excellence. At 'LaunchHub,' we take pride in curating a diverse and exciting lineup of products that are set to redefine industries and captivate consumers.`} />

            <div className='mt-12'>
                {
                    products.map((product) => <SingleProduct key={product.id} product={product} />)
                }
            </div>
        </div>
    );
};

export default Products;