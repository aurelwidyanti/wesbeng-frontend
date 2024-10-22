import { BsFillSendFill } from "react-icons/bs";
import { FaHistory } from "react-icons/fa";
import DatePickerComponent from '../ui/DatePickerComponent';
import { FaWallet } from "react-icons/fa";

const Features = () => {
  return (
    <div className="features h-screen flex-col p-5 pt-10 bg-gray-100">
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
        <div className="kalender mt-4">
          <DatePickerComponent />
        </div>
      </div>
      <div className="p-3">
      <div className="cardContent p-3 rounded-lg bg-primary/10 border-2 border-primary">
        <h3 className='font-bold text-second flex'><FaWallet className='mr-1 mt-1'/> Dompet Digital</h3>
        <p class="text-gray-500">Dompet Digital memberi insentif bagi warga yang aktif dalam daur ulang.</p>
        <div id="hs-show-hide-collapse-heading" class="hs-collapse hidden w-full overflow-hidden transition-[height] duration-300" aria-labelledby="hs-show-hide-collapse">
          <p class="text-gray-500 mt-2">
            This is a collapse body. It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions.
          </p>
        </div>
        <p class="mt-2">
          <button type="button" class="hs-collapse-toggle inline-flex items-center gap-x-1 text-sm font-semibold rounded-lg border border-transparent text-primary decoration-2 disabled:opacity-50 disabled:pointer-events-none" id="hs-show-hide-collapse" aria-expanded="false" aria-controls="hs-show-hide-collapse-heading" data-hs-collapse="#hs-show-hide-collapse-heading">
            <span class="hs-collapse-open:hidden">Read more</span>
            <span class="hs-collapse-open:block hidden">Read less</span>
            <svg class="hs-collapse-open:rotate-180 shrink-0 size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <path d="m6 9 6 6 6-6"></path>
            </svg>
          </button>
        </p>
      </div>
      </div>
      
    </div>
  )
}

export default Features