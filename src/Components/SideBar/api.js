import axios from "axios"

export const logOut = async () => {
  localStorage.setItem("patientDetails", undefined)
  const res = await axios.get('https://bookmyappointment1.herokuapp.com/patient/logout', { withCredentials: true })
  return res
}
