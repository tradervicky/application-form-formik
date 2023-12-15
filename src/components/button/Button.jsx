import React from 'react'
import styles from './Button.module.css';
function Button({label, textColor, backgroundColor,fontSize,fontWeight, type ,borderRadius, border,outline}) {
    const customStyle = {
        color: textColor,
        backgroundColor: backgroundColor,
        fontsize: fontSize,
        fontWeight : fontWeight,
        type : type, 
        cursor : "pointer",
        borderRadius : borderRadius || "4px",
        border:border || "none",
        outline : outline || "none",

    }
    const handleClick = ()=>{

    }
  return (
    <div className={styles.Main}>
        <button onClick={handleClick}>{label}</button>
    </div>
  )
}

export default Button