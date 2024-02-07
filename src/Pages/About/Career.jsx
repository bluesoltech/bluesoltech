import React from 'react'
import Happy_client from '../../component/About/Happy_client'
import logo from '../../assets/img/logonew.png'

const Career = () => {
  return (
    <div className='bg-[#0F0E0E] p-20 items-center'>
      <div className='md:w-[80%] w-auto mt-4 mx-auto'>
        <div className='item-center text-center'>
          <h1 className='text-white font-black text-5xl'>Career</h1>
          <p className='text-gray-500 mt-10 justify-center text-center items-center'>Digital Marketing Jobs In the word</p>
        </div>
        <div className='mt-14 mx-auto flex justify-center items-center text-center '>
          <div className='bg-white text-black w-[100%] xl:w-[1300px] xl:h-[200px] p-8 rounded-md'>
            <div className='md:flex flex-row justify-between items-center'>
              <div className='w-[30px] h-[30px] bg-white rounded-md'>
                <img src={logo} alt='no_img' className='[20px]' />
              </div>
              <div className=''>
                <p>Graphic Designer</p>
              </div>
              <div className=''>
                <h2 className='font-bold'>Ahmedabad</h2>
              </div>
              <div className=''>
                <h2 className='font-bold'>FULL TIME</h2>
              </div>
            </div>
            <div className='flex items-center justify-center mt-6'>
              <div className='bg-black flex text-white w-auto xl:w-[1400px] h-[80px] rounded-md justify-between xl:flex-row flex-col items-center p-1'>
                <div>
                  <p>Experience : 5 years minimum</p>
                </div>
                <div>
                  <h2 className='font-bold'>Languages : Good English</h2>
                </div>
                <div>
                  <button className='bg-white text-black font-bold py-2 px-4 rounded-md m-4'>Apply Now</button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className='mt-14 mx-auto flex justify-center items-center text-center '>
          <div className='bg-white text-black w-[100%] xl:w-[1300px] xl:h-[200px] p-8 rounded-md'>
            <div className='md:flex flex-row justify-between items-center'>
              <div className='w-[30px] h-[30px] bg-white rounded-md'>
                <img src={logo} alt='no_img' className='[20px]' />
              </div>
              <div className=''>
                <p>Website Developer</p>
              </div>
              <div className=''>
                <h2 className='font-bold'>Ahmedabad</h2>
              </div>
              <div className=''>
                <h2 className='font-bold'>FULL TIME</h2>
              </div>
            </div>
            <div className='flex items-center justify-center mt-6'>
              <div className='bg-black flex text-white w-auto xl:w-[1400px] h-[80px] rounded-md justify-between xl:flex-row flex-col items-center p-1'>
                <div>
                  <p>Experience : 2 years minimum</p>
                </div>
                <div>
                  <h2 className='font-bold'>Languages : Good English</h2>
                </div>
                <div>
                  <button className='bg-white text-black font-bold py-2 px-4 rounded-md m-4 shadow-2xl'>Apply Now</button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className='mt-14 mx-auto flex justify-center items-center text-center'>
          <div className='bg-white text-black w-[100%] xl:w-[1300px] xl:h-[200px] p-8 rounded-md'>
            <div className='md:flex flex-row justify-between items-center'>
              <div className='w-[30px] h-[30px] bg-white rounded-md'>
                <img src={logo} alt='no_img' className='[20px]' />
              </div>
              <div className=''>
                <p>IT Sales Executive/ Marketing Manager</p>
              </div>
              <div className=''>
                <h2 className='font-bold'>Ahmedabad</h2>
              </div>
              <div className=''>
                <h2 className='font-bold'>FULL TIME</h2>
              </div>
            </div>
            <div className='flex items-center justify-center mt-6'>
              <div className='bg-black flex text-white w-auto xl:w-[1400px] h-[80px] rounded-md justify-between xl:flex-row flex-col items-center p-1'>
                <div>
                  <p>Experience : 3 years minimum</p>
                </div>
                <div>
                  <h2 className='font-bold'>Languages : Excellent English</h2>
                </div>
                <div>
                  <button className='bg-white text-black font-bold py-2 px-4 rounded-md m-4'>Apply Now</button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Happy_client />
      </div>

    </div>
  )
}

export default Career