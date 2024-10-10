import React from 'react'
import hero from '../assets/img/hero1.png'
import logo from '../assets/img/logo.png'

const Login = () => {
  return (
    <div className='login sm:flex-row min-h-screen  flex flex-col'>
        <div className="heroLogin bg-primary sm:w-1/3 flex justify-center sm:h-screen sm:rounded-r-[30px] max-sm:rounded-b-[30px] w-full h-[270px]">
            <div className="hero sm:w-1/3 content-center w-1/5">
                <img src={hero} alt="" />
                <img src={logo} alt="" />
            </div>
        </div>
        <div className="mainLogin flex justify-content-center  flex-1">
            <div className="flex-col flex-1 m-auto mt-[-50px] sm:my-auto">
            <div class="sm:w-3/5 p-4 h-max bg-white border border-gray-200 rounded-lg shadow sm:p-6 md:p-8 m-auto w-11/12 content-center">
                <form class="" action="#">
                    <h5 className="text-2xl font-bold text-gray-900">Selamat Datang!</h5>
                    <p className='text-xs hidden sm:flex font-normal mt-2'>Bersama Wesbeng, lingkungan lebih bersih. Bergabunglah dalam gerakan #BebasSampah.</p>
                    <div className='mt-3'>
                        <label for="email" class="block mb-2 text-sm font-medium text-gray-900">Username / Email</label>
                        <input type="email" name="email" id="email" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" required />
                    </div>
                    <div className='mt-3'>
                        <label for="password" class="block mb-2 text-sm font-medium text-gray-900 ">Your password</label>
                        <input type="password" name="password" id="password" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 " required />
                    </div>
                    <button type="submit" class="w-full mt-3 text-white bg-primary hover:bg-green-500 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center">Login</button>
                    <div class="text-sm font-medium text-gray-500 mt-3">
                    Don’t have an account? <a href="#" class="text-primary hover:underline ">Register</a>
                    </div>
                </form>
            </div>

            <p className='text-xs block sm:hidden font-normal mt-3 text-center'>Bingung ngelola sampah anorganik dimana? <span className='block'>#WesbengSolusinya</span></p>
            </div>
            
        </div>
    </div>
  )
}

export default Login