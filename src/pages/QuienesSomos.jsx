import Script from '../components/script.jsx';
import '../styles/QuienesSomos.css';
import logo from '../assets/cookie.png';
import thumbsUp from '../assets/thumbsUp.jpg';

function QuienesSomos() {
	return(
		<>
			<div className="containerCenter">
				<img src={logo} />
			</div>
			<p className="description">Nosotros somos una empresa que hace cosas muy legales y pretende llenar este mundo de cosas aun mas legales</p>
			<div className="containerCenter">
				<img className="thumbsUp" src={thumbsUp} />
			</div>
			<p className="description">Fuimos fundados por dos locos en un garage con demasiada soberbia y demasiada plata asi que nunca tuvimos origenes humildes (el garage tenia 17 tipos de autos distintos)</p>
			<p className="description">Se supone que tengo que seguir escribiendo esto para llenar la pagina pero no tengo ganas asi que aca tenes todo el guion de Bee movie en su lugar</p>
			<Script />
		</>
	)
}

export default QuienesSomos
