import React from 'react';

const About = () => {
  return (
    <div name='about' className='w-full h-screen bg-[#98EECC] text-gray-black'>
      <div className='flex flex-col justify-center items-center w-full h-full'>
        <div className='max-w-[1000px] w-full grid grid-cols-2 gap-8'>
          <div className='sm:text-right pb-8 pl-4'>
            <p className='text-4xl font-bold inline border-b-4 border-pink-600'>
              About
            </p>
          </div>
          <div></div>
          </div>
          <div className='max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4'>
            <div className='sm:text-right text-4xl font-bold'>
              <p>Hi. I'm Yiğit Yıldırım, nice to meet you. Please take a look around.</p>
            </div>
            <div>
              <p>My technical skills include proficiency in programming languages such as Java, Python, C/C++, React, JavaScript, and web development. I have also completed personal projects such as a Unity 2D Platformer Melee Combat Game and a React To-Do Website, which showcase my abilities and interest in programming and game development.
I am passionate about learning and gaining practical experience in the field of computer science.</p>  
            </div>
          </div>
      </div>
    </div>
  );
};

export default About;
