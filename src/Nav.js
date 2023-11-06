import './App.css';
import logo from './Logo.svg'

function Nav() {
  return (
    <nav>
      <a href='/'>
        <img src={logo} alt='logo'/>
      </a>

      <ul>
        <li><a href='/'>Home</a></li>
        <li><a href='/'>About</a></li>
        <li><a href='/'>Menu</a></li>
        <li><a href='/'>Reservations</a></li>
        <li><a href='/'>Order Online</a></li>
        <li><a href='/'>Login</a></li>
      </ul>
    </nav>
  );
}

export default Nav;
