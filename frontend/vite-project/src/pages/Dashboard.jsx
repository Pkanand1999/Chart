import Navbar from "../components/navbar";
import Sidebar from "../components/Sidebar";

function Dashboard() {
  return (
    <div className='flex w-full h-screen bg-gray-200'>
      <Sidebar/>
      <div className="w-9/12">
      <Navbar/>
      </div>
    </div>
  )
}

export default Dashboard