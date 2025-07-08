import logo from '../assets/cookie.png';
import { Link } from "react-router-dom";
import '../styles/Navbar.css';

function Navbar(){
	return(
		<div className="nav">
			<img className="logo" src={logo} />
			<Link className="link" to="/tp7Catalogo/">Home</Link>
			<Link className="link" to="/tp7Catalogo/QuienesSomos">Quienes Somos</Link>
			<Link className="link" to="/tp7Catalogo/Productos">Productos</Link>
			<Link className="link" to="/tp7Catalogo/Contacto">Contacto</Link>
		</div>
	);
}

export default Navbar;
