import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react';
import { userIsLoggedIn } from '../redux/action'
import { useNavigate } from 'react-router';
import {Link} from 'react-router-dom'

export default function Navbar() {
  const nevigate = useNavigate();
  const dispatch = useDispatch();
  const userData = useSelector((data) => {
    return data.reducerAuth
  })
  console.log(userData.image)

  let authToken = userData.token;
  if (!authToken) {
    nevigate("/auth")
  }

  useEffect(() => {
    if (authToken) {
      userIsLoggedIn(authToken, dispatch);
    }
    if (!authToken) {
      nevigate("/auth")
    }

  }, [authToken])
  return (
    <div className='flex w-full h-screen bg-gray-200'>
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
      <div className='w-9/12 h-16 border-2 flex justify-around items-center'>
        <div className='flex w-7/12'>
          <h1 className='text-2xl font-bold'>Dashboard</h1>
        </div>
        <div className='flex w-4/12 justify-around items-center'>
          <div className='flex w-6/12 bg-white text-gray-600 p-1 rounded-md justify-around items-center'>
            <input type="search" className='p-0 pl-2 w-10/12 border-none ' placeholder='Search' />
            <i className="fa-solid fa-magnifying-glass w-1/12"></i>
          </div>
          <div className='flex w-2/12 justify-center items-center'>
            <i className="fa-regular fa-bell text-2xl"></i>
          </div>
          <div className='flex w-10 justify-center item-center rounded-2xl'>
            <img src={userData.image} alt="" className='rounded-full' />
          </div>
        </div>
      </div>

    </div>
  )
}
