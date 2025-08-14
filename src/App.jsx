import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';
import Layout from './layouts/MainLayout.jsx';
import Home from './pages/Home.jsx';
import QuienesSomos from './pages/QuienesSomos.jsx';
import Productos from './pages/Productos.jsx';
import Contacto from './pages/Contacto.jsx';
import CarritoProvider from './context/CartContext.jsx';

function App() {

  return (
	  <CarritoProvider>
		  <BrowserRouter>
			<Routes>
				<Route path="/tp7Catalogo/" element={<Layout />}>
					<Route index element={<Home />} />
					<Route path="/tp7Catalogo/quienes-somos" element={<QuienesSomos />} />
					<Route path="/tp7Catalogo/productos" element={<Productos />} />
					<Route path="/tp7Catalogo/contacto" element={<Contacto />} />
					<Route path="*" element={<h1>404</h1>} />
				</Route>
			</Routes>
		  </BrowserRouter>
	  </CarritoProvider>
  )
}

export default App
