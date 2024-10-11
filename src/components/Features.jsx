import React from 'react'
import { BsFillSendFill } from "react-icons/bs";

const Features = () => {
  return (
    <div className="features h-screen flex-col mt-4 p-5">
      <div className="flex-col p-4">
        <div className="dompet rounded-xl shadow-md border bg-primary bg-wave bg-no-repeat bg-cover p-2">
          <div className="value-dompet">
            <h1 className='text-white font-bold'>Balance</h1>
            <h3 className='text-white'>Rp.123.000</h3>
            <div className="action">
              <button className='rounded shadow'><BsFillSendFill /></button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Features