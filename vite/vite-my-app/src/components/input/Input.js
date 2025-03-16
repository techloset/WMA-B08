import React from 'react'

export default function Input({ type, name, placeholder }) {
  return (
    <input type={type} name={name} className="form-input" placeholder={placeholder} required data-form-input />
  )
}
