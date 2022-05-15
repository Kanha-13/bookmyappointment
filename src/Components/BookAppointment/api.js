import axios from "axios"
export const bookMyAppointment = async (data) => {
  try {
    const res = await axios.post('https://bookmyappointment1.herokuapp.com/appointment', data, {
      withCredentials: true
    })
    return res;
  } catch (error) {
    console.log(error)
  }
}