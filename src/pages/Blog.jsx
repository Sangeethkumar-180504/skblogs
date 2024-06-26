import React from 'react'
import Blogpage from '../components/Blogpage'


const Blog = () => {
  return (
    <div>
      <div className='py-40 bg-black text-center text-white px-40'>
        <h2 className='text-5xl lg:text-7xl leading-snug font-bold mb-5'>Blog Page</h2>
      </div>

      <div className='max-w-7xl mx-auto'>
        <Blogpage/>
      </div>
    </div>
  )
}

export default Blog