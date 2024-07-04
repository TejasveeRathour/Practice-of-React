import React from 'react'
import Header from '../../Components/Blogs/WithRoutes/Header'
import Blogs from '../../Components/Blogs/WithRoutes/Blogs'
import Pagination from '../../Components/Blogs/WithRoutes/Pagination'

const Home = () => {
  return (
    <div>
      <Header />
      <div>
        <Blogs />
        <Pagination />
      </div>
    </div>
  )
}

export default Home
