import './body.css'
const Body = ({ onOpen }) => {
  return (
    <div id="home-body">
      <div id="body-left">
        <p className="home-body-title">Best doctors</p>
        <p className="home-body-title">at the best hospitals.</p>
        <p className="home-body-title"> Search and book now.</p>
        <p>Top Speciality</p>
      </div>
      <div id="body-right">
        <button onClick={onOpen}>Book Now</button>
      </div>
    </div>
  )
}
export default Body;