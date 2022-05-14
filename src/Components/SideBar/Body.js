import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
import bookIcon from '../../assets/images/bookIcon.png'
import listIcon from '../../assets/images/listIcon.png'
const Body = ({ isOpen }) => {
  const location = useLocation()
  const getBackgroundColor = (path) => {
    if (location.pathname === path) {
      return "#3483cb"
    } else
      return "#ffffff"
  }
  const getColor = (path) => {
    if (location.pathname === path) {
      return "#ffffff"
    } else
      return "#000000"
  }
  return (
    <div style={{ display: 'flex', flexDirection: "column", marginTop: "20px" }}>
      <Link className="screen-link" style={{
        backgroundColor: getBackgroundColor("/appointment/book"),
        justifyContent: isOpen ? "" : "center",
        color: getColor("/appointment/book")
      }} to="/appointment/book"><img style={{ marginLeft: "10px", width: "40px", height: "fit-content" }} src={bookIcon} />{isOpen ? "Book appointment" : ""}</Link>
      <Link className="screen-link" style={{
        backgroundColor: getBackgroundColor("/appointments"),
        justifyContent: isOpen ? "" : "center",
        color: getColor("/appointments")
      }} to="/appointments"><img style={{ marginLeft: "10px", width: "40px", height: "fit-content" }} src={listIcon} />{isOpen ? "All appointments" : ""}</Link>
    </div>
  );
}

export default Body;