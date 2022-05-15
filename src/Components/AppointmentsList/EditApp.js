import { useEffect, useRef, useState } from "react";
import { bookMyAppointment } from "./api";
import CustomDropDown from "../BookAppointment/CustomDropDown";
import CustomInput from "../BookAppointment/CustomInput";
const EditApp = ({ isOpen, onClose, a_details, onSubmit }) => {
  const onChange = (name, value) => {
    setPatientDetail({ ...patientDetail, [name]: value })
  }
  const [patientDetail, setPatientDetail] = useState({
    mobileNumber: "",
    doctorName: "",
    appointmentDateTime: "",
    problem: ""

  });
  const options = [
    { name: "X" },
    { name: "Y" },
    { name: "Z" }

  ]
  useEffect(() => {
    setPatientDetail(a_details)
  }, [])
  return (
    <div id="login-container" style={{ position: "fixed", top: 0, left: 0, display: isOpen ? "flex" : "none" }}>
      <div id="login-card" style={{ width: "40vw", padding: "0px 10px" }}>
        <button onClick={() => onClose("")} style={{ color: "#000000" }} id="login-close-btn" >X</button>
        <CustomDropDown width="89%" onChange={onChange} required={true} label="Doctor's Name" options={options} value={patientDetail.doctorName} valueName="doctorName" />
        <CustomInput width="90%" onChange={onChange} required={true} label="Appointment Date - Time" type="dateTime-local" placeHolder="Enter patient's address" value={patientDetail.appointmentDateTime} valueName="appointmentDateTime" />
        <CustomInput width="90%" onChange={onChange} required={true} label="Mobile Number" placeHolder="Enter Mobile number" value={patientDetail.mobileNumber} valueName="mobileNumber" />
        <CustomInput width="90%" onChange={onChange} required={true} label="Problem" placeHolder="Please describe your health issue here..." value={patientDetail.problem} valueName="problem" />
        <button onClick={() => {
          console.log(patientDetail)
          onSubmit(patientDetail)
        }} style={{
          width: "60%", margin: "auto", cursor: "pointer",
          height: "45px", backgroundColor: '#11b011',
          color: "white", border: "none", borderRadius: "5px",
          fontSize: "20px", fontWeight: "bold"
        }}>Update</button>
      </div>
    </div>
  );
}
export default EditApp;