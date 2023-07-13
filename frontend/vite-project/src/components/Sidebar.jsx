import {Link} from 'react-router-dom'


export default function Sidebar() {
  return (
    <>
    {/* sidebar */}
    <div className='w-3/12 h-screen flex justify-center items-center p-5'>
        <div className='w-10/12 bg-black text-white flex h-full rounded-3xl justify-center items-center p-5 '>
          <div className=' flex flex-col w-11/12 h-full p-4 content-between '>
            <div className='h-5/6'>
            <h1 className=' text-4xl font-bold '>Board.</h1>
            <div className='h-3/6  flex flex-col mt-11 ' style={{justifyContent:"space-between"}}>
            <Link to="/" className='active:font-bold cursor-pointer hover:font-bold'><div className='flex gap-6 text-2xl items-center '><i className="fa-solid fa-chart-pie"></i><p>Dashboard</p></div></Link>
            <Link to="" className='active:font-bold cursor-pointer hover:font-bold'><div className='flex gap-6 text-2xl items-center '><i className="fa-solid fa-tags"></i><p>Transactions</p></div></Link>
            <Link to="" className='active:font-bold cursor-pointer hover:font-bold'><div className='flex gap-6 text-2xl items-center '><i className="fa-regular fa-calendar"></i><p>Schedules</p></div></Link>
            <Link to="" className='active:font-bold cursor-pointer hover:font-bold'><div className='flex gap-6 text-2xl items-center '><i className="fa-regular fa-circle-user"></i><p>Users</p></div></Link>
            <Link to="" className='active:font-bold cursor-pointer hover:font-bold'><div className='flex gap-6 text-2xl items-center '><i className="fa-solid fa-gear"></i><p>Settings</p></div></Link>
            </div>
            </div>
            <div className='h-1/6'>
              <div className='mt-8 text-md flex flex-col justify-around h-4/6'>
              <p>Help</p>
              <p>Contact Us</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* sidebar  */}
      </>
  )
}
