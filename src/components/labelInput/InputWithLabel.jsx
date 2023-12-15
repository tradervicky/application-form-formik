import React from 'react'
import Inputbox from '../inputbox/Inputbox'
import styles from './InputWithLabel.module.css'
function InputWithLabel({htmlFor, labelText,star, padding, width, type, placeholder, min, max, value, handleChange, fontSize, fontWeight  }) {
    const customLabelStyle = {
        fontSize: fontSize,
        fontWeight: fontWeight,
        color: color,
    }

  return (
    <div className={styles.Main}>
        <div className={styles.Label}>
            <label htmlFor={htmlFor} style={customLabelStyle}>{labelText} <span style={{ color: "red" }}>{star}</span></label>
        </div>
        <div className={styles.Input}>
            <Inputbox
            padding={padding}
            width={width}
             type={type}
             placeholder={placeholder}
             min={min}
             max={max}
             value={value}
             onChange={handleChange}
             fontSize={fontSize}
             fontWeight={fontWeight}
            />
        </div>
        
    </div>
  )
}

export default InputWithLabel