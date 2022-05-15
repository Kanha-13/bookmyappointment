import axios from "axios"
export const getMyAppointments = async () => {
  try {
    const res = await axios.get('http://localhost:1312/appointments', { withCredentials: true })
    return res;
  } catch (error) {
    console.log(error)
  }
}
export const deleteMyAppointment = async (appId) => {
  try {
    const res = await axios.delete(`http://localhost:1312/appointment/${appId}`, { withCredentials: true })
    return res;
  } catch (error) {
    console.log(error)
  }
}
export const editMyAppointment = async (appId, data) => {
  try {
    const res = await axios.patch(`http://localhost:1312/appointment/${appId}`, data, { withCredentials: true })
    return res;
  } catch (error) {
    console.log(error)
  }
}