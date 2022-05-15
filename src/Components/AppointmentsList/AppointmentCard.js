import { useState } from "react";
import { deleteMyAppointment, editMyAppointment } from "./api";
const AppointmentCard = ({ details, onDelete, onEdit }) => {
  const [app_id, setApp_id] = useState(details.app_data._id)
  const deleteApp = async () => {
    const res = await deleteMyAppointment(app_id)
    if (res.status === 201)
      onDelete()
  }
  return (
    <div style={{ cursor: "pointer", overflow: "hidden", width: "30%", display: "flex", height: "35%", backgroundColor: '#d3d6da', borderRadius: "5px" }}>
      <img src={details.img ? details.img : ""} />
      <div style={{ padding: "0px 15px", width: "100%", }}>
        <p>Patient name: {details.patient?.firstName} {details.patient?.lastName}</p>
        <p>Age: {details.patient?.age}</p>
        <p>Mobile Number: {details.patient?.mobileNumber}</p>
        <p>Dr. Name: {details.app_data.doctorName}</p>
        <p>Appointment Date-Time: {details.app_data.appointmentDateTime}</p>
        <div style={{ display: 'flex', alignItems: "center", justifyContent: "space-around" }}>
          <button onClick={() => onEdit(app_id)} style={{ backgroundColor: "yellow", border: "none", borderRadius: "2px", cursor: "pointer", fontSize: "17px", color: "black" }}>Edit</button>
          <button onClick={deleteApp} style={{ backgroundColor: "red", border: "none", borderRadius: "2px", cursor: "pointer", fontSize: "17px", color: "white" }}>Delete</button>
        </div>
      </div>
    </div>
  )
}
export default AppointmentCard;