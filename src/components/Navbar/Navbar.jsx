import Search from '../../assets/Vector.png';
import Notification from '../../assets/notif.png';
import './Navbar.css'
const Navbar = () => {
  return (
    <div className='header-container'>
  <ul className='header-container-words'>
    <li className="menu-item"><a href="#">Home</a></li>
    <li className="menu-item"><a href="#">Genre</a></li>
    <li className="menu-item"><a href="#">Country</a></li>
    <li>
      <input type="text" placeholder='Search Movies.....' />
      <img className='search' src={Search} alt="search" />
    </li>
    <li className="menu-item"><a href="#">Movies</a></li>
    <li className="menu-item"><a href="#">Series</a></li>
    <li className="menu-item"><a href="#">Animation</a></li>
    <li className="menu-item"><a href="#">Login/SignUp</a></li>
    <li className="menu-item"><a href="#">
      <img src={Notification} alt='Notification' className='notification' />
    </a></li>
  </ul>
</div>

  )
}

export default Navbar
