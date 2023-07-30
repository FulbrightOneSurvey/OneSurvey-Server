// export default function LoginPage() {
//     return (
//         <div>
//             <h1>login or sth idk, redirect to account in 3 sec</h1>
//             {/* // redirect to /account */}
//             <meta httpEquiv="refresh" content="3;url=/account" />
//         </div>
//     )
// }
'use client'
import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import './App.css';

import pb from '../pocketbase';
import { useForm } from 'react-hook-form';
import { useState, useEffect } from 'react';

import {
  MDBBtn,
  MDBContainer,
  MDBCard,
  MDBCardBody,
  MDBInput,
  MDBCheckbox,
} from 'mdb-react-ui-kit';

export default function LoginPage() {
  const { register, handleSubmit } = useForm();
  const [ isLoading, setLoading ] = useState(false); // loading state to wait for DB response
  const [ isClient, setIsClient] = useState(false); // client state to avoid hydration mismatch
  const [ isTOSChecked, setTOSChecked ] = useState(false); // TOS checkbox state
  const isLoggedin = pb.authStore.isValid // check if the user is logged in

  // will be called when hydration occurs
  useEffect(() => {
    setIsClient(true)
  }, [])

  // toggle checkbox state
  function handleCheckboxChange() {
    setTOSChecked(!isTOSChecked);
  }

  async function login(data : any) {
    setLoading(true);
    // check if the checkbox in the same form is checked
    if (isTOSChecked) {
      console.log('checked');
      // login
      try {
        const authData = await pb.collection('users').authWithPassword(data.email, data.password);
      } catch (err) {
        alert(err);
      }
    } else {
      console.log('not checked');
      alert("You need to agree to our Terms of Service to continue.");
    }
    console.log(data);
    setLoading(false);
  }

  function logout() {
    pb.authStore.clear();
    // refresh the page
    window.location.reload();
  }

  return (
    <MDBContainer fluid className='d-flex align-items-center justify-content-center bg-image' style={{backgroundImage: 'url(https://fulbright.edu.vn/wp-content/uploads/2019/09/fullbright-5.jpg)'}}>
      <MDBCard className='m-5' style={{maxWidth: '600px', height: '700px', color: '#102064', backgroundColor: "#CEEDF6"}}>
        <MDBCardBody className='justify-content-center align-items-center px-5'>
          <h2 className="text-center fw-bold fs-4 mb-2">Welcome to Fulbright OneSurvey,</h2>
          <h2 className="text-center fw-bold fs-4 mb-5">a place for all things survey related</h2>
          <h5 className='text-center fw-bold fs-6 mb-4'>Please Log In or Sign Up to continue.</h5>

          <form onSubmit={handleSubmit(login)}>
            <MDBInput wrapperClass='mb-4' label='User name or email address' size='lg' type='text' {...register('email')}/>
            <MDBInput wrapperClass='mb-4' label='Password' size='lg' type='password' {...register('password')}/>
            
            <div className='d-flex flex-row justify-content-center mb-4'>
              <MDBCheckbox className='flexCheck' id='toscheckbox' label='I agree all statements in Terms of service' onChange={handleCheckboxChange}/>
            </div>
            {/* TODO: separate Sign up and login button to call for 2 different function instead of submitting to a form*/}
            <MDBBtn className='mb-4 w-100' size='lg' style={{backgroundColor: '#102064'}} disabled={isLoading}>Sign up</MDBBtn>
            <MDBBtn className='mb-4 w-100' size='lg' style={{backgroundColor: '#FEA200'}} type='submit' disabled={isLoading}>{isLoading ? 'Logging in' : 'Log in'}</MDBBtn>
            {/* Make login button redirect to /account for now */}
            {/* <MDBBtn className='mb-4 w-100' size='lg' style={{backgroundColor: '#FEA200'}} href='/account'>Log in</MDBBtn> */}
          </form>
          {/* client-side rendering div */}
          {isClient && <div suppressHydrationWarning>
            {isLoading && <p>Logging...</p>}
            <h1>Login state: {isLoggedin ? 'True' : 'False'}</h1>
            {/* make sure pb.authStore.model is not null */}
            {isLoggedin && <h1>Welcome back, {pb.authStore.model?.name}</h1>}
            {/* Log out button only appear when logged in*/}
            {isLoggedin && <MDBBtn className='mb-4 w-100' size='lg' style={{backgroundColor: '#102064'}} onClick={logout}>Log out</MDBBtn>}
          </div>}
        </MDBCardBody>
      </MDBCard>

    </MDBContainer>
  );
}