import axios from "axios"

export const signIn = async (email, password) => {
  const res = await axios.post('http://localhost:1312/patient/signIn', { email: email, password: password }, { withCredentials: true })
  return res;
}

export const signUp = async (patientDetails) => {
  const res = await axios.post('http://localhost:1312/patient/signUp', patientDetails)
  return res;
}