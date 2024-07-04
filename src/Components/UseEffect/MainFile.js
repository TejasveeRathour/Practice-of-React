import React, { useEffect, useState } from 'react'
import {filterData, apiUrl} from "../data(UseEffect)";
import Navbar from './Navbar';
import Filter from './Filter';
import Cards from './Cards';
import { toast } from 'react-toastify';
import Spinner from './Spinner'


const MainFile = () => {

  const [courses, setCourses] = useState(null);
  const[loading, setLoading] = useState(true);
  const[category, setCategory] = useState(filterData[0].title);

  async function fetchData(){
    setLoading(true);
    try{
      let res = await fetch(apiUrl);
      let output = await res.json();
      //save data in courses using setcourses
      setCourses(output.data);
    }
    catch(error){
      toast.error("Something went wrong");
    }
    setLoading(false);
  }

  useEffect( () =>{
    fetchData();
  },[])

  return (
    <div className= "min-h-screen flex flex-col bg-blue-900">
      <div>
        <Navbar />
      </div>

      <div className='bg-blue-900  '>
        <div>
          <Filter filterData = {filterData} 
                  category={category} 
                  setCategory={setCategory} />
        </div>

        <div className='w-11/12 max-w-[1200px] mx-auto flex flex-wrap justify-center items-center min-h-[50vh]' >
          { 
            loading ? (<Spinner />) : (<Cards courses={courses} category={category} />)
          }
        </div>
      </div>

    </div>
  )
};

export default MainFile;
