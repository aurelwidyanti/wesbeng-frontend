import Balance from '../components/dashboard/Balance'
import Calendar from '../components/dashboard/Calendar'
import Notification from '../components/dashboard/Notification'
import Greeting from '../components/dashboard/Greeting'
import Navbar from '../components/compro/Navbar'

const Dashboard = () => {
  return (
    <>
    <Navbar />
    <Greeting />
    <Balance />
    <Calendar />
    <Notification />
    </>
  )
}

export default Dashboard