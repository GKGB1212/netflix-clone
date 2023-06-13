import React from "react";
import "./Input.styles.css"
import { useTranslation } from "react-i18next";

const InputSignIn = ({ value, onChange, type = String, label, id, textInvalid, translation }) => {
    return (
        <div className="container-input relative mr-3 w-5/12 mb-4 max-md:w-5/6 max-md:mx-auto">
            <input type={type}
                value={value}
                onChange={onChange}
                id={id}
                placeholder=""
                className="wrapper-input wrapper-input-signup " />
            <label
                htmlFor={id}
                className="input-label">{label}</label>
            <p className=" text-start text-red-600 mt-1 max-md:text-sm">
                <i class="fa-regular fa-circle-xmark" /> {translation('emailSignInInvalid')}</p>
        </div>
    )
}

export default InputSignIn;