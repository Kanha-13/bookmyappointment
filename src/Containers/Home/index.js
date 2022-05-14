import { useState } from 'react';
import HomeIllustrator from '../../assets/images/homepage.jpg'
import Header from '../../Components/Home/Header';
import Body from '../../Components/Home/Body';
import Login from '../../Components/Login';
import './style.css'
const Home = () => {
  const [isOpen, setOpen] = useState(false)
  const openLogin = () => {
    setOpen(true)
  }
  const closeLogin = () => {
    setOpen(false)
  }
  return (
    // <div id='home-container' className={`${isOpen ? "blurBackground" : ""}`} style={{ backgroundImage: HomeIllustrator }}>
    <div id='home-container' style={{ backgroundImage: HomeIllustrator }}>
      {/* <div id='filter-div'></div> */}
      <Header onOpen={openLogin} />
      <Body onOpen={openLogin} />
      {isOpen &&
        <Login isOpen={isOpen} onClose={closeLogin} />
      }
    </div>
  );
}
export default Home;