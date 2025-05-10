import React, { useEffect } from 'react'
import AppRouter from './routing/AppRouter';
import './App.css';
import { fetchCurrentUser } from './store/slices/auth.slice';
import { useSelector, useDispatch } from 'react-redux';

export default function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    const unsubscribe = dispatch(fetchCurrentUser());
    return () => unsubscribe();
  }, []);
  const isLoading = useSelector((state) => state.authSlice.isLoading);
  return (
    <>
      {isLoading ? <div className="loading">Loading...</div> :
        <AppRouter />}
    </>
  )
}
