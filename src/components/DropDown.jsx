import React, {
  useRef,
  useState
} from "react";
import {
  useDetectOutsideClick
} from "../shared/useDetectOutsideClick";
import AutoComplete from "./AutoComplete";
import '../styles/dropdown.module.css'

const DropDown = () => {
  const dropdownRef = useRef(null);
  const [label, setLabel] = useState('All Sites')
  const [isActive, setIsActive] = useDetectOutsideClick(dropdownRef, false);
  const onClick = () => setIsActive(!isActive);
  const checkedItem = (event) => {
    if (event)
      setLabel(event + ' Sites')
    else setLabel('All Sites')
  }
  return (
        <div className="container">
          <div className="menu-container">
            <button onClick={onClick} className={`menu-trigger ${isActive ? "focus-drop" : "unFocus-drop" }` }>
              <i className="fas fa-link fa-15x brightColor"></i>
              <p className="dropdown-text">
                <span className="brightColor">Sites</span>
                <span>{label}</span>
              </p>
              <i className="fas fa-caret-down fa-2x"></i>
            </button>
            <nav ref={dropdownRef} className={`menu ${isActive ? "active" : "inactive" }`}>
              <AutoComplete checkedItem={checkedItem}></AutoComplete>
            </nav>
          </div>
        </div>

  )
}
export default DropDown;