import { Card, Button, Form, Row, Col } from 'react-bootstrap';
import { CartContext } from '../CartContext';
import { useContext } from 'react';

function ProductCard(props) {
    const product = props.product;
    const cart = useContext(CartContext);
    const productQuantity = cart.getProductQuantity(product.id);

    return (
        <Card className=' h-100'>
            <Card.Body >
                <div className='h6 h-25 overflow-scroll'>{product.title}</div>

                <Card.Text >${product.price}</Card.Text>
                {productQuantity > 0 ?
                    <>
                        <Form as={Row}>
                            <Form.Label column="true" sm="6">In Cart: {productQuantity}</Form.Label>
                            <Col sm="10">
                                <Button size="sm" onClick={() => cart.removeOneFromCart(product.id)} className="mx-2">-</Button>
                                <Button size="sm" onClick={() => cart.addOneToCart(product.id)} className="mx-2">+</Button>
                            </Col>
                        </Form>
                        <Button size="sm" variant="danger" onClick={() => cart.deleteFromCart(product.id)} className="my-2">Remove from cart</Button>
                    </>
                    :
                    <Button variant="primary" onClick={() => cart.addOneToCart(product.id)}>Add To Cart</Button>
                }
            </Card.Body>
        </Card>
    )
}

export default ProductCard;