const CustomInput = ({ onChange, required, width = "40%", label, placeHolder, min = "0", type = "text", value, valueName }) => {
  return (
    <div style={{ width: width, margin: "15px 5px", display: "inline-block" }}>
      <label style={{ fontSize: "25px", width: "100%", margin: "15px 5px" }}>{label}</label>
      <input onChange={(e) => onChange(valueName, e.target.value)} value={value} required={required} type={type} min={min} style={{ padding: "10px", fontSize: "25px", height: "25px", borderRadius: "7px", border: "1px solid black", width: "95%", marginTop: "8px" }} placeholder={placeHolder} />
    </div>
  )
}
export default CustomInput;