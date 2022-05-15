const CustomDropDown = ({ width = "40%", onChange, required, options, label, placeHolder, min = "0", type = "text", value = "", valueName }) => {
  return (
    <div style={{ width: width, margin: "15px 5px", display: "inline-block" }}>
      <label style={{ fontSize: "25px", width: "100%", margin: "15px 5px" }}>{label}</label>
      <select onChange={(e) => onChange(valueName, e.target.value)} defaultValue={value} required={required} style={{
        padding: "10px", fontSize: "20px", height: "50px",
        borderRadius: "7px", border: "1px solid black", width: "100%", marginTop: "8px"
      }}>
        <option value="">Select doctor</option>
        {options.map((option, index) => <option key={index} value={option.name.toString()}>{option.name}</option>)}
      </select>
    </div>
  )
}
export default CustomDropDown;