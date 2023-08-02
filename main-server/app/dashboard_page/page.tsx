
'use client'
import './App.css';
import Navbar from '../navbar';
import { lazy } from 'react';
import pb from '../components/pocketbase';
import surveyDisplay from './surveyDisplay';
import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import {
  MDBBtn,
  MDBContainer,
  MDBCard,
  MDBCardBody,
  MDBInput,
  MDBCheckbox,
} from 'mdb-react-ui-kit';

export default function Dashboard() {
  return (
    <MDBContainer>
    <Navbar />
    <div className="App">
      <div id="search-and-filter">
        <table id='search-and-filter-box'>
          <th id="greeting-diag" style={{fontFamily:'Montserrat'}}><h1>Hello, Username!</h1></th>
          <th>
            <div id="search-bar" style={{ float: 'right' }}>
              <input value={"Search here"} style={{ borderRadius: 10, height: '5vh', width: '40vw', margin: '1%', padding: '0.5% 1.2%' }}></input>
            </div>
          </th>
          <th style={{width: "5vw", float: 'right'}}>
            <img alt='Filter' src='icon-filter.svg'></img>
          </th>
        </table>
      </div>

      <MDBCard className='d-flex align-items-center' style={{ width: '100%', height: '30rem', margin: 'auto', marginTop: '5%', borderRadius: 10 }}>
        <MDBCardBody>
          <div className='row' style={{}}>
            <div className='col-md-6'>{surveyDisplay()}</div>
            <div className='col-md-6'>{surveyDisplay()}</div>
          </div>
          <div className='row'>
            <div className='col-md-6'>{surveyDisplay()}</div>
            <div className='col-md-6'>{surveyDisplay()}</div>
          </div>
        </MDBCardBody>
      </MDBCard>

    </div></MDBContainer>
  );
}
