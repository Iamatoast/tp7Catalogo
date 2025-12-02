import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';
import Layout from './layouts/MainLayout.js';
import Home from './pages/Home.js';
import QuienesSomos from './pages/QuienesSomos.js';
import Productos from './pages/Productos.js';
import Contacto from './pages/Contacto.js';
import ProductoDetalle from './pages/ProductoDetalle.js';
import CarritoProvider from './context/CartContext.js';

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
					<Route path="/tp7Catalogo/productoDetalle/:id" element={<ProductoDetalle />} />
					<Route path="*" element={<h1>404</h1>} />
				</Route>
			</Routes>
		  </BrowserRouter>
	  </CarritoProvider>
  )
}

export default App
