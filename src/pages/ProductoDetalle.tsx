import { useEffect, useState, useContext } from "react";
import { CarritoContext } from '../context/CartContext.js';
import Button from 'react-bootstrap/Button';
import axios from 'axios';
import { useParams } from "react-router-dom";

interface Producto {
  id: number;
  title: string;
  description: string;
  price: number;
  image: string;
}
interface Objeto{
  id: number;
  title: string;
  description: string;
  price: number;
  image: string;
  amount: number;
}
interface CarritoContextType {
	addToCart: (obj: Objeto) => void,
}

function ProductoDetalle() {
	const [producto, setProducto] = useState<Producto>({
		id: 1,
		title: "a",
		description: "a",
		price: 0,
		image: "NaN",
	});
    const { id } = useParams();
	const context = useContext(CarritoContext);
  
	if (!context) {
		throw new Error('CarritoContext no esta disponible.');
	}

	const { addToCart } = context;


	useEffect(() => {
		axios.get<Producto>(`https://fakestoreapi.com/products/${id}`)
		.then(response => setProducto(response.data));
	},[]);
	const Comprar = (obj: Producto) =>{
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