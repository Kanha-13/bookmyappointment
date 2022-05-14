import './header.css'
const Header = ({ onOpen }) => {
  return (
    <div id="home-header">
      <p id="brand-name" >My Doctor</p>
      <div id='header-right'>
        <a>About us</a>
        <a>Contact us</a>
        <a>Services</a>
        <button onClick={onOpen}>Login</button>
      </div>
    </div>
  );
}
export default Header;