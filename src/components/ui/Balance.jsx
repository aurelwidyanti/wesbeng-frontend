import { BsFillSendFill } from 'react-icons/bs';
import { FaHistory } from 'react-icons/fa';

const Balance = () => {
  return (
    <div className="dompet rounded-xl shadow-md border bg-primary bg-wave bg-no-repeat bg-cover p-4">
      <div className="value-dompet flex flex-row justify-between">
        <div className="flex flex-col">
          <h1 className="text-white font-bold">Balance</h1>
          <div className="saldo">
            <h3 className="text-white">Rp.123.000</h3>
          </div>
        </div>
        <div className="action mt-3 flex flex-row">
          <div className="box-1 mr-3 text-center">
            <button className="rounded bg-white p-3 shadow">
              <BsFillSendFill className="text-blue-500" />
            </button>
            <p className="text-white text-xs">Transfer</p>
          </div>
          <div className="box-2 text-center">
            <button className="rounded bg-white p-3 shadow">
              <FaHistory className="text-orange-400" />
            </button>
            <p className="text-white text-xs">History</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Balance