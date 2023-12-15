import React from 'react'
import styles from 'Inputbox.module.css'
function Inputbox({
    type,
    placeholder,
    padding,
    fontSize,
    fontWeight,
    width,
    min,
    max,
    value,
    onChange,

}) 

{
    
    const InputStyle = {
        padding: padding || "8px",
        width: width || "100%",
        borderRadius: "4px",
        border: "0.5px solid gray",
        fontSize: fontSize,
        fontWeight: fontWeight,
      };
      
      const handleChange = (e) => {
        const newValue = e.target.value;
        onChange(newValue);
      };
  return (
    <div className={styles.Main}>
           <input
        type={type}
        placeholder={placeholder}
        style={InputStyle}
        min={min}
        max={max}
        value={value}
        onChange={handleChange}
      />
    </div>
  )
}

export default Inputbox