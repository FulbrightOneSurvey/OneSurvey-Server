
'use client'
import './App.css';
import Navbar from '../navbar';
import pb from '../components/pocketbase';
import userdbQuery from '../components/userdbQuery';
import { lazy } from 'react';
import surveyDisplay from './surveyDisplay';
import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import { useState, useEffect, use } from 'react';
import {
  MDBBtn,
  MDBContainer,
  MDBCard,
  MDBCardBody,
  MDBInput,
  MDBCheckbox,
} from 'mdb-react-ui-kit';

export default function Dashboard() {
  const [isClient, setIsClient] = useState(false); // client state to avoid hydration mismatch
  const { isLoggedin, userdb } = userdbQuery(); // user database query function
  useEffect(() => {
    setIsClient(true);
  },[])
  return (
    <div>
      <Navbar />

      <MDBCard>
        <MDBCardBody className='h-30' style={{backgroundColor: "#CEEDF6"}}>
            <table id='search-and-filter-box'>
              <th className='ms-2 col-4' id="greeting-diag">
                <span className="d-flex align-items-center ms-3 fs-2 fw-bold">Xin chào, {isClient ? userdb?.name : "Username"}!</span>
                </th>
              <th>
                <div id="search-bar" >
                  <input className='col-5 d-flex flex-row p-2' value={"Search here"} style={{ borderRadius: 10, height: '5vh', width: '40vw', margin: '1%', padding: '0.5% 1.2%' }}></input>
                </div>
              </th>
              <th className='col-3'>
                <img className='float-right' alt='Filter' src='icon-filter.svg'></img>
              </th>
            </table>
        </MDBCardBody>
      </MDBCard>

      <MDBCard className='bg-image d-flex align-items-center' style={{backgroundImage: 'url(/MM_BG_Pure_Heart_Valley_Sheriffs_Headquarters.png)', width: '100%', height: '50vh', margin: 'auto', marginTop: '1%', borderRadius: 10, backgroundColor:'#102064' }}>

        {/* <MDBCardBody> */}
          {/* <div className='row' style={{}}>
            <div className='col-md-6 pt-4'>{surveyDisplay()}</div>
            <div className='col-md-6 pt-4'>{surveyDisplay()}</div>
          </div>
          <div className='row'>
            <div className='col-md-6 pt-4'>{surveyDisplay()}</div>
            <div className='col-md-6 pt-4'>{surveyDisplay()}</div>
          </div> */}

          <div className="overflow-auto p-3" style={{ height:'100%', flexDirection: 'row', display: 'flex', overflowX:'hidden', overflowY:'scroll'}}>
            {surveyDisplay()}
          </div>

        {/* </MDBCardBody> */}
      </MDBCard>
      
    </div>

  );
}
