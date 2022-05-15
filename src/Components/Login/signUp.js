import { useState } from "react"

const SignUp = ({ onSignUp, toSignIn }) => {
  const [patientDetail, setPatientDetail] = useState({
    firstName: "",
    lastName: "",
    mobileNumber: "",
    address: "",
    age: "",
    dob: "",
    email: "",
    password: ""

  });
  const onChange = (name, value) => {
    setPatientDetail({ ...patientDetail, [name]: value })
  }
  return (
    <div id="login-card-body">
      <div id="login-form-wrapper" style={{ borderRadius: "15px", width: "100%" }}>
        <p id='login-form-header' style={{ marginTop: "8px", marginBottom: "5px" }}>Sign Up</p>
        <p className="h3" style={{ margin: "5px" }}>Already an account? <a onClick={toSignIn} style={{ color: "black", cursor: "pointer" }}>Login in here</a></p>
        <form onSubmit={(e) => onSignUp(e, patientDetail)} id="login-form" style={{ height: "66vh", overflowX: "hidden", overflowY: "auto" }}>
          <p style={{ fontSize: "25px", fontWeight: "bold", margin: "5px" }}>Fill Patient's detail</p>
          <input style={{ marginTop: "5px", width: "85%" }} onChange={e => onChange("firstName", e.target.value)} value={patientDetail.firstName} placeholder='first name' />
          <input style={{ marginTop: "5px", width: "85%" }} onChange={e => onChange("lastName", e.target.value)} value={patientDetail.lastName} placeholder='last name' />
          <input style={{ marginTop: "5px", width: "85%" }} onChange={e => onChange("mobileNumber", e.target.value)} value={patientDetail.mobileNumber} placeholder='mobile number' />
          <input style={{ marginTop: "5px", width: "85%" }} onChange={e => onChange("age", e.target.value)} type="number" min="0" value={patientDetail.age} placeholder='age' />
          <input style={{ marginTop: "5px", width: "85%" }} onChange={e => onChange("address", e.target.value)} value={patientDetail.address} placeholder='address' />
          <input style={{ marginTop: "30px", width: "85%" }} onChange={e => onChange("dob", e.target.value)} type="date" value={patientDetail.dob} placeholder='Date of birth' />
          <input style={{ marginTop: "5px", width: "85%" }} onChange={e => onChange("email", e.target.value)} value={patientDetail.email} placeholder='email' />
          <input style={{ marginTop: "5px", width: "85%" }} onChange={e => onChange("password", e.target.value)} value={patientDetail.password} type="password" placeholder='password' />
          <button type='submit' style={{ margin: "25px 10px", height: "55px", padding: "10px" }}>Sign Up</button>
        </form>
      </div >
    </div >
  )
}
export default SignUp;