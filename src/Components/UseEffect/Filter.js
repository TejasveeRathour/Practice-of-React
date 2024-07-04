import React from 'react'

const Filter = ({filterData, category, setCategory}) => {

  function filterHandler(title){
    setCategory(title);
  }

  return (
    <div className='w-11/12 flex flex-wrap max-w-max space-x-4 gap-y-4 mx-auto py-4 justify-center'>
      {
        filterData.map( (data) =>{
            return(
                <button className={`bg-black text-white text-lg px-2 py-1 rounded-md 
                font-medium hover:bg-opacity-50 border-2 transition-all duration-200
                ${category === data.title ? 
                  'bg-opacity-60 border-white' : 
                  'bg-opacity-40 border-transparent'}
                `}
                key = {data.id}
                onClick={() => filterHandler(data.title)}>
                    {data.title}
                </button>
            )
        })
      }
    </div>
  )
}

export default Filter