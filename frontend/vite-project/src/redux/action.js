


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
  