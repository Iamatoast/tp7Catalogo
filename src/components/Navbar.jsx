import logo from '../assets/cookie.png';
import cart from '../assets/shopping-cart.png';
import { Link } from "react-router-dom";
import '../styles/Navbar.css';
import { useState, useRef } from 'react';
import Button from 'react-bootstrap/Button';
import Overlay from 'react-bootstrap/Overlay';
import Tooltip from 'react-bootstrap/Tooltip';

function Navbar(){
    const [show, setShow] = useState(false);
    const target = useRef(null);

	return(
		<div className="nav">
			<img className="logo" src={logo} />
			<Link className="link" to="/tp7Catalogo/">Home</Link>
			<Link className="link" to="/tp7Catalogo/quienes-somos">Quienes Somos</Link>
			<Link className="link" to="/tp7Catalogo/productos">Productos</Link>
			<Link className="link" to="/tp7Catalogo/contacto">Contacto</Link>
            <Button variant="link" className="cartButton" ref={target} onClick={() => setShow(!show)}>
                <img className="cart" src={cart} />
            </Button>
            <Overlay target={target.current} show={show} placement="bottom">
                {(props) => (
                    <Tooltip id="overlay-example" {...props}>
                    {carrito.map((obj) => (
                            <>
                                // <img src={obj.image} className="card-img-top" />
                                <h5 className="card-title">{obj.title}</h5>
                                <p className="card-text">{obj.price}</p>
                            </>
                    ))}
                    </Tooltip>
                )}
            </Overlay>
		</div>
	);
}

export default Navbar;
