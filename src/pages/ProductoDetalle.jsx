import { useEffect, useState, useContext } from "react";
import { CarritoContext } from '../context/CartContext.jsx';
import Button from 'react-bootstrap/Button';
import axios from 'axios';
import { useParams } from "react-router-dom";
import PropTypes from 'prop-types'

function ProductoDetalle() {
	const [producto, setProducto] = useState([]);
    const { id } = useParams();
	const { addToCart } = useContext(CarritoContext);
	useEffect(() => {
		axios.get(`https://fakestoreapi.com/products/${id}`)
		.then(response => (setProducto(response.data)));
	});
	const Comprar = (obj) =>{
		let newObj = 
		{
			...obj,
			amount: 1,
		};
		addToCart(newObj);
        console.log(newObj);
	}
	return(
		<div className="row containerCenter product">
            <div key={producto.id} className="card" style={{ width: '18rem' }}>
                <img src={producto.image} className="card-img-top" />
                <div className="card-body">
                <h5 className="card-title">{producto.title}</h5>
                <p className="card-text">{producto.description}</p>
                <p className="card-text">${producto.price}</p>
                <Button variant="dark" onClick={() => Comprar({...producto})}>Comprar</Button>
                </div>
            </div>
		</div>
	);
}

export default ProductoDetalle