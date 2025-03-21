import React from 'react';
import { HiArrowNarrowRight } from 'react-icons/hi';
import { Link } from 'react-scroll';

const Home = () => {
  return (
    <div name='home' className='w-full h-screen bg-[#000000]'>
      {/* Container */}
      <div className='max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full '> 
        <p className='text-pink-600'>Hi, my name is</p>
        <h1 className='text-4xl sm:text-7xl font-bold text-[#ccd6f6]'>
          Yiğit Yıldırım
        </h1>
        <h2 className='text-4xl sm:text-7xl font-bold text-[#8892b0]'>
        I am currently studying Computer Engineering as a senior at Hacettepe University.
        </h2>
      
        <div>
        <Link to='about' smooth={true} duration={500}>
          <button className='text-white group border-2 px-6 py-3 my-2 flex items-center hover:bg-pink-600 hover:border-pink-600'>
           
            
                About Me
            
         
          <span className='group-hover:rotate-90 duration-300'>
              <HiArrowNarrowRight className='ml-3 ' />

            </span>
            
           
          </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
