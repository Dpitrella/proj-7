import React from "react"
import './Collapse.css'
function Collapse({ text, title, Equip }) {
  return (
    <details className="about-container">
      <summary className="about-title">
        {title} <i className="fa-solid fa-chevron-down"></i>
      </summary>

      <p className="about-text">
        {text}
      </p>
    </details>
  )

}
export default Collapse 