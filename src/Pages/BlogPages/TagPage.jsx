import React from 'react'
import Header from '../../Components/Blogs/WithRoutes/Header'
import { useLocation, useNavigate } from 'react-router-dom'
import Blogs from '../../Components/Blogs/WithRoutes/Blogs';
import Pagination from '../../Components/Blogs/WithRoutes/Pagination';

const TagPage = () => {
  const navigation = useNavigate();
  const location = useLocation();
  const tag = location.pathname.split("/").at(-1);

  return (
    <div>
      <Header />
      <div>
        <button
          onClick={()=> navigation(-1)}
        >
          Back
        </button>
        <h2>
          Blogs Tagged <span>#{tag}</span>
        </h2>
      </div>
      <Blogs />
      <Pagination />
    </div>
  )
}

export default TagPage
