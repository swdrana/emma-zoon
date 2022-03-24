import React from 'react';
import SingleProduct from '../SingleProduct/SingleProduct';
import './Products.css';

const Products = () => {
    return (
        <div className='products'>
            <SingleProduct></SingleProduct>
            <SingleProduct></SingleProduct>
            <SingleProduct></SingleProduct>
            <SingleProduct></SingleProduct>
            <SingleProduct></SingleProduct>
            <SingleProduct></SingleProduct>
            <SingleProduct></SingleProduct>
        </div>
    );
};

export default Products;