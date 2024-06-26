import React from 'react'
import { useLoaderData } from 'react-router-dom'
import { FaClock, FaUser } from "react-icons/fa6";
import SideBar from '../components/SideBar';


const SingleBlog = () => {
    const data = useLoaderData();
    const {title, image, category, author, published_date, reading_time, content} = data[0];
  return (
    <div>
        <div className='py-40 bg-black text-center text-white px-40'>
        <h2 className='text-5xl lg:text-7xl leading-snug font-bold mb-5'>Single Blog Page</h2>
      </div>

     
     <div className='max-w-7xl mx-auto my-12 flex flex-col md:flex-row gap-12'>
        <div className='lg:w-3/4 mx-auto'>
        <div>
            <img src={image} alt='' className='w-full mx-auto rounded'></img>
        </div>
        <h2 className='text-3xl mt-8 font-bold mb-4 text-blue-500 cursor-pointer'>{title}</h2>
        <p className='mb-3 text-gray-600'><FaUser className='inline-flex items-center mr-2'/> {author} | {published_date}</p>
        <p className='mb-3 text-gray-600'><FaClock className='inline-flex items-center mr-2'/>{reading_time}</p>
        <p className='text-base text-gray-500 mb-6'>{content}</p>
        <div className='text-base text-gray-500'>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Amet odio, eaque eum voluptatum officia nulla explicabo commodi sit quo maxime laborum voluptates doloremque? Commodi eveniet sunt hic optio repudiandae perspiciatis!</p><br></br>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid cum quas magni atque quisquam. Nulla, ex. Quisquam, voluptas! Harum soluta voluptas reprehenderit incidunt maxime fugit omnis aperiam ea dolore? Qui.</p>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Placeat aperiam distinctio eveniet dolorum doloribus exercitationem asperiores repudiandae, obcaecati consectetur magni odit aspernatur, aut deleniti quam nulla similique culpa non deserunt.</p>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Amet odio, eaque eum voluptatum officia nulla explicabo commodi sit quo maxime laborum voluptates doloremque? Commodi eveniet sunt hic optio repudiandae perspiciatis!</p><br></br>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid cum quas magni atque quisquam. Nulla, ex. Quisquam, voluptas! Harum soluta voluptas reprehenderit incidunt maxime fugit omnis aperiam ea dolore? Qui.</p>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Placeat aperiam distinctio eveniet dolorum doloribus exercitationem asperiores repudiandae, obcaecati consectetur magni odit aspernatur, aut deleniti quam nulla similique culpa non deserunt.</p>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Amet odio, eaque eum voluptatum officia nulla explicabo commodi sit quo maxime laborum voluptates doloremque? Commodi eveniet sunt hic optio repudiandae perspiciatis!</p><br></br>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid cum quas magni atque quisquam. Nulla, ex. Quisquam, voluptas! Harum soluta voluptas reprehenderit incidunt maxime fugit omnis aperiam ea dolore? Qui.</p>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Placeat aperiam distinctio eveniet dolorum doloribus exercitationem asperiores repudiandae, obcaecati consectetur magni odit aspernatur, aut deleniti quam nulla similique culpa non deserunt.</p><br/>

        </div>

        </div>

        <div className='lg:w-1/2'>
            <SideBar/>
        </div>

     </div>
    </div>
  )
}

export default SingleBlog