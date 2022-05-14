import { useState } from "react";
import AppointmentCard from "./AppointmentCard";

const Body = () => {
  const [myAppointments, setMyAppointments] = useState([1, 2, 3, 4, 5])
  return (
    <div style={{ padding: "15px", backgroundColor: "white", width: "95%", height: "83%", borderRadius: "10px" }}>
      <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "space-evenly", width: "100%", height: "100%", overflow: 'auto' }}>
        {
          myAppointments.map((appointment, index) => <AppointmentCard key={index} details={appointment} />)
        }
      </div>
    </div>
  );
}
export default Body;