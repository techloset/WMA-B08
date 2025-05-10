import React from 'react'
import Header from '../../components/header/Header'
import { Link } from 'react-router'
import { useDispatch, useSelector } from 'react-redux';
import { doLogout } from '../../store/slices/auth.slice';

export default function Home({children}) {
  const userName = useSelector((state) => state.authSlice?.user?.fullName);
  const dispatch = useDispatch();
  const logout = ()=>{
    dispatch(doLogout())
  }
  return (
    <>
    <h1>Home Page - {userName}</h1>
    <Link to="/login">Login</Link>
    <button onClick={logout}>logout</button>
    {children}
    </>
  )
}
