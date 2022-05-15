import './style.css'
import { useEffect, useState } from 'react'
import { signIn, signUp } from './api'
import SignIn from './signIn'
import SignUp from './signUp'
import { useNavigate } from 'react-router-dom'
const Login = ({ isOpen, onClose }) => {
  const navigate = useNavigate()
  const [hasAccount, setHasAccount] = useState(true)

  const onLogin = async (e, email, password) => {
    e.preventDefault()
    try {
      const res = await signIn(email, password)
      if (res.status === 200) {
        navigate("/")
      } else {
        alert("Wrong credentials")
      }
    } catch (error) {
      alert(error.message)
    }
  }
  const changeLogin = () => {
    setHasAccount(prev => !prev)
  }

  const onSignUp = async (e, patientDetails) => {
    e.preventDefault()
    try {
      const res = await signUp(patientDetails)
      if (res.status === 201) {
        navigate("/")
      }
    } catch (error) {
      alert(error.message)
    }
  }

  return (
    <div id="login-container" style={{ display: isOpen ? "flex" : "none" }}>
      <div id="login-card">
        <button onClick={onClose} id="login-close-btn" >X</button>
        {
          hasAccount ?
            <SignIn onLogin={onLogin} toSignUp={changeLogin} /> :
            <SignUp onSignUp={onSignUp} toSignIn={changeLogin} />
        }
      </div>
    </div >
  );
}
export default Login;