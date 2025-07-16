import '../styles/Home.css';
import thumbsUp from '/tp7Catalogo/src/assets/thumbsUp.jpg';

function Home() {
	return(
		<div className="">
			<h1 className="containerCenter">This your  home</h1>
			<div className="textField">
				<p className="containerCenter">Hola y bienvenido a Productos Inc., la empresa que te vende productos productivos para producir productividad</p>
				<p className="containerCenter">Aqui nos especializamos en proveerte de los productos de mejor calidad en el mercado al menor precio posible</p>
			</div>
			<div className="containerCenter">
				<img className="imgThumbsUp" src={thumbsUp} />
			</div>
		</div>
	)
}

export default Home
