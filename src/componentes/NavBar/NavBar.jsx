import CartWidget from '../Cartwidget/CartWidget'
import './NavBar.css'
import { NavLink, Link } from "react-router-dom"


const NavBar = () => {
  const imgMarolio =  'https://img.freepik.com/vector-gratis/paquete-insignias-vintage-carniceria_1176-88.jpg?w=740&t=st=1684602072~exp=1684602672~hmac=8cde90e0d0af42e3b8ac7bdc21f5623880cf14cc816dcbf5833ec8394a6b06da'
  //"https://www.marolio.com.ar/sites/all/themes/theme1043/logo.png";//
  return (
    <header>
        <Link to={"/"}>
          <img className="imgMarolio" src={imgMarolio} alt="" />
        </Link>

        <nav>
            <ul>
                <li>
                  <NavLink to={"/categoria/2"}> Chicas </NavLink>
                </li>

                <li>
                  <NavLink to={"/categoria/3"}> Grandes</NavLink>
                </li>
            </ul>
        </nav>

        <CartWidget />

    </header>
  )
}

export default NavBar