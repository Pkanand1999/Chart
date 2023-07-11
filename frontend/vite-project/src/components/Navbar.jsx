import {useDispatch,useSelector} from 'react-redux'
import { useEffect } from 'react';
import {userIsLoggedIn} from '../redux/action'
import { useNavigate } from 'react-router';

export default function Navbar() {
  const nevigate=useNavigate();
  const dispatch = useDispatch();
  const userData = useSelector((data) => {
    return data.reducerAuth
})


  let authToken = userData.token;
  if(!authToken){
    nevigate("/auth")
  }

  useEffect(() => {
    if (authToken) {
      userIsLoggedIn(authToken,dispatch);
    }
    if(!authToken){
      nevigate("/auth")
    }

  }, [authToken])
  return (
    <div>navbar</div>
  )
}
