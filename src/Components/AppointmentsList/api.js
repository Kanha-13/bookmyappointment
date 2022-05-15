import axios from "axios"
export const getMyAppointments = async (data) => {
  try {
    const res = await axios.get('http://localhost:1312/appointments')
    return res;
  } catch (error) {
    console.log(error)
  }
}