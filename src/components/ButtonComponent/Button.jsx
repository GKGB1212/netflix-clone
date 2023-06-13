import React from 'react'
import { useTranslation } from 'react-i18next'

export default function Button({ titleKey, onClick }) {
    const {t}=useTranslation();
    return (
        <button className="bg-red-600 py-1 px-3 text-white rounded-md hover:bg-red-700 transition font-medium max-md:text-sm ">{t(titleKey)}</button>
    )
}
