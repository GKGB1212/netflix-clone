import React from "react";
import "./Input.styles.css"

const Input = ({ value, onChange, type = String, label, id, textInvalid }) => {
    return (
        <div className="relative mb-5">
            <input type={type}
                value={value}
                onChange={onChange}
                id={id}
                placeholder=""
                className="wrapper-input"
                style={{ "--textInvalid": textInvalid }} />
            <label
                htmlFor={id}
                className="input-label">{label}</label>
            <p
                className=" w-full text-sm mt-2" style={{color:"#e87c03"}}>{textInvalid}</p>
        </div>
    )
}

export default Input;