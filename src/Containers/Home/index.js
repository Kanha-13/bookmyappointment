import { useEffect, useState } from 'react';
import HomeIllustrator from '../../assets/images/homepage.jpg'
import Header from '../../Components/Home/Header';
import Body from '../../Components/Home/Body';
import Login from '../../Components/Login';
import './style.css'
import { useNavigate, useLocation } from 'react-router-dom';
import { getPatientDetails } from './api';
const Home = () => {
  const navigate = useNavigate()
  const location = useLocation()
  const [isOpen, setOpen] = useState(false)
  const openLogin = () => {
    setOpen(true)
  }
  const closeLogin = () => {
    setOpen(false)
  }
  const [userLoggedIn, setUserLoggedIn] = useState(false)
  const getPatient = async () => {
    const res = await getPatientDetails()
    if (res?.data?._id) {
      localStorage.setItem("patientDetails", JSON.stringify(res.data))
      window.location.replace('/appointment/book')
      setUserLoggedIn(true)
    }
    const path = window.location.pathname
    if (path !== "/" && !userLoggedIn) {
      window.location.replace('/')
    }
  }
  useEffect(() => {
    getPatient();
  }, [location])

  return (
    <div id='home-container' style={{ backgroundImage: HomeIllustrator }}>
      <Header onOpen={openLogin} />
      <Body onOpen={openLogin} />
      {isOpen &&
        <Login isOpen={isOpen} onClose={closeLogin} />
      }
    </div>
  );
}
export default Home;