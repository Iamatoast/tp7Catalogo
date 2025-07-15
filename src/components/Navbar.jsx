import logo from '../assets/cookie.png';
import { Link } from "react-router-dom";
import '../styles/Navbar.css';

function Navbar(){
	return(
		<div className="nav">
			<img className="logo" src={logo} />
			<Link className="link" to="/tp7Catalogo/">Home</Link>
			<Link className="link" to="/tp7Catalogo/quienes-somos">Quienes Somos</Link>
			<Link className="link" to="/tp7Catalogo/productos">Productos</Link>
			<Link className="link" to="/tp7Catalogo/contacto">Contacto</Link>
		</div>
	);
}

export default Navbar;
