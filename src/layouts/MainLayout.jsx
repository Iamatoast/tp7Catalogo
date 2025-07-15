import Navbar from '../components/Navbar.jsx';
import Footer from '../components/Footer.jsx';
import { Outlet } from "react-router-dom";

function MainLayout() {

  return (
    <>
	  <Navbar />
	  <Footer />
	<Outlet />
    </>
  )
}

export default MainLayout
