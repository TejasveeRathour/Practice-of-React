import React, { useContext } from 'react'
import { AppContext } from '../../Context/AppContext'
import Spinner from '../Gif/Spinner';

const Blogs = () => {

    const {posts, loading} = useContext(AppContext);
  return (
    <div className='w-11/12 max-w-[670px] h-screen py-8 felx flex-col gap-y-7 mt-[66px] mb-[70px] justify-center items-center'>
        {
            loading ? 
            (<Spinner />) : 
            (
                posts.length === 0 ? (
                <div>
                  <p>No Post found.</p>
                </div>
              ) : 
              (posts.map( (post) =>(
                <div key={post.id} className=''>
                  <p className='font-bold text-lg'>{post.title}</p>
                  <p className='text-sm mt-[4px]'>
                    By <span className=' italic'>{post.author}</span> on <span className='underline font-bold'>{post.category}</span>
                  </p>
                  <p className='text-sm mt-[4px]'>Post on{post.date}</p>
                  <p className=' text-md mt-[14px]'>{post.content}</p>
                  <div className='flex gap-x-2'>
                    {post.tags.map( (tag, index) =>{
                      return <span key={index} className='text-blue-700 underline font-bold text-xs mt-[5px]'>{`#${tag}`}</span>
                    })}
                  </div> 
                </div>
              ) ))
            )
        }
      
    </div>
  )
}

export default Blogs
