import axios from "axios"
export const getPatientDetails = async () => {
  try {
    axios.defaults.withCredentials = true
    const res = await axios.get('http://localhost:1312/patient', { withCredentials: true })
    return res
  } catch (error) {
    return error
  }
}