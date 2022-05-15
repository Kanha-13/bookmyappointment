import { useEffect, useState } from "react";
import { getMyAppointments } from "./api";
import AppointmentCard from "./AppointmentCard";

const Body = () => {
  const [myAppointments, setMyAppointments] = useState([1, 2, 3, 4, 5])
  const getAllAppointments = async () => {
    try {
      const res = await getMyAppointments();
      console.log(res)
      setMyAppointments(res)
    } catch (error) {
      console.log(error)
    }
  }
  useEffect(() => {
    getAllAppointments()
  }, [])
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