import React from 'react'

export default function SelectLangugages({name,id,defaultValue,lstData,onChange}) {
    return (
        <div className='relative'>
            <i class="fa-regular fa-circle-xmark absolute h-full my-auto left-1 text-white"/>
            <select className='pl-5 pr-3 py-1 font-medium text-white rounded-md bg-transparent box-border border mr-4 max-md:mr-2 max-md:text-xs'
                defaultValue={defaultValue}
                name={name}
                id={id}
                onChange={onChange}>
                {
                    lstData.map(({ label, code }) => (
                        <option
                            key={code}
                            value={code}>{label}</option>
                    ))
                }
            </select>
        </div>
    )
}
