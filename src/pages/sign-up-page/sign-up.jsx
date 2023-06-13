import React, { useState } from 'react'
import { LANGUAGES } from '../../constants';
import { useTranslation } from 'react-i18next';
import Button from '../../components/ButtonComponent/Button';
import Input from '../../components/InputComponent/Input';
import { use } from 'i18next';
import InputSignIn from '../../components/InputComponent/InputSignIn';
import SelectLangugages from '../../components/SelectLanguageComponent/SelectLangugages';
import main from '../../script';
export default function SignUpPage() {
  const [email, setEmail] = useState("");
  const { t, i18n } = useTranslation()
  const onChangeLaguage = (e) => {
    i18n(e.target.value);
  }
  return (
    <div className="absolute w-full h-full bg-[url('/public/images/hero.jpg')] bg-no-repeat bg-cover bg-fixed">
      <div className="bg-gradient-to-t from-black  px-28 via-transparent to-black lg:bg-opacity-50 max-xl:px-0 w-full h-full">
        {/* Header */}
        <div className="flex px-12 py-6 w-full max-md:px-6">
          <span className='mr-auto'>
            <img
              src="/images/logo.png"
              className="h-10 max-md:h-6"
              alt="Logo" />
          </span>
          <span>
            <SelectLangugages defaultValue='vn'
              name="languages"
              id="languages"
              onChange={(e) => onChangeLaguage(e)}
              lstData={LANGUAGES} />
          </span>
          <span>
            <Button class={""} titleKey={'signIn'} />
          </span>
        </div>
        {/* Body */}
        <div className="text-center mx-auto my-40 w-4/5 max-md:my-9 max-md:w-11/12">
          <h1 className='text-white mb-5 font-extrabold text-5xl max-md:text-3xl'>{t('cardHeroTextTitle')}</h1>
          <h2 className='text-white mb-6 text-3xl max-md:text-lg'>{t('cardHeroTextSubtitle')}</h2>
          <form className='w-full'>
            <h2 className='text-white mb-6  text-xl max-md:text-lg'>{t('cardHeroTextSubtitle2')}</h2>
            <div className="flex items-start w-full justify-center max-md:block">
              <InputSignIn
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                type="email"
                label={t('emailSignIn')}
                id="email"
                textInvalid="Bạn phải nhập email"
                translation={t} />
              <button className="bg-red-600 py-2.5 px-4 text-white rounded-md hover:bg-red-700 transition font-semibold text-2xl max-md:text-sm " onClick={()=>main()}>{t('getStarted')} <i class="fa-solid fa-chevron-right"></i></button></div>
          </form>
        </div>
      </div>
    </div>
  )
}
