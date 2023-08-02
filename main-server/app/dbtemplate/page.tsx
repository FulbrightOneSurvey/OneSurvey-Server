'use client'
import 'mdb-react-ui-kit/dist/css/mdb.min.css';

import useLogin from '../hooks/useLogin';
import useLogout from '../hooks/useLogout';
import userdbQuery from '../components/userdbQuery';

import { useState, useEffect} from 'react';

export default function dbTemplate() {
  const [isClient, setIsClient] = useState(false); // client state to avoid hydration mismatch
  const { login, isLoading, error } = useLogin(); // login function
  const logout = useLogout(); // logout function
  const { isLoggedin, userdb } = userdbQuery(); // user database query function

  // will be called when hydration occurs
  useEffect(() => {
    setIsClient(true);
  }, [])

  console.log(userdb);

  return (
    <div>
      {isClient && <div suppressHydrationWarning>
        <h1>Logged in: {isLoggedin ? 'True' : 'False'}</h1>
        <h1>Username: {isLoggedin && userdb?.name}</h1>
        <h1>Email: {isLoggedin && userdb?.email}</h1>
        <h1>UID: {isLoggedin && userdb?.id}</h1>
        <h1>Points: {isLoggedin && userdb?.points}</h1>
        <h1>Survey Completed: </h1>
        <h1>{userdb?.surveycompleted}</h1>
        <h1 style={{ color: 'gray' }}> More info are in devtools console</h1>
      </div>}
    </div>
  )
}