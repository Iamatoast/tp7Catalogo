import { useEffect, useState, useContext } from "react";
import axios from 'axios';
import Button from 'react-bootstrap/Button';
import { CarritoContext } from '../context/CartContext.jsx';

function Producto() {
	const [productos, setProductos] = useState([]);
	useEffect(() => {
		axios.get('https://fakestoreapi.com/products')
		.then(response => (setProductos(response.data)));
	});
	const { addToCart } = useContext(CarritoContext);
	const Comprar = (obj) =>{
		let newObj = 
		{
			...obj,
			amount: 1,
		};
		addToCart(newObj);
	}
	return(
		<div className="row containerCenter product">
			{productos.map(obj => (
				<div key={obj.id} className="card" style={{ width: '18rem' }}>
				  <img src={obj.image} className="card-img-top" />
				  <div className="card-body">
				    <h5 className="card-title">{obj.title}</h5>
				    <p className="card-text">{obj.description}</p>
				    <p className="card-text">${obj.price}</p>
				    <Button variant="dark" onClick={() => Comprar(obj)}>Comprar</Button>
				  </div>
				</div>
			))}
		</div>
	)
}

export default Producto
