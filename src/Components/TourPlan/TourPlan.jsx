import React, { useState } from 'react'
import Tour from './Tour'
import data from '../data'

const TourPlan = () => {
    const [tours, setTours] = useState(data);

   // console.log("data=",data);
    function removetour(id){
        const newtours = tours.filter(tour => tour.id !== id);
        setTours(newtours); 
    }
    if(tours.length === 0){
        return(
            <div className='refresh'>
                <h2>No Tours left</h2>
                <button className='btn-white' onClick={() => setTours(data)}>
                    Refresh
                </button>
            </div>
        );
    }
  return (
    <div>
        <Tour tours={tours} removeTour={removetour}></Tour>
    </div>
  )
}

export default TourPlan
