import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';
import Layout from './layouts/MainLayout.jsx';

function App() {

  return (
    <>
	  <BrowserRouter>
		<Routes>
	  		<Route path="/tp7Catalogo/" element={<Layout />} />
	  	</Routes>
	  </BrowserRouter>
    </>
  )
}

export default App
