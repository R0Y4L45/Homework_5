import React from 'react'
import LogInCard from './components/LogInCard'
import { useLocation } from 'react-router-dom';


function LogIn() {
  const { state } = useLocation({});
  console.log(state);

  return (
    <div className='flex justify-center items-center h-screen'>
      <LogInCard />
    </div>
  )
}

export default LogIn