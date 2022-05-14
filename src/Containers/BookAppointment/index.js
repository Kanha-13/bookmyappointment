import Body from "../../Components/BookAppointment/Body";
import Header from "../../Components/DashBoardHeader";
import Layout from "../../Components/Layout";
const BookAppointment = () => {
  return (
    <Layout>
      <div style={{ flex: 1, width: "100%", height: "100%", paddingLeft: "20px" }}>
        <Header title="Book Appointment" />
        <Body />
      </div>
    </Layout>
  );
}
export default BookAppointment;