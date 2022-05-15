import { useNavigate } from "react-router-dom";
import { logOut } from "./api";

const Footer = () => {
  const navigate = useNavigate()
  const logOutUser = async () => {
    const resp = await logOut();
    if (resp.status === 200)
      navigate('/')
  }
  return (
    <div style={{ margin: "30px 15px" }}>
      <button onClick={logOutUser} style={{ border: "none", backgroundColor: "red", color: "white", height: "40px", borderRadius: "5px", fontWeight: "bold", cursor: 'pointer', fontSize: "18px", width: "90px" }}>Log out</button>
    </div>
  );
}

export default Footer;