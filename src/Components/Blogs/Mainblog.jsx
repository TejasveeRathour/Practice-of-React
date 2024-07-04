import React, { useContext, useEffect } from 'react'
import { AppContext } from '../../Context/AppContext'
import { Route, Routes, useLocation, useSearchParams } from 'react-router-dom'
import BlogPage from '../../Pages/BlogPages/BlogPage';
import Home from '../../Pages/BlogPages/Home';
import CategoryPage from '../../Pages/BlogPages/CategoryPage';
import TagPage from '../../Pages/BlogPages/TagPage';

const Mainblog = () => {
  const {fetchBlogPosts} = useContext(AppContext);

  const [searchParams, setSearchParams] = useSearchParams();
  const location = useLocation();

  //Without Routes
  // useEffect( ()=>{
  //   fetchBlogPosts();
  // },[]);

  //With Routes
  useEffect( ()=>{
    const page = searchParams.get("page") ?? 1;

    if(location.pathname.includes("tags")){
      const tag = location.pathname.split("/").at(-1).replace("-"," ");
      fetchBlogPosts(Number(page),tag);
    }
    else if(location.pathname.includes("categories")){
      const category = location.pathname.split("/").at(-1).replace("-"," ");
      fetchBlogPosts(Number(page), null, category);
    }
    else{
      fetchBlogPosts(Number(page));
    }

  },[location.pathname, location.search]);

  return (
    //Without Routes
    // <div className='w-full h-full flex flex-col gap-y-1 justify-center items-center '>
    //   <Header />
    //   <Blogs />
    //   <Pagination /> 
    // </div>

    //With Routes
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/blog/:blogId' element={<BlogPage />} />
      <Route path='/tags/:tag' element={<TagPage />} />
      <Route path='/categories/:category' element={<CategoryPage />} />
    </Routes>
  )
}

export default Mainblog
