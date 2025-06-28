"use client"
import React,{useState} from 'react'

export default function UserInfor() {
    const [userName, setUserName] = useState("John Doe");
  return (
    <span>{userName}</span>
  )
}
