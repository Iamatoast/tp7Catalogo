import { useEffect, useState, useContext } from "react";
import axios from 'axios';
import Button from 'react-bootstrap/Button';
import { CarritoContext } from '../context/CartContext.tsx';
import { Link } from "react-router-dom";

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

function Producto() {
  const [productos, setProductos] = useState<Producto[]>([]);

  useEffect(() => {
    axios.get<Producto[]>('https://fakestoreapi.com/products')
      .then(response => setProductos(response.data));
	},[]);

	const context = useContext(CarritoContext);
  
	if (!context) {
		throw new Error('CarritoContext no esta disponible.');
	}

	const { addToCart } = context;

  const Comprar = (obj: Producto) => {
    let newObj = {
      ...obj,
      amount: 1,
    };
    addToCart(newObj);
  };

  return (
    <div className="row containerCenter product">
      {productos.map(obj => (
        <div key={obj.id} className="card" style={{ width: '18rem' }}>
          <img src={obj.image} className="card-img-top" alt={obj.title} />
          <div className="card-body">
            <h5 className="card-title">{obj.title}</h5>
            <p className="card-text">{obj.description}</p>
            <p className="card-text">${obj.price}</p>
            <Button variant="dark" onClick={() => Comprar(obj)}>Comprar</Button>
            <Link className="link" to={`/tp7Catalogo/productoDetalle/${obj.id}`}>Ver Más</Link>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Producto;