import { Navbar } from 'react-bootstrap';
import { useContext } from 'react';
import { CartContext } from "../CartContext";

function NavbarComponent() {
    const cart = useContext(CartContext);

    const productsCount = cart.items.reduce((sum, product) => sum + product.quantity, 0);

    return (
        <>
            <Navbar expand="sm">

                <Navbar.Toggle />
                <Navbar.Collapse className="justify-content-end">
                    Cart ({productsCount} Items)
                </Navbar.Collapse>
            </Navbar>

        </>
    )
}

export default NavbarComponent;