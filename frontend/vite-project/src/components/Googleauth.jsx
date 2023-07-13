import { GoogleLoginButton } from 'react-social-login-buttons'
import { useGoogleLogin } from "@react-oauth/google";
import axios from 'axios';
import { useDispatch } from 'react-redux'

export default function Googleauth() {
  const dispatch=useDispatch();
  const loging = useGoogleLogin({
    onSuccess: async (response) => {
        try {
            const Userdata = await axios.get(
                "https://www.googleapis.com/oauth2/v3/userinfo",
                {
                    headers: {
                        Authorization: `Bearer ${response.access_token}`,
                    },
                }
            );
            let data=Userdata.data;
            console.log(data);
              let thdata={"name":data.name,
          "email":data.email,
      "picture":data.picture
  }
             let res= await fetch(`http://localhost:8080/api/v1/auth/googlelogin`,{
              method: 'POST',
              headers:{
                  "content-type": "application/json",
              },
              body:JSON.stringify(thdata)
             })
             let json=await res.json();
             localStorage.setItem('token',json.user.token)
              dispatch({
                  type: "LOGIN_SUCCESS",
                  payload: json.user
              })
        } catch {
            console.log("error");
        }
    },
});

  return (
    <><GoogleLoginButton style={{width:"100%",display:"flex", fontSize:"0.7rem",borderRadius:"10px"
  ,height:"26px",textAlign:"center",padding:"1px 5px",margin:"0"}} className='cursor-pointer'  onClick={loging} />
  </>
  )
}
