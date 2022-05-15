import { useRef, useState } from "react";
import { bookMyAppointment } from "./api";
import CustomDropDown from "./CustomDropDown";
import CustomInput from "./CustomInput";

const Body = () => {
  const formRef = useRef()
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
  const onChange = (name, value) => {
    setPatientDetail({ ...patientDetail, [name]: value })
  }
  const bookAppointment = async (e) => {
    e.preventDefault()
    const resp = await bookMyAppointment(patientDetail);
    if (resp.status === 201) {
      formRef.current.reset();
      setPatientDetail({
        mobileNumber: "",
        doctorName: "",
        appointmentDateTime: "",
        problem: ""
      })
    }
  }
  return (
    <div style={{ padding: "15px", backgroundColor: "white", width: "95%", height: "83%", borderRadius: "10px" }}>
      <form ref={formRef} onSubmit={bookAppointment} style={{ display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap" }}>
        {/* <CustomInput onChange={onChange} required={true} label="Patient First name" placeHolder="Enter patient's First name" value={patientDetail.firstName} valueName="firstName" /> */}
        {/* <CustomInput onChange={onChange} required={true} label="Patient Last name" placeHolder="Enter patient's Last name" value={patientDetail.lastName} valueName="lastName" /> */}
        {/* <CustomInput onChange={onChange} required={true} label="Age" type="number" min="0" placeHolder="Enter patient's age" value={patientDetail.age} valueName="age" /> */}
        {/* <CustomInput onChange={onChange} required={true} label="Date of Birth" type="date" placeHolder="Enter patient's dob" value={patientDetail.dob} valueName="dob" /> */}
        <CustomDropDown onChange={onChange} required={true} label="Doctor's Name" options={options} value={patientDetail.doctorName} valueName="doctorName" />
        <CustomInput onChange={onChange} required={true} label="Appointment Date - Time" type="dateTime-local" placeHolder="Enter patient's address" value={patientDetail.appointmentDateTime} valueName="appointmentDateTime" />
        {/* <CustomInput onChange={onChange} required={true} label="Address" placeHolder="Enter patient's address" value={patientDetail.address} valueName="address" /> */}
        <CustomInput onChange={onChange} required={true} label="Mobile Number" placeHolder="Enter Mobile number" value={patientDetail.mobileNumber} valueName="mobileNumber" />
        <CustomInput onChange={onChange} required={true} label="Problem" width="98%" placeHolder="Please describe your health issue here..." value={patientDetail.problem} valueName="problem" />
        <button style={{ cursor: "pointer", width: "40%", height: "45px", marginLeft: "5px", border: "none", fontSize: "25px", color: "#ffffff", backgroundColor: "#ff2f7e", borderRadius: "5px" }}>Book</button>
      </form>
    </div>
  );
}
export default Body