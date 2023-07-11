import Googleauth from "./googleauth"
import { AppleLoginButton } from "react-social-login-buttons"

export default function Login({changetosignup}) {
  return (
    <>
    <div className=" w-2/5">
    <div>
      <h1 className="font-bold text-3xl ">Sign In</h1>
    </div>
    <div>
      <p className="text-sm mt-1 font-medium">
        Sign in to your account.
      </p>
    </div>
    <div className="flex justify-between mb-4 mt-4 ">
      <div style={{width:"46%",display:"flex"}}><Googleauth /></div>
      <div style={{width:"46%",display:"flex"}}><AppleLoginButton style={{width:"100%",display:"flex", fontSize:"0.7rem",borderRadius:"10px"
  ,height:"26px",textAlign:"center",padding:"1px 5px",margin:"0"}} className="font-light cursor-pointer"/></div>
    </div>
    <div className="bg-white flex-column justify-center items-center text-sm rounded-xl w-full">
    <form className="p-5 flex-column font-medium w-full ">
      <p className="mb-1">Email address</p>
      <input type="email" placeholder="Enter your email" className="border-none bg-gray-200 p-1 rounded-xl mb-3 w-full " autoComplete="off"/>
      <p className="mb-1">Password</p>
      <input type="password" placeholder="Enter your password" className="border-none bg-gray-200 p-1 rounded-xl mb-5 w-full " autoComplete="off"/>
      <p className="text-sky-700 font-bold cursor-pointer">Forgot password ?</p>
      <button className="bg-black text-white p-1.5 w-full rounded-xl font-bold mt-4 cursor-pointer">Sign In</button>
    </form>
    </div>
      <p className="mt-4">Don't have an account ? <span className="text-sky-700 font-medium cursor-pointer" onClick={()=>changetosignup()}>Regiter here</span> .</p>
    </div>
    </>
  )
}
