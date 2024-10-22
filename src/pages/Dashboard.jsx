import Notification from "../components/dashboard/Notification";
import Greeting from "../components/dashboard/Greeting";
import Navbar from "../components/compro/Navbar";
import DatePickerComponent from "../components/ui/DatePickerComponent";
import Balance from "../components/ui/Balance";

const Dashboard = () => {
  return (
    <>
      <Navbar />
      <div className="mt-[48px] sm:mt-[64px] p-8">
        <Greeting />
        <div className="flex flex-col sm:flex-row gap-4">
          <div className="flex flex-col gap-4 sm:w-1/2">
            <Balance />
            <DatePickerComponent />
          </div>
          <div className="sm:w-1/2">
            <Notification />
          </div>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
