import { useState } from "react"
import LoginImage from '../../assets/images/loginImage.png'

const SignIn = ({ onLogin, toSignUp }) => {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const onChangeEmail = (value) => {
    setEmail(value)
  }
  const onChangePassword = (value) => {
    setPassword(value)
  }
  return (
    <div id="login-card-body">
      <img id='login-image' src={LoginImage} />
      <div id="login-form-wrapper">
        <p id='login-form-header'>Login</p>
        <p className="h3">Don't have an account? <a onClick={toSignUp} style={{ color: "black", cursor: "pointer" }}>Creat Your Account</a> it takes less than a minute</p>
        <form onSubmit={(e) => onLogin(e, email, password)} id="login-form">
          <input onChange={e => onChangeEmail(e.target.value)} value={email} placeholder='user email' />
          <input onChange={e => onChangePassword(e.target.value)} value={password} type="password" placeholder='password' />
          {/* <input type="checkbox" /><label>Remember me</label> */}
          <p style={{ cursor: "pointer", marginBottom: "30px" }}>forget password?</p>
          <button type='submit'>Login</button>
        </form>
      </div>
    </div>
  )
}
export default SignIn;