import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ScrollTop from './utils/ScrollTop';
import NotFound from './Containers/NotFound';
import Home from './Containers/Home';
import Appointments from './Containers/AppointmentsList';
import ViewAppointments from './Containers/ViewAppointment';
import EditAppointments from './Containers/EditAppointments';
import BookAppointment from './Containers/BookAppointment';
const App = () => {
  return (
    <Router>
      <ScrollTop />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/appointment/book" element={<BookAppointment />} />
        <Route exact path="/appointments" element={<Appointments />} />
        <Route exact path="/appointment/:appointmentId" element={<ViewAppointments />} />
        <Route exact path="/appointments/:appointmentId/modify" element={<EditAppointments />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
    </Router>
  )
}
export default App;