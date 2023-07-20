// import logo from './logo.svg';
import './App.css';
import {
  MDBBtn,
  MDBContainer,
  MDBCard,
  MDBCardBody,
  MDBInput,
  MDBCheckbox,

}
from 'mdb-react-ui-kit';

function App() {
  return (
    <MDBContainer fluid className='d-flex align-items-center justify-content-center bg-image' style={{backgroundImage: 'url(https://fulbright.edu.vn/wp-content/uploads/2019/09/fullbright-5.jpg)'}}>
      
      <MDBCard className='m-5' style={{maxWidth: '600px', height: '700px', color: '#102064', backgroundColor: "#CEEDF6"}}>
        <MDBCardBody className='justify-content-center align-items-center px-5'>
          <h2 className="text-center fw-bold fs-4 mb-2">Welcome to Fulbright OneSurvey,</h2>
          <h2 className="text-center fw-bold fs-4 mb-5">a place for all things survey related</h2>
          <h5 className='text-center fw-bold fs-6 mb-4'>Please Log In or Sign Up to continue.</h5>

          <MDBInput wrapperClass='mb-4' label='User name or email address' size='lg' id='form1' type='text'/>
          <MDBInput wrapperClass='mb-4' label='Password' size='lg' id='form3' type='password'/>
          
          <div className='d-flex flex-row justify-content-center mb-4'>
            <MDBCheckbox name='flexCheck' id='flexCheckDefault' label='I agree all statements in Terms of service' />
          </div>
        
          <MDBBtn className='mb-4 w-100' size='lg' style={{backgroundColor: '#102064'}}>Sign up</MDBBtn>
          <MDBBtn className='mb-4 w-100' size='lg' style={{backgroundColor: '#FEA200'}}>Log in</MDBBtn>
    
        </MDBCardBody>
      </MDBCard>

    </MDBContainer>
  );
}

export default App;