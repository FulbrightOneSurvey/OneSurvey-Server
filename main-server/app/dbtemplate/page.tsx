'use client'
import 'mdb-react-ui-kit/dist/css/mdb.min.css';

import pb from '../components/pocketbase';
import useLogin from '../hooks/useLogin';
import useLogout from '../hooks/useLogout';
import dbQuery from '../components/dbQuery';

import { useState, useEffect} from 'react';

export default function dbTemplate() {
  const [isClient, setIsClient] = useState(false); // client state to avoid hydration mismatch
  const { login, isLoading, error } = useLogin();
  const logout = useLogout();
  const { isLoggedin, db } = dbQuery();

  // will be called when hydration occurs
  useEffect(() => {
    setIsClient(true);
  }, [])

  console.log(db);

  return (
    <div>
      {isClient && <div suppressHydrationWarning>
        <h1>Logged in: {isLoggedin ? "True" : "False"}</h1>
        <h1>Username: {isLoggedin && db?.name}</h1>
        <h1>Email: {isLoggedin && db?.email}</h1>
        <h1>UID: {isLoggedin && db?.id}</h1>
        <h1>Points: {isLoggedin && db?.points}</h1>
        <h1>Survey Completed: </h1>
        <h1>{db?.surveycompleted}</h1>
        <h1 style={{ color: 'gray' }}> More info are in devtools console</h1>
      </div>}
    </div>
  )
}