import { useState, useRef, useContext } from 'react';
import Button from 'react-bootstrap/Button';
import { CarritoContext } from '../context/CartContext.jsx';
import '../styles/CartWidget.css';

function CartWidget(){
	const {carrito, getTotal, removeFromCart, clearCart} = useContext(CarritoContext);
	return(
			<>
				<Button variant="dark" onClick={clearCart}>Comprar</Button>
				<Button variant="dark" onClick={clearCart}>Vaciar</Button>
				<p>Total: ${getTotal()}</p>
				    {carrito.map((obj) => (
					    <>
						<img src={obj.image} className="card-img-top" />
						<h5 className="card-title">{obj.title}</h5>
						<p className="card-text">${obj.price}</p>
						<Button variant="dark" onClick={() => removeFromCart(obj.id)}>Remove</Button>
						<p>Amount: {obj.amount}</p>
					    </>
				    ))}
			</>
	);
}

export default CartWidget;
