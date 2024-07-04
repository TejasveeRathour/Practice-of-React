import React from 'react'
import { useNavigate } from 'react-router-dom';

const About = () => {

    const navigate = useNavigate();

    function clickHandler(){
        navigate('/support');
    }
  return (
    <div>
      <h1>This is About Page.</h1>
      
      <button onClick={clickHandler} className='border-1 bg-blue-950 text-white p-4 m-5 rounded-md hover:bg-blue-500 transition-all duration-300 '>Move to Support Page.</button>
    
    </div>
  )
}

export default About
