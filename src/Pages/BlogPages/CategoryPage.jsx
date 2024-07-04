import React from 'react'
import Header from '../../Components/Blogs/WithRoutes/Header'
import { useLocation, useNavigate } from 'react-router-dom'
import Blogs from '../../Components/Blogs/WithRoutes/Blogs';
import Pagination from '../../Components/Blogs/WithRoutes/Pagination';

const CategoryPage = () => {
  const navigation = useNavigate();
  const location = useLocation();
  const category = location.pathname.split("/").at(-1);
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
          Blogs On <span>#{category}</span>
        </h2>
      </div>
      <Blogs />
      <Pagination />
    </div>
  )
}

export default CategoryPage
