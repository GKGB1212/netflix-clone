import React, { useState } from "react"
import Input from "../../components/InputComponent/Input";
import { FcGoogle } from "react-icons/fc";
import { FaFacebook, FaGithub } from "react-icons/fa";
//import { withTranslate } from "react-redux-multilingual";
import { useTranslation } from "react-i18next";
import { signInWithGoogle, signInWithFacebook, signInWithGithub } from "../../../src/firebase/config"
const Auth = () => {
    const { i18n, t } = useTranslation();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
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
                        <Input type={"email"}
                            label={t('enterEmail')}
                            id={"email"}
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            textInvalid={t('emailInvalid')} />
                        <Input
                            type={"password"}
                            label={t('password')}
                            id={"password"}
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            textInvalid={t('passwordInvalid')} />
                        <button className="bg-red-600 py-3 text-white w-full rounded-md hover:bg-red-700 transition">{t('signIn')}</button>
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