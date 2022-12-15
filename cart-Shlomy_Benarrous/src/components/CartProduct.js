import Button from 'react-bootstrap/Button';
import { CartContext } from "../CartContext";
import { useContext } from "react";
import { Col, Row } from 'react-bootstrap';
import useProducts from "../useProducts";

function CartProduct(props) {

    const productsArray = useProducts();
    const cart = useContext(CartContext);
    const id = props.id;
    const quantity = props.quantity;

    if (productsArray) {
        let productData = productsArray.find(product => product.id === id);
        return (
            <>
                <Row xs={1} md={2}  >
                    <Col>     <span className='h4'>{productData.title} : </span></Col>
                    <Col className='text-end'>    <span className='h6'>{quantity} units</span></Col>
                </Row>

                <p>${(quantity * productData.price).toFixed(2)}</p>
                <Button size="sm" onClick={() => cart.deleteFromCart(id)}>Remove</Button>
                <hr></hr>
            </>
        )
    } else {
        return null
    }
}


export default CartProduct;