import Navbar from "../components/navbar";
import Sidebar from "../components/Sidebar";
import List from "../components/List";
import LineChart from "../components/LineChart";

function Dashboard() {
  return (
    <div className='flex w-full h-screen bg-gray-100'>
      <Sidebar/>
      <div className="xl:w-9/12 lg:w-8/12 md:w-7/12">
      <Navbar/>
      <List/>
      <LineChart/>
      </div>
    </div>
  )
}

export default Dashboard