import Navbar from "../components/navbar";
import Sidebar from "../components/Sidebar";
import List from "../components/List";

function Dashboard() {
  return (
    <div className='flex w-full h-screen bg-gray-100'>
      <Sidebar/>
      <div className="w-9/12">
      <Navbar/>
      <List/>
      </div>
    </div>
  )
}

export default Dashboard