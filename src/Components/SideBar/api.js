import axios from "axios"

export const logOut = async () => {
  const res = await axios.get('http://localhost:1312/patient/logout', { withCredentials: true })
  localStorage.setItem("patientDetails", undefined)
  return res
}
