const AppointmentCard = ({ details }) => {
  return (
    <div style={{ cursor: "pointer", overflow: "hidden", width: "30%", display: "flex", height: "35%", backgroundColor: '#d3d6da', borderRadius: "5px" }}>
      <img src={details.img ? details.img : ""} />
      <div style={{ padding: "0px 15px", width: "60%", backgroundColor: 'red' }}>
        <p>Name: {details.firstName}{details.lastName}</p>
        <p>Age: {details.age}</p>
        <p>Mobile Number: {details.mobileNumber}</p>
        <p>Dr. Name: {details.doctorName}</p>
        <p>Appointment Date-Time: {details.appointmentDateTime}</p>
      </div>
    </div>
  )
}
export default AppointmentCard;