import React, { useEffect, useState } from 'react'
import BlogCards from './BlogCards';
import Pagination from './Pagination';
import CategorySelection from './CategorySelection';
import SideBar from './SideBar';

const Blogpage = () => {
    const [blogs, setBlogs] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const pagesize = 12
    const [selectedCategory, setSelectedCategory] = useState(null);
    const [activeCategory, setActiveCategory] = useState(null);

    useEffect(() => {
        async function fetchBlogs() {
            let url = `http://localhost:5000/blogs?page=${currentPage}&limit=${pagesize}`;

            if(selectedCategory){
                url += `&category=${selectedCategory}`;
            }

            const response = await fetch(url);
            const data = await response.json();
            setBlogs(data);
        }

        fetchBlogs();
    }, [currentPage, pagesize, selectedCategory])

    const handlePageChange = (pageNumber) => {
        setCurrentPage(pageNumber);
    }

    const handleCategoryChange = (category) => {
        setSelectedCategory(category);
        setCurrentPage(1);
        setActiveCategory(category);
    }

  return (
    <div>
        <div>
            <CategorySelection onSelectCategory={handleCategoryChange} selectedCategory={selectedCategory} activeCategory={activeCategory}/>
        </div>



        <div className='flex flex-col lg:flex-row gap-12'>
            <BlogCards blogs={blogs} currentPage={currentPage} selectedCategory={selectedCategory} pagesize={pagesize}/>


            <div>
                <SideBar/>
            </div>
        </div>



        <div>
            <Pagination onPageChange={handlePageChange}  currentPage={currentPage} blogs={blogs} pagesize={pagesize}/>
        </div>


    </div>
  )
}

export default Blogpage