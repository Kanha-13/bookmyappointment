import axios from "axios"
export const bookMyAppointment = async (data) => {
  try {
    const res = await axios.post('http://localhost:1312/appointment', data)
    return res;
  } catch (error) {
    console.log(error)
  }
}