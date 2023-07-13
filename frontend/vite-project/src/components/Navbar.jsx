import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react';
import { userIsLoggedIn } from '../redux/action'
import { useNavigate } from 'react-router';


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
    <>
      {/* navbar ////// */}
      <div className='w-full h-16 border-2 flex justify-around items-center'>
        <div className='flex w-7/12'>
          <h1 className='text-2xl font-bold'>Dashboard</h1>
        </div>
        <div className='flex w-4/12 justify-around items-center'>
          {/* search  */}
          <div className='flex w-6/12 bg-white text-gray-600 p-1 rounded-md justify-around items-center'>
            <input type="search" className='p-0 pl-2 w-10/12 border-none ' placeholder='Search' />
            <i className="fa-solid fa-magnifying-glass w-1/12"></i>
          </div>
          {/* bell  */}
          <div className='flex w-2/12 justify-center items-center'>
            <i className="fa-regular fa-bell text-2xl"></i>
          </div>
          {/* img  */}
          <div className='flex w-10 justify-center item-center rounded-2xl'>
            <img src={userData.image} alt="" className='rounded-full' />
          </div>
        </div>
      </div>
      {/* navbar /////// */}
    </>
  )
}
