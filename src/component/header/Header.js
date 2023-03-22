
import React, {  useEffect, useState } from 'react'
import { Link, NavLink } from 'react-router-dom'

import './header.css'

import box from '../../images/box1.png'

import line from '../../images/Lines.png'


const Header = () => {

 



  const [isMenuOpen, setIsMenuOpen] = useState(false)
  
  
  const menu = 
    <>
  <li>
              <NavLink
                to='/home'
                aria-label='Home'
                title='Home'
                className={({ isActive }) =>
                  isActive
                    ? 'font-normal track  tracking-wide capitalize text-[#59DCD3]  transition-colors duration-200 hover:text-deep-purple-accent-400'
                    : ' untrack  '
                }
              >
                HOME
              </NavLink>
      </li>

      <li>
              <NavLink
                to='/'
                aria-label='Shows'
                title='Home'
                className={({ isActive }) =>
                  isActive
                    ? 'font-normal tracking-wide text-[#59DCD3]  capitalize transition-colors duration-200 hover:text-deep-purple-accent-400'
                    : ' untrack  '
                }
        >
          
          ABOUT
              </NavLink>
      </li>

      <li>
              <NavLink
                to='/'
                aria-label='blog'
                title='Home'
                className={({ isActive }) =>
                  isActive
                    ? 'font-normal  tracking-wide capitalize text-[#59DCD3]  transition-colors duration-200 hover:text-deep-purple-accent-400'
                    : ' untrack  '
                }
              >
                COURSES
              </NavLink>
      </li>
      <li>
              <NavLink
                to='/'
                aria-label='blog'
                title='Home'
                className={({ isActive }) =>
                  isActive
                    ? 'font-normal  tracking-wide capitalize text-[#59DCD3]  transition-colors duration-200 hover:text-deep-purple-accent-400'
                    : ' untrack  '
                }
        >
          BLOG
              </NavLink>
      </li>
   

        


    </>
    
  






   







  return (
    <>
      

    <div className=' bg-[#181818] '>
      <div className='py-10 px-[50px]'>
        <div className='relative flex items-center justify-between '>
        <Link
            to='/'
            aria-label='proReader'
            title='proReader'
            className='inline-flex items-center'
          >
                       <img className='h-[20px]' src={box} alt="" />
                          <span className='logo text-white'>
                             
           YOUR <span className='mx-1'>LOGO</span>

            </span>
          </Link>
       
            <ul className=' items-center hidden space-x-8 lg:flex '>
              
           
            
            {menu}
            </ul>
           
            <div className='flex items-center '>
              <button className='hidden sm:block mr-[100px] sign text-white'>
                SIGN IN
              </button>
            <button
              aria-label='Open Menu'
              title='Open Menu'
              className='p-2 -mr-1 transition duration-200 rounded focus:outline-none focus:shadow-outline hover:bg-deep-purple-50 focus:bg-deep-purple-50'
              onClick={() => setIsMenuOpen(true)}
            >
              {/* <svg className='w-5 text-[white]' viewBox='0 0 24 24'>
                <path
                  fill='currentColor'
                  d='M23,13H1c-0.6,0-1-0.4-1-1s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,13,23,13z'
                />
                <path
                  fill='currentColor'
                  d='M23,6H1C0.4,6,0,5.6,0,5s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,6,23,6z'
                />
                <path
                  fill='currentColor'
                  d='M23,20H1c-0.6,0-1-0.4-1-1s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,20,23,20z'
                />
              </svg> */}
                <img src={line} alt="" />
            </button>
            {isMenuOpen && (
              <div className='absolute  top-0 left-0 w-full z-40'>
                <div className='p-5 bg-[black] border rounded shadow-sm'>
                  <div className='flex items-center justify-between mb-4'>
                    <div className=' mx-auto'>
                    <Link
            to='/'
            aria-label='proReader'
            title='proReader'
            className='flex justify-center  items-center'
          >
                       <img className='h-[20px]' src={box} alt="" />
                          <span className='logo text-white'>
                             
                          YOUR <span className='mx-1'>LOGO</span>

            </span>
          </Link>    
            
      
                    </div>
                    <div>
                      <button
                        aria-label='Close Menu'
                        title='Close Menu'
                        className='p-2 -mb-[-100px] -mr-2 transition duration-200 rounded  focus:outline-none focus:shadow-outline'
                        onClick={() => setIsMenuOpen(false)}
                      >
                        <svg className='w-8 text-[white]' viewBox='0 0 24 24'>
                          <path
                            fill='currentColor'
                            d='M19.7,4.3c-0.4-0.4-1-0.4-1.4,0L12,10.6L5.7,4.3c-0.4-0.4-1-0.4-1.4,0s-0.4,1,0,1.4l6.3,6.3l-6.3,6.3 c-0.4,0.4-0.4,1,0,1.4C4.5,19.9,4.7,20,5,20s0.5-0.1,0.7-0.3l6.3-6.3l6.3,6.3c0.2,0.2,0.5,0.3,0.7,0.3s0.5-0.1,0.7-0.3 c0.4-0.4,0.4-1,0-1.4L13.4,12l6.3-6.3C20.1,5.3,20.1,4.7,19.7,4.3z'
                          />
                        </svg>
                      </button>
                    </div>
                  </div>
                  <nav className='flex justify-center mx-auto'>
                  <ul className='ml-[-100px] spacey-4'>
           
                      

                      
        {menu}

       
            
          
          </ul>
                  </nav>
                </div>
              </div>
            )}
          </div>
           
           
   
         
        </div>
      </div>
      </div>
      </>
  )
}

export default Header