import Signup from "../components/signup";
import Login from "../components/login";
import {useState} from 'react'

function Auth() {
const [signup,setSignup]=useState(false)

function changetologin(){
setSignup(false)
}
function changetosignup(){
setSignup(true)
}



  return (
    <>
    <div className='flex h-screen justify-between'>
    <div className='bg-black w-2/5 flex justify-center items-center'>
        <h1 className='text-6xl font-bold text-white'>Board.</h1>
    </div>
    <div className='w-3/5 flex justify-center items-center bg-gray-300'>
      {signup && <Signup changetologin={changetologin}/>}
      {!signup && <Login changetosignup={changetosignup}/>}
    </div>
    </div>
    </>
  )
}

export default Auth