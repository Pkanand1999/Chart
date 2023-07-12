import axios from "axios";


export function userIsLoggedIn(authToken,dispatch){
    console.log("user is logged in")
      fetch(`${import.meta.env.VITE_AUTH_URL}/loggedInUser`, {
          headers: {
            'authorization': `Bearer ${authToken}`
          }
        })
        .then(res => res.json())
        .then(result => {
          console.log(result);
          const user = result.data;
  dispatch({
    type:"LOGGEDIN_USER",
    payload:user
  })
        })
  }

  export function signupUser(data,dispatch){
    axios.post(`http://localhost:8080/api/v1/auth/register`,data )
    .then((res)=>{
      console.log(res);
        dispatch({
            type:"SIGNUP_SUCCESS",
            payload:true
        })
    }).catch((e)=>{
      console.log(e)
        dispatch({
            type:"SIGNUP_FAILURE",
            payload:false,
        })
    })
  }

  export function login(data,dispatch){
    axios.post(`http://localhost:8080/api/v1/auth/login`,{...data} )
        .then((res)=>{
            console.log(res.data)
            localStorage.setItem('token',res.data.token)
            dispatch({
                type:"LOGIN_SUCCESS",
                payload:res.data
            })
        }).catch((e)=>{
          console.log(e)
            dispatch({
                type:"LOGIN_FAILURE",
                payload:true,
 
            })
        })
  }
  