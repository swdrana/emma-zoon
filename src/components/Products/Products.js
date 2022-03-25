import SingleProduct from '../SingleProduct/SingleProduct';
import './Products.css';

const Products = (props) => {
    console.log(props);
    return (
        <div className='products'>
            <SingleProduct></SingleProduct>
        </div>
    );
};

export default Products;