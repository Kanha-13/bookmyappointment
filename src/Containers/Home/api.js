import axios from "axios"
export const getPatientDetails = async () => {
  try {
    axios.defaults.withCredentials = true
    const res = await axios.get('https://bookmyappointment1.herokuapp.com/patient', { withCredentials: true })
    return res
  } catch (error) {
    return error
  }
}