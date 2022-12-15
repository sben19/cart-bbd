import { Row, Col } from 'react-bootstrap';
import useProducts from '../useProducts';
import ProductCard from '../components/ProductCard';

import { Button } from 'react-bootstrap';
import { useState, useContext } from 'react';
import { CartContext } from "../CartContext";
import CartProduct from '../components/CartProduct';


function Store() {

    const productsArray = useProducts()

    const cart = useContext(CartContext);

    const productsCount = cart.items.reduce((sum, product) => sum + product.quantity, 0);
    const [shippingValue, setShippingValue] = useState(5.99)



    if (productsArray) {
        return (
            <>

                <Row xs={1} md={2} className="g-6">
                    <Col>
                        <Row xs={1} md={3} className="g-4">
                            {productsArray.map((product, idx) => (
                                <Col align="center" key={idx}>
                                    <ProductCard product={product} />
                                </Col>
                            ))}
                        </Row>
                    </Col>
                    <Col>

                        <Row xs={1} md={3} className="g-4">
                            <div className="card w-100">
                                <div className="card-header text-center h3">CART</div>
                                <div className="card-body">

                                    {productsCount > 0 ?
                                        <>
                                            <p>Items in your cart:</p>
                                            {cart.items.map((currentProduct, idx) => (
                                                <CartProduct key={idx} id={currentProduct.id} quantity={currentProduct.quantity}></CartProduct>
                                            ))}

                                            <h4>Total: {cart.getTotalCost().toFixed(2)}</h4>
                                            <div className='h5'>Shipping value :
                                                $ {productsCount > 4 ? (shippingValue * 2).toFixed(2) : shippingValue}

                                            </div>
                                        </>
                                        :
                                        <h6 className='text-center'>There are no items in your cart!</h6>
                                    }
                                </div>
                            </div>
                        </Row>
                    </Col>
                </Row>
            </>
        )
    }
    else { return null }
}

export default Store;