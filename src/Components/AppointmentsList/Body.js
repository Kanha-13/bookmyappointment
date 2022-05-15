import { useEffect, useState } from "react";
import { editMyAppointment, getMyAppointments } from "./api";
import AppointmentCard from "./AppointmentCard";
import EditApp from "./EditApp";

const Body = () => {
  const [myAppointments, setMyAppointments] = useState([])
  const [selectedApp, setSelectedApp] = useState({})
  const [isEditOpen, setIsEditOpen] = useState(false)
  const getAllAppointments = async () => {
    try {
      const res = await getMyAppointments();
      setMyAppointments(res.data)
    } catch (error) {
      console.log(error)
    }
  }
  const [appId, setAppId] = useState("")
  const openEdit = (appId = "") => {
    if (appId !== "") {
      const app = myAppointments.filter(ap => ap.app_data._id === appId)
      setSelectedApp(app[0].app_data)
    }
    setAppId(appId)
    setIsEditOpen(prev => !prev)
  }
  const editApp = async (newDetails) => {
    const res = await editMyAppointment(appId, newDetails)
    if (res.status === 201) {
      setAppId("")
      setIsEditOpen(prev => !prev)
      getAllAppointments()
    }
  }
  useEffect(() => {
    getAllAppointments()
  }, [])
  return (
    <div style={{ padding: "15px", backgroundColor: "white", width: "95%", height: "83%", borderRadius: "10px" }}>
      <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "space-evenly", width: "100%", height: "100%", overflow: 'auto' }}>
        {
          myAppointments.map((appointment, index) => <AppointmentCard key={index} onEdit={openEdit} onDelete={getAllAppointments} details={appointment} />)
        }
      </div>
      {
        isEditOpen && <EditApp isOpen={isEditOpen} onClose={openEdit} a_details={selectedApp} onSubmit={editApp} />
      }
    </div>
  );
}
export default Body;