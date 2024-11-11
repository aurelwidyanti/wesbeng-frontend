import { FaWallet } from "react-icons/fa";

const CardFeatures = (props) => {
  return (
    <div className="cardContent mt-3 p-3 rounded-lg bg-primary/10 border-2 border-primary sm:w-4/5 sm:mx-auto">
        <h3 className="font-bold text-second flex">
            <FaWallet className="mr-1 mt-1" /> {props.tittle}
        </h3>
        <p className="text-gray-500">
            {props.text}
        </p>
        <p className="hidden text-gray-500 sm:flex">{props.desc}</p>
        <div
            id={props.idHeading}
            className="hs-collapse hidden w-full overflow-hidden transition-[height] duration-300 sm:hidden"
            aria-labelledby={props.id}
            >
        <p className="text-gray-500 mt-2">{props.desc}</p>
        </div>
        <p className="mt-2 sm:hidden">
            <button
                type="button"
                className="hs-collapse-toggle inline-flex items-center gap-x-1 text-sm font-semibold rounded-lg border border-transparent text-primary decoration-2 disabled:opacity-50 disabled:pointer-events-none"
                id={props.id}
                aria-expanded="false"
                aria-controls={props.idHeading}
                data-hs-collapse={`#${props.idHeading}`}
            >
                <span className="hs-collapse-open:hidden">Read more</span>
                <span className="hs-collapse-open:block hidden">Read less</span>
                <svg
                className="hs-collapse-open:rotate-180 shrink-0 size-4"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
            >
                <path d="m6 9 6 6 6-6"></path>
            </svg>
        </button>
        </p>
    </div>
  )
}

export default CardFeatures