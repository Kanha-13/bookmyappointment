import { useState } from 'react';
import Body from './Body';
import Footer from './Footer';
import Header from './Header';
import './style.css'
const SideBar = () => {
  const [isSideBar, setSideBar] = useState(true)
  const openSideBar = () => {
    setSideBar(prev => !prev)
  }
  return (
    <div className={isSideBar ? "openSideBar" : "closeSideBar"} style={{ display: "flex", flexDirection: "column", width: "20%", height: "100vh", backgroundColor: "white" }}>
      <Header onOpen={openSideBar} isOpen={isSideBar} />
      <Body isOpen={isSideBar} />
      <Footer />
    </div>
  );
}
export default SideBar;