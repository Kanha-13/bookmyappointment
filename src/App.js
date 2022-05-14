import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ScrollTop from './utils/ScrollTop';
import NotFound from './Containers/NotFound';
const App = () => {
  return (
    <Router>
      <ScrollTop />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/appointments" element={<Home />} />
        <Route exact path="/appointment/:appointmentId" element={<Home />} />
        <Route exact path="/appointments/modify" element={<Home />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
    </Router>
  )
}
export default App;