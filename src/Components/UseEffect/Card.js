import React from 'react'
import { FcLike, FcLikePlaceholder } from 'react-icons/fc'
import { toast } from 'react-toastify';

const Card = ({course, likedCourses, setlikedCourses}) => {

    function clickHandler(){
        if(likedCourses.includes(course.id)){
            //pahle se like hua pda hai
            setlikedCourses( (prev) => prev.filter( (cid)=> (cid !== course.id) ) );
            toast.warning("like removed");
        }
        else{
            //phle se like nhi hai
            if(likedCourses.length === 0){
                setlikedCourses([course.id]);
            }
            else{
                setlikedCourses( (prev) => [...prev, course.id]);
            }
            toast.success("Liked Successfully");
        }
    }

  return (
    <div className='w-[300px] bg-blue-950 bg-opacity-80 rounded-md overflow-hidden '>
        <div className='relative '>
            <img src={course.image.url} alt=''></img>

            <div className='w-[40px] h-[40px] bg-white rounded-full absolute right-2 bottom-[-12px] grid place-items-center '>
                <button onClick={clickHandler}>
                    {
                        likedCourses.includes(course.id) ? 
                        (<FcLike fontSize="1.75rem" />) :
                        (<FcLikePlaceholder fontSize="1.75rem" />)
                    }
                </button>
            </div>
        </div>
        
        <div className='p-4 text-left '>
            <p className='text-white font-semibold text-lg leading-6 '>{course.title}</p>
            <p className='mt-2 text-white '>
                {
                    course.description.length > 100?
                    (course.description.substr(0,100)) + "..." :
                    (course.description)
                }
            </p>
        </div>
      
    </div>
  )
}

export default Card;
