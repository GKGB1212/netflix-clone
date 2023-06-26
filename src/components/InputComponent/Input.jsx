import React from "react";
import "./Input.styles.css"

const Input = ({ value, onChange, onBlur, type = String, label, id, textInvalid }) => {
    return (
        <div className="relative mb-5">
            <input type={type}
                value={value}
                onChange={onChange}
                onBlur={onBlur}
                id={id}
                placeholder=""
                className="wrapper-input"
                style={{ "--textInvalid": textInvalid }} />
            <label
                htmlFor={id}
                className="input-label">{label}</label>
            {
                textInvalid != null && textInvalid != ""
                    ? (
                        <p
                            className=" w-full text-sm mt-2"
                            style={{ color: "#e87c03" }}>
                            {textInvalid}
                        </p>
                    ) : null
            }
        </div>
    )
}

export default Input;