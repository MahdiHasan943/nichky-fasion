import React from 'react'
import './hero.css'

import heroBg from '../../images/Circle.png'
import heroImage from '../../images/Image.png'
import herodot from '../../images/UI.png'
import second from '../../images/box1.png'
import leftArrow from '../../images/ar1111.png'
import rightArrow from '../../images/ar2222.png'



const Hero = () => {
  return (
      <>
       <div className='pl-[60px] relative py-4 lg:py-0 lg:flex '>
          {/* start */}

          {/* 1 */}

          <div className="w-full mx-auto lg:w-[24%]">
              <div className="pt-[100px]">
                
                  <img className='mb-[50px]' src={herodot} alt="" />
              </div>
              <div className="flex ">
                  <h1 className='beginner  text-white '>BEGINNER'S</h1>
                  <div className="flex items-center ml-[100px] ">
                      <div className="mt-[-20px]"> <img className='mx-4' src={second} alt="" /></div>
                      <p className='pro'>BECOME A <br /> PRO-DESIGNER</p>

                  </div>
              </div>
              
          </div>
          {/* 2 */}

          <div className="justify-center  w-full  mx-auto lg:w-[42%]">
              <div className='lg:flex mx-auto justify-center items-center'>
                  <img className='mx-auto lg:mx-0 lg:mr-[-20px] mb-[-400px]  lg:mb-[-680px]' src={heroBg} alt="" />
                 
              </div>
              <div className="flex justify-center">
              <img className='mx-auto ' src={heroImage} alt="" />
             </div>
              <div className="flex justify-between">

                  <img className='lg:absolute lg:bottom-[30px]  w-[100px] h-[100px]' src={rightArrow} alt="" />
                  <img className='lg:absolute lg:bottom-[30px]  right-[30%] w-[100px] h-[100px]' src={leftArrow} alt="" />


              </div>
          </div>
          {/* 3 */}

          <div className="w-full mx-auto lg:w-[34%]">
              <div className="flex justify-end">
              <div className="bord">
                  <p className='editon1'> EDITION </p>
                  <h1 className='edition'>
                     
                      2022
                  </h1>
              </div>
             </div>

              <div className="mt-[40px] ">
                  <h1 className='start py-3'>START GUIDE FOR BEGINNER <br /> DESIGNERS</h1>
                  <p className='text-white pb-3 lorem'>
                  Lorem ipsum dolor sit amet, consecte <br /> tur adipiscing elit, sed do eiusmod <br /> tempor incididunt ut labore .
                  </p>
                  <div className="mt-4">
                      <button className='bg-[#B960FD] py-3 mr-3 read px-4 text-white '>LET'S START</button>
                      <button className='hover:bg-[#B960FD] read  py-3 transiton-4 duration-4  px-4  text-white '>READ MORE</button>

                  </div>
              </div>
              
          </div>

          {/* end */}
      </div>
      
      <div className="grid shaDow py-20 grid-cols-1 mx-auto gap-6 sm:grid-cols-3">
              <div className="flex items-center justify-center">
                  <p className='plus text-[#B960FD]'>+</p>
                  <p className='number'>150</p>
                  <div className="mx-5 items-center">
                      <p className='happy'>HAPPY </p>
                      <p className='student'>STUDENTS</p>
                  </div>
              </div>
              <div className="flex items-center justify-center">
                  <p className='plus text-[#B960FD]'>+</p>
                  <p className='number'>50</p>
                  <div className="mx-5 items-center">
                      <p className='happy'>CERTIFIED </p>
                      <p className='student'>COURSES</p>
                  </div>
              </div>
              <div className="flex items-center justify-center">
                  <p className='plus text-[#B960FD]'>+</p>
                  <p className='number'>1000</p>
                  <div className="mx-5 items-center">
                      <p className='happy'>AWARDS </p>
                      <p className='student'>RECEIVED</p>
                  </div>
              </div>
          </div>
      </>
  )
}

export default Hero