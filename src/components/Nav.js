import logo from "../images/Logo.svg";

function Nav() {
    return (
       <nav>
         <img className="logo" src={logo} alt="Little Lemon Logo" ></img>
            <ul className="menu">
                <li><a>Home</a></li>
                <li><a>About</a></li>
                <li><a>Menu</a></li>
                <li><a>Reservations</a></li>
                <li><a>Order Online</a></li>
                <li><a>Login</a></li>
            </ul>
       </nav>
    );
  }

  export default Nav;