import axios from "axios"
export const getMyAppointments = async () => {
  try {
    const res = await axios.get('https://bookmyappointment1.herokuapp.com/appointments', { withCredentials: true })
    return res;
  } catch (error) {
    console.log(error)
  }
}
export const deleteMyAppointment = async (appId) => {
  try {
    const res = await axios.delete(`https://bookmyappointment1.herokuapp.com/appointment/${appId}`, { withCredentials: true })
    return res;
  } catch (error) {
    console.log(error)
  }
}
export const editMyAppointment = async (appId, data) => {
  try {
    const res = await axios.patch(`https://bookmyappointment1.herokuapp.com/appointment/${appId}`, data, { withCredentials: true })
    return res;
  } catch (error) {
    console.log(error)
  }
}