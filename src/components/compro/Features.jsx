import DatePickerComponent from "../ui/DatePickerComponent";
import { FaWallet } from "react-icons/fa";
import Balance from "../ui/Balance";

const Features = () => {
  return (
    <div className="features h-screen flex-col p-5 pt-10 bg-gray-100">
      <div className="flex flex-col p-3 gap-4">
        <Balance />
        <DatePickerComponent />
      </div>
      <div className="p-3">
        <div className="cardContent p-3 rounded-lg bg-primary/10 border-2 border-primary">
          <h3 className="font-bold text-second flex">
            <FaWallet className="mr-1 mt-1" /> Dompet Digital
          </h3>
          <p class="text-gray-500">
            Dompet Digital memberi insentif bagi warga yang aktif dalam daur
            ulang.
          </p>
          <div
            id="hs-show-hide-collapse-heading"
            class="hs-collapse hidden w-full overflow-hidden transition-[height] duration-300"
            aria-labelledby="hs-show-hide-collapse"
          >
            <p class="text-gray-500 mt-2">
              This is a collapse body. It is hidden by default, until the
              collapse plugin adds the appropriate classes that we use to style
              each element. These classes control the overall appearance, as
              well as the showing and hiding via CSS transitions.
            </p>
          </div>
          <p class="mt-2">
            <button
              type="button"
              class="hs-collapse-toggle inline-flex items-center gap-x-1 text-sm font-semibold rounded-lg border border-transparent text-primary decoration-2 disabled:opacity-50 disabled:pointer-events-none"
              id="hs-show-hide-collapse"
              aria-expanded="false"
              aria-controls="hs-show-hide-collapse-heading"
              data-hs-collapse="#hs-show-hide-collapse-heading"
            >
              <span class="hs-collapse-open:hidden">Read more</span>
              <span class="hs-collapse-open:block hidden">Read less</span>
              <svg
                class="hs-collapse-open:rotate-180 shrink-0 size-4"
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
      </div>
    </div>
  );
};

export default Features;
