import axios from "axios"

export const signIn = async (email, password) => {
  const res = await axios.post('https://bookmyappointment1.herokuapp.com/patient/signIn', { email: email, password: password }, { withCredentials: true })
  return res;
}

export const signUp = async (patientDetails) => {
  const res = await axios.post('https://bookmyappointment1.herokuapp.com/patient/signUp', patientDetails)
  return res;
}