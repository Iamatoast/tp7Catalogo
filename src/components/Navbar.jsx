import logo from '../assets/cookie.png';
import { Link } from "react-router-dom";
import '../styles/Navbar.css';

function Navbar(){
	return(
		<nav>
			<img src={logo} />
			<Link className="link" to="/home">Home</Link>
			<Link className="link" to="/QuienesSomos">Quienes Somos</Link>
			<Link className="link" to="/Productos">Productos</Link>
			<Link className="link" to="/Contacto">Contacto</Link>
		</nav>
	);
}

export default Navbar;
