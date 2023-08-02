'use client'
import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import './App.css';
import {
    MDBBtn,
    MDBContainer,
    MDBCard, MDBCardBody,
    MDBDropdown, MDBDropdownMenu, MDBDropdownToggle, MDBDropdownItem,

} from 'mdb-react-ui-kit';

import Navbar from '../navbar';

export default function AccountPage() {
    return (
        <div>
            {/* Navbar */}
            <Navbar />

            {/* Main content */}
            {/* background image */}
            <div className="bg-image" style={{ backgroundImage: 'url(/MM_BG_Pure_Heart_Valley_Sheriffs_Headquarters.png)', height: '500px' }}>
                {/* <div className="mask" style={{ backgroundColor: 'rgba(0, 0, 0, 0.1)' }}></div> */}
            </div>
            {/* User info container */}
            <div className="container-fluid" style={{ backgroundColor: '#FFFFFF', position: 'relative', height: '20vh' }}>
                {/* User profile picture offset to overlap with background image */}
                <div className="card rounded-circle ms-20 col-3" style={{ backgroundColor: '#102064', width: '30vh', position: 'absolute', top: '-70%' }}>
                    <img src="/user.svg" className="card-img-top" alt="User name" />
                </div>
                {/* User info card next to profile picture */}
                <div className="card ms-auto col-xl-9 col-lg-7 col-md-6 col-sm-5" style={{ position: 'relative', height: '15vh' }}>
                    <div className="card mt-3 me-1 row" style={{ backgroundColor: '#CEEDF6', position: 'relative', height: '15vh' }}>
                        <p className="card-body d-flex align-items-center ms-3 fs-1 fw-bold col-6">Xin chào, User name!</p>
                        <div className="card-body ms-auto col-6 row">
                            <p className="fs-1 fw-bold col-8">Credit points:</p>
                            <p className="card fs-1 fw-bold col-3">Null</p>
                        </div>
                    </div>
                </div>
                
            </div>
            {/* Account info */}
            
            <div className="container-fluid" style={{ backgroundColor: '#102064', position: 'relative', color: '#FEA200'}}>
                <hr className="mx"></hr>
                <h2 className="d-flex justify-content-center fs-1 fw-bold">Setup your account here</h2>
                <hr className="mx"></hr>
            </div>
        
            <div className="container py-5 h-100">
                <div className="row d-flex justify-content-center align-items-center h-100">
                    <form id='account'>
                    <div className="card" style={{backgroundColor: '#CEEDF6', borderRadius: '20px'}}>
                        <div className="card-body">
                            <div className="row align-items-center pt-4 pb-3">
                                <div className="col-md-3 ps-5">
                                    <h6 className="mb-0 fs-3 fw-bold">Full name</h6>
                                </div>
                                <div className="col-md-9 pe-5">
                                    <input type="text" className="form-control form-control-lg" required/>
                                </div>
                            </div>
                            <hr className="mx-n3"></hr>

                            <div className="row align-items-center py-3">
                                <div className="col-md-3 ps-5">
                                    <h6 className="mb-0 fs-3 fw-bold">Email</h6>
                                </div>
                                <div className="col-md-9 pe-5">
                                    <input type="email" className="form-control form-control-lg" placeholder='xxx@fulbright.edu.vn' required/>
                                </div>
                            </div>
                            <hr className="mx-n3"></hr>

                            <div className="row align-items-center py-3">
                                <div className="col-md-3 ps-5">
                                    <h6 className="mb-0 fs-3 fw-bold">Contact info</h6>
                                </div>
                                <div className="col-md-9 pe-5">
                                    <input type="tel" className="form-control form-control-lg" placeholder='(+84)' pattern="[0-9]{10}}"/>
                                </div>
                            </div>
                            <hr className="mx-n3"></hr>

                            <div className="row align-items-center py-3">
                                <div className="col-md-3 ps-5">
                                    <h6 className="mb-0 fs-3 fw-bold">Birthday</h6>
                                </div>
                                <div className="col-md-9 pe-5">
                                    <input type="date" className="form-control form-control-lg"/>
                                </div>
                            </div>
                            <hr className="mx-n3"></hr>
                            
                            <div className="row align-items-center py-3">
                                <div className="col-md-3 ps-5">
                                    <h6 className="mb-0 fs-3 fw-bold">School</h6>
                                </div>
                                <div className="col-md-9 pe-5">
                                    <select className="select form-control form-control-lg">
                                        <option value="1" disabled>Choose your university</option>
                                        <option value="2">Fulbright University Vietnam</option>
                                        <option value="3">RMIT University Vietnam</option>
                                        <option value="4">Vietnam National University</option>
                                        <option value="4">Other</option>
                                    </select>
                                </div>
                            </div>                            
                            <div className="d-flex justify-content-end px-5 py-2 pt-3">
                                <button type="reset" className="btn btn-lg" style={{backgroundColor: '#FEA200', color: '#102064'}}>Reset all</button>
                                <button type="submit" className="btn btn-lg ms-3" style={{backgroundColor: '#102064', color: '#FEA200'}}>Save changes</button>
                            </div>
                        </div>
                    </div>
                    </form>
                    
                    

                </div>
                
                
            </div>

        </div>
    )
}

