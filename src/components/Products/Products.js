import SingleProduct from '../SingleProduct/SingleProduct';
import './Products.css';

const Products = (props) => {
    return (
        <div className='products'>
            {props.products.map(product=>{
               return <SingleProduct key={product.id} product={product} cartFunction={props.cartFunction}></SingleProduct>
            })}
        </div>
    );
};

export default Products;