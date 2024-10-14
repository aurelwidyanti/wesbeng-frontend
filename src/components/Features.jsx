import { useState } from "react";
import React from 'react'
import { BsFillSendFill } from "react-icons/bs";
import { FaHistory } from "react-icons/fa";
import { FaRegEye } from "react-icons/fa";
import { FaRegEyeSlash } from "react-icons/fa";



const Features = () => {
  return (
    <div className="features h-screen flex-col mt-4 p-5">
      <div className="flex-col p-3">
        <div className="dompet rounded-xl shadow-md border bg-primary bg-wave bg-no-repeat bg-cover p-4">
          <div className="value-dompet">
            <h1 className='text-white font-bold'>Balance</h1>
            <div className="saldo">
              <h3 className='text-white'>Rp.123.000</h3>

            </div>
            <div className="action mt-3 flex">
              <div className="box-1 mr-3 text-center">
                <button className='rounded bg-white p-3 shadow'><BsFillSendFill className='text-blue-500'/></button>
                <p className='text-white text-xs'>Transfer</p>
              </div>
              <div className="box-2 text-center">
                <button className='rounded bg-white p-3 shadow'><FaHistory className='text-orange-400' /></button>
                <p className='text-white text-xs'>History</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Features