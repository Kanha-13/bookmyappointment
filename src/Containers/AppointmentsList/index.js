import Layout from "../../Components/Layout";
import Header from "../../Components/DashBoardHeader";
import Body from "../../Components/AppointmentsList/Body";

const Appointments = () => {
  return (
    <Layout>
      <div style={{ flex: 1, width: "100%", height: "100%", paddingLeft: "20px" }}>
        <Header title="My Appointments" />
        <Body />
      </div>
    </Layout>
  );
}
export default Appointments;