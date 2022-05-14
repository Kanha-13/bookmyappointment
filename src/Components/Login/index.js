import './style.css'
import LoginImage from '../../assets/images/loginImage.png'
import { useLocation, useNavigate } from 'react-router-dom'
const Login = ({ isOpen, onClose }) => {
  const navigate = useNavigate()
  const onLogin = (e) => {
    e.preventDefault()
    // console.log(navigate("/"))
    navigate("/appointment/book")
  }
  return (
    <div id="login-container" style={{ display: isOpen ? "flex" : "none" }}>
      <div id="login-card">
        <button onClick={onClose} id="login-close-btn" >X</button>
        <div id="login-card-body">
          <img id='login-image' src={LoginImage} />
          <div id="login-form-wrapper">
            <p id='login-form-header'>Login</p>
            <p className="h3">Don't have an account? <a style={{ color: "black", cursor: "pointer" }}>Creat Your Account</a> it takes less than a minute</p>
            <form onSubmit={onLogin} id="login-form">
              <input placeholder='user name' />
              <input type="password" placeholder='password' />
              {/* <input type="checkbox" /><label>Remember me</label> */}
              <p style={{ cursor: "pointer", marginBottom: "30px" }}>forget password?</p>
              <button type='submit'>Login</button>
            </form>
          </div>
        </div>
      </div>
    </div >
  );
}
export default Login;