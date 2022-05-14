import drPng from '../../assets/images/doctorPng.png'
const Header = ({ onOpen, isOpen }) => {
  return (
    <div style={{
      display: "flex",
      flexDirection: isOpen ? "row" : "column-reverse",
      paddingTop: "20px",
      alignItems: "center",
      justifyContent: "space-around"
    }}>
      <img onClick={onOpen} style={{ cursor: "pointer", marginLeft: "10px", width: "50px", height: "fit-content", marginTop: isOpen ? "0px" : "15px" }} src={drPng} />
      {isOpen && <p style={{ fontSize: "27px", fontWeight: "bold" }}>My Doctor</p>}
      <div onClick={onOpen} id='hamburger'>
        <div className='burger-lines' ></div>
        <div className='burger-lines' ></div>
        <div className='burger-lines' ></div>
      </div>
    </div>
  );
}
export default Header;