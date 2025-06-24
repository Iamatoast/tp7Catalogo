import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';
import Layout from './Layouts/MainLayout.jsx';

function App() {

  return (
    <>
	  <BrowserRouter>
		<Routes>
	  		<Route path="/" element={<Layout />} />
	  	</Routes>
	  </BrowserRouter>
    </>
  )
}

export default App
