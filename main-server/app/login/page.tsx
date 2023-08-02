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

import useRegister from '../hooks/useRegister';
import useLogin from '../hooks/useLogin';
import useLogout from '../hooks/useLogout';
import userdbQuery from '../components/userdbQuery';

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
  const [isClient, setIsClient] = useState(false); // client state to avoid hydration mismatch
  const [isRegister, setIsRegister] = useState(false); // register state
  const [isTOSChecked, setTOSChecked] = useState(false); // TOS checkbox state
  const { register, handleSubmit } = useForm();

  const { login, isLoading, error } = useLogin(); // login function
  const { onRegister, isLoadingR, errorR } = useRegister(); // register function
  const logout = useLogout(); // logout function
  const { isLoggedin, userdb } = userdbQuery(); // user database query function

  // will be called when hydration occurs
  useEffect(() => {
    setIsClient(true);
  }, [])

  // toggle checkbox state
  function handleCheckboxChange() {
    setTOSChecked(!isTOSChecked);
  }

  async function onSubmit(data: any) {
    // check if TOS is checked
    if (!isTOSChecked) {
      alert('Please agree to the Terms of Service to continue.');
      return;
    }
    if (isRegister) {
      // call register function
      onRegister({ name: data.name, email: data.email, password: data.password, passwordconfirm: data.passwordconfirm });
    } else {
      // call login function
      login({ email: data.email, password: data.password });
    }
  }

  function handleRegister() {
    setIsRegister(!isRegister);
  }

  if (isLoggedin) {
    return (
      <MDBContainer suppressHydrationWarning fluid className='d-flex align-items-center justify-content-center bg-image' style={{ backgroundImage: 'url(https://fulbright.edu.vn/wp-content/uploads/2019/09/fullbright-5.jpg)' }}>
        <MDBCard className='m-5' style={{ maxWidth: '600px', height: '700px', color: '#102064', backgroundColor: "#CEEDF6" }}>
          <MDBCardBody className='justify-content-center align-items-center px-5'>
            <h2 className="text-center fw-bold fs-4 mb-2">Welcome to Fulbright OneSurvey,</h2>
            <h2 className="text-center fw-bold fs-4 mb-5">a place for all things survey related</h2>
            {isClient && <div suppressHydrationWarning>
              {isLoading && <p>Logging...</p>}
              <h1>Login state: {isLoggedin ? 'True' : 'False'}</h1>
              {/* make sure pb.authStore.model is not null */}
              {isLoggedin && <h1>Welcome back, {userdb?.name}, redirecting in 3 seconds</h1>}
              {/* redirect after 3 seconds */}
              {isLoggedin && <meta httpEquiv="refresh" content="3;url=/dashboard_page" />}
              {/* Log out button only appear when logged in*/}
              {isLoggedin && <MDBBtn className='mb-4 w-100' size='lg' style={{ backgroundColor: '#102064' }} onClick={logout}>Log out</MDBBtn>}
            </div>}
          </MDBCardBody>
        </MDBCard>
      </MDBContainer>
    )
  } else {
    return (
      <MDBContainer suppressHydrationWarning fluid className='d-flex align-items-center justify-content-center bg-image' style={{ backgroundImage: 'url(https://fulbright.edu.vn/wp-content/uploads/2019/09/fullbright-5.jpg)' }}>
        <MDBCard className='m-5' style={{ maxWidth: '600px', height: '700px', color: '#102064', backgroundColor: "#CEEDF6" }}>
          <MDBCardBody className='justify-content-center align-items-center px-5'>
            <h2 className="text-center fw-bold fs-4 mb-2">Welcome to Fulbright OneSurvey,</h2>
            <h2 className="text-center fw-bold fs-4 mb-5">a place for all things survey related</h2>
            <h5 className='text-center fw-bold fs-6 mb-4'>Please Log In or Sign Up to continue.</h5>

            <form onSubmit={handleSubmit(onSubmit)}>
              {/* input boxes for credentials */}
              {isRegister && <MDBInput wrapperClass='mb-4' label='Username' size='lg' type='text' {...register('name')} />}
              <MDBInput wrapperClass='mb-4' label='Email address' size='lg' type='text' {...register('email')} />
              <MDBInput wrapperClass='mb-4' label='Password' size='lg' type='password' {...register('password')} />
              {isRegister && <MDBInput wrapperClass='mb-4' label='Confirm Password' size='lg' type='password' {...register('passwordconfirm')} />}

              {/* TOS checkbox */}
              <div className='d-flex flex-row justify-content-center mb-4'>
                <MDBCheckbox className='flexCheck' id='toscheckbox' label='I agree all statements in Terms of service' onChange={handleCheckboxChange} />
              </div>
              <MDBBtn className='mb-4 w-100' size='lg' style={{ backgroundColor: '#FEA200' }} type='submit' disabled={isLoading}>{isLoading ? isRegister ? 'Registering' : 'Logging' : isRegister ? 'Register' : 'Log In'}</MDBBtn>
            </form>
            <MDBBtn className='mb-4 w-100' size='lg' style={{ backgroundColor: '#102064' }} disabled={isLoadingR} onClick={handleRegister}>{isRegister ? 'Nevermind' : 'Register?'}</MDBBtn>

            {/* client-side rendering div */}
            {isClient && <div suppressHydrationWarning>
              {isLoading && <p>Logging...</p>}
              {isLoadingR && <p>Registering...</p>}
              <h1>Login state: {isLoggedin ? 'True' : 'False'}</h1>
            </div>}
          </MDBCardBody>
        </MDBCard>

      </MDBContainer>
    );
  }
}