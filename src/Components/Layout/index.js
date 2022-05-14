import SideBar from "../SideBar";
const Layout = (props) => {
  return (
    <div style={{ display: "flex", height: "100vh", flexDirection: "row" }}>
      <SideBar />
      {props.children}
    </div>
  );
}
export default Layout;