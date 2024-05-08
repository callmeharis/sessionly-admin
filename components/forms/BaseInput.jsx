import React from 'react'

export default function BaseInput({ id, name, type, placeholder, onChange, htmlFor, label }) {
    return (
        <>
            <input
                id={id}
                name={name}
                type={type}
                className="peer h-10 w-full border-b-2 border-gray-300 text-gray-900 placeholder-transparent focus:outline-none focus:border-indigo-600"
                placeholder={placeholder}
                onChange={onChange}
            />
            <label
                htmlFor={htmlFor}
                className="absolute left-0 -top-3.5 text-gray-600 text-sm transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-2 peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm"
            >
                {label}
            </label>
        </>
    )
}
