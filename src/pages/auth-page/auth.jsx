import React, { useState } from "react"
import Input from "../../components/InputComponent/Input";
import { FcGoogle } from "react-icons/fc";
import { FaFacebook, FaGithub } from "react-icons/fa";
//import { withTranslate } from "react-redux-multilingual";
import { useTranslation } from "react-i18next";
import { signInWithGoogle, signInWithFacebook, signInWithGithub } from "../../../src/firebase/config";
import { isEmail, isPhoneNumberVN, isPasswordValid } from "../../common/helper";
import { useDispatch, useSelector } from "react-redux";
import { signInWithEmail } from "../../redux/user/user.actions";
const Auth = () => {
    const { loading } = useSelector((state) => state.user);
    const dispatch = useDispatch();
    const { i18n, t } = useTranslation();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [textInvalidEmail, setTextInvalidEmail] = useState('');
    const [textInvalidPassword, setTextInvalidPassword] = useState('');
    function signIn() {
        if (textInvalidEmail.length > 0 || textInvalidPassword.length > 0) {
            alert("omw")
            return
        } else {
            dispatch(signInWithEmail(email, password));
        }
    }
    const handleOnBlurEmail = () => {
        if (email === ""
            || !isEmail(email)) {
            setTextInvalidEmail(t('emailInvalid'));
            return;
        }
        setTextInvalidEmail('');
    }
    const handleOnBlurPassword = () => {
        // if (password === ""
        //     || isPasswordValid(password)) {
        //         alert("fffffffff")
        //     setTextInvalidPassword(t('passwordInvalid'));
        //     return;
        // }
        setTextInvalidPassword('');
    }
    return (
        <div className="relative w-full bg-[url('/public/images/hero.jpg')] bg-no-repeat bg-center bg-cover" style={{ height: "100vh" }}>
            <div className="bg-black w-full h-full lg:bg-opacity-50">
                <nav className="px-12 py-5">
                    <img src="/images/logo.png"
                        className="h-12"
                        alt="Logo" />
                </nav>
                <div className="flex justify-center">
                    <div className="bg-black bg-opacity-70 px-16 py-16 self-center mt-2 lg:w-2/5 lg:max-w-md rounded-md w-full">
                        <h2
                            className="
                            text-white
                            mb-8
                            font-semibold
                            text-4xl
                            pt-8">
                            Sign In
                        </h2>
                        <div className="">
                            Sorry, we can't find an account with this email address. Please try again or create a new account.
                        </div>
                        <Input type={"email"}
                            label={t('enterEmail')}
                            id={"email"}
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            onBlur={() => handleOnBlurEmail()}
                            textInvalid={textInvalidEmail} />
                        <Input
                            type={"password"}
                            label={t('password')}
                            id={"password"}
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            onBlur={() => handleOnBlurPassword()}
                            textInvalid={textInvalidPassword} />
                        <button className="bg-red-600 py-3 text-white w-full rounded-md hover:bg-red-700 transition disabled:bg-red-900 disabled:opacity-80" disabled={loading} onClick={() => signIn()}>{t('signIn')}</button>
                        <div
                            className="
                                flex
                                flex-row
                                items-center
                                gap-4
                                mt-8
                                justify-center
                                text-white">
                            <div
                                onClick={() => signInWithGoogle()}
                                className="
                                    w-10
                                    h-10
                                    bg-white
                                    rounded-full
                                    flex
                                    items-center
                                    justify-center
                                    cursor-pointer
                                    hover:opacity-80
                                    transition">
                                <FcGoogle size={30} />
                            </div>
                            <div
                                onClick={() => signInWithFacebook()}
                                className="
                                    w-10
                                    h-10
                                    bg-white
                                    rounded-full
                                    flex
                                    items-center
                                    justify-center
                                    cursor-pointer
                                    hover:opacity-80
                                    transition">
                                <FaFacebook
                                    size={35}
                                    className="text-blue-900" />
                            </div>
                            <div
                                onClick={() => signInWithGithub()}
                                className="
                                    w-10
                                    h-10
                                    bg-white
                                    rounded-full
                                    flex
                                    items-center
                                    justify-center
                                    cursor-pointer
                                    hover:opacity-80
                                    transition">
                                <FaGithub size={35} className="text-gray-800" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Auth;