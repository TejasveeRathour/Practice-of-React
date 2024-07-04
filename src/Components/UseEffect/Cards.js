import React, { useState } from 'react'
import Card from './Card';

const Cards = ({courses, category}) => {

    const [likedCourses, setlikedCourses] = useState([]);

    //returns a list of all courses received from the api response
    function getCourses(){
        if(category === "All"){
            let allCourses =  [];
            Object.values(courses).forEach( courseCategory =>{
                courseCategory.forEach(course => {
                    allCourses.push(course);
                })
            })
            return allCourses;
        }
        else{
            return courses[category];
        }
    }

  return (
    
    <div className='flex flex-wrap justify-center gap-4 mb-4 '>
        {
            getCourses().map( (course) =>{
                return  <Card key = {course.id} 
                            course = {course} 
                            likedCourses = {likedCourses}
                            setlikedCourses = {setlikedCourses}/>
            })
        }
      
    </div>
  )
}

export default Cards
