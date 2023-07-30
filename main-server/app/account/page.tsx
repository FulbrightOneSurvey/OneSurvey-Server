'use client'
import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import './App.css';
import {
    MDBBtn,
    MDBContainer,
    MDBCard, MDBCardBody,
    MDBDropdown, MDBDropdownMenu, MDBDropdownToggle, MDBDropdownItem,

} from 'mdb-react-ui-kit';

export default function AccountPage() {
    return (
        <div>
            {/* navbar using MDB, from left to right: menu icon, brand logo, get null credit button, div for user coin, div for user response */}
            <nav className="navbar navbar-dark" style={{ backgroundColor: '#102064' }}>
                <div className="container-fluid">
                    <a className="navbar-brand ms-3" href="#">
                        <img
                            src="/menu.svg"
                            height="20"
                            alt="Menu button"
                            loading="lazy"
                        />
                    </a>
                    <a className="navbar-brand" href="#">
                        <img
                            src="/branding.svg"
                            height="20"
                            alt="Brand Logo"
                            loading="lazy"
                        />
                    </a>
                    <a className="navbar-brand me-auto" href="/management">
                        {/* Button style banner */}
                        <button type="button" className="btn btn-warning btn-rounded" color="#F9A31A">Get null credit to complete!</button>
                    </a>
                    <a className="navbar-brand me-auto" href="#">
                        {/* User coin */}
                        <h5 className="me-3 mb-2 mb-lg-0 fw-bold"><p>
                            Credit points <br></br>
                            Null
                        </p></h5>
                        <img src="/coin.svg" height="20" alt="Coin Logo" loading="lazy" />
                    </a>
                    <a className="navbar-brand me-auto" href="#">
                        {/* User response */}
                        <h5 className="me-3 mb-2 mb-lg-0 fw-bold"><p>
                            Respondants <br></br>
                            Null / Null
                        </p></h5>
                        <img src="/response.svg" height="20" alt="Response Logo" loading="lazy" />
                    </a>
                    <a className="navbar-brand" href="#">
                        {/* User name */}
                        <h3 className="mb-2 mb-lg-0 fw-bold"><p>
                            User name <br></br>
                        </p></h3>
                    </a>
                    <a className="navbar-brand" href="/account">
                        {/* User avatar */}
                        <img src="/user.svg" height="20" alt="Avatar Logo" loading="lazy" />
                    </a>
                    <MDBDropdown>
                        {/* Notification button NOTE: has to use it the react way */}
                        <MDBDropdownToggle tag="a">
                            <span className="badge rounded-pill badge-notification bg-danger fs-6">8</span>
                            <img src="/notification.svg" height="20" alt="Notification Logo" loading="lazy" />
                        </MDBDropdownToggle>
                        <MDBDropdownMenu>
                            {/* Today */}
                            <MDBDropdownItem classNameName='h6 mt-3 ms-3 fw-bold'>Today</MDBDropdownItem>

                            <MDBDropdownItem link>Never gonna give you up <b>4:17PM</b></MDBDropdownItem>
                            <MDBDropdownItem link>Never gonna let you down <b>4:18PM</b></MDBDropdownItem>
                            <MDBDropdownItem link>Never gonna run around <b>4:19PM</b></MDBDropdownItem>
                            <MDBDropdownItem link>And desert you <b>4:20PM</b></MDBDropdownItem>

                            {/* Yesterday */}
                            <MDBDropdownItem classNameName='h6 mt-3 ms-3 fw-bold'>Yesterday</MDBDropdownItem>

                            <MDBDropdownItem link>Never gonna make you cry <b>8:29PM</b></MDBDropdownItem>
                            <MDBDropdownItem link>Never gonna say goodbye <b>8:30PM</b></MDBDropdownItem>
                            <MDBDropdownItem link>Never gonna tell a lie <b>8:31PM</b></MDBDropdownItem>
                            <MDBDropdownItem link>And hurt you <b>8:32PM</b></MDBDropdownItem>
                        </MDBDropdownMenu>
                    </MDBDropdown>
                </div>
            </nav>

            {/* Main content */}
            {/* background image */}
            <div className="bg-image" style={{ backgroundImage: 'url(/MM_BG_Pure_Heart_Valley_Sheriffs_Headquarters.png)', height: '50vh' }}>
                {/* <div className="mask" style={{ backgroundColor: 'rgba(0, 0, 0, 0.1)' }}></div> */}
            </div>
            {/* User info container */}
            <div className="container-fluid" style={{ backgroundColor: '#FFFFFF', position: 'relative', height: '20vh' }}>
                {/* User profile picture offset to overlap with background image */}
                <div className="card rounded-circle ms-20 col-3" style={{ backgroundColor: '#102064', width: '30vh', position: 'absolute', top: '-70%' }}>
                    <img src="/user.svg" className="card-img-top" alt="User name" />
                </div>
                {/* User info card next to profile picture */}
                <div className='card ms-auto col-xl-9 col-lg-7 col-md-6 col-sm-5' style={{ position: 'relative', height: '15vh' }}>
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
            
            <div className='container-fluid' style={{ backgroundColor: '#102064', position: 'relative', color: '#FEA200'}}>
                <hr className="mx"></hr>
                <h2 className='d-flex justify-content-center fs-1 fw-bold'>Setup your account here</h2>
                <hr className="mx"></hr>
            </div>
        
            <div className="container py-5 h-100">
                <div className='row d-flex justify-content-center align-items-center h-100'>
                    <div className='card' style={{backgroundColor: '#CEEDF6', borderRadius: '20px'}}>
                        <div className='card-body'>
                            <div className='row align-items-center pt-4 pb-3'>
                                <div className='col-md-3 ps-5'>
                                    <h6 className="mb-0 fs-3 fw-bold">Full name</h6>
                                </div>
                                <div className="col-md-9 pe-5">
                                    <input type="text" className="form-control form-control-lg" />
                                </div>
                            </div>
                            <hr className="mx-n3"></hr>

                            <div className='row align-items-center py-3'>
                                <div className='col-md-3 ps-5'>
                                    <h6 className="mb-0 fs-3 fw-bold">Email</h6>
                                </div>
                                <div className="col-md-9 pe-5">
                                    <input type="email" className="form-control form-control-lg" placeholder='xxx@fulbright.edu.vn' required/>
                                </div>
                            </div>
                            <hr className="mx-n3"></hr>

                            <div className='row align-items-center py-3'>
                                <div className='col-md-3 ps-5'>
                                    <h6 className="mb-0 fs-3 fw-bold">Contact info</h6>
                                </div>
                                <div className="col-md-9 pe-5">
                                    <input type="tel" className="form-control form-control-lg" placeholder='(+84)' pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}"/>
                                </div>
                            </div>
                            <hr className="mx-n3"></hr>

                            <div className='row align-items-center py-3'>
                                <div className='col-md-3 ps-5'>
                                    <h6 className="mb-0 fs-3 fw-bold">Birthday</h6>
                                </div>
                                <div className="col-md-9 pe-5">
                                    <input type="date" className="form-control form-control-lg" placeholder='(+84)'/>
                                </div>
                            </div>
                            <hr className="mx-n3"></hr>
                            
                            <div className='row align-items-center py-3'>
                                <div className='col-md-3 ps-5'>
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
                            <div className='d-flex justify-content-end px-5 py-2 pt-3'>
                                <button type="reset" className="btn btn-lg" style={{backgroundColor: '#FEA200', color: '#102064'}}>Reset all</button>
                                <button type="submit" className="btn btn-lg ms-3" style={{backgroundColor: '#102064', color: '#FEA200'}}>Save changes</button>
                            </div>
                        </div>
                    </div>
                    

                </div>
                
                
            </div>

        </div>
    )
}


// async function to retrieve user data from DB
// async function getUserData() {
//     const response = await fetch('http://127.0.0.1:8090/api/collections/user/records?page=1%perPage=30')
//     const data = await response.json();
//     // return data inside the items array
//     return data.items;
// }

// actual main function
// export default async function AccountPage() {
//     const userData = await getUserData(); // name, email, datejoined, passwdhash
//     return (
//         <div>
//             <h1>Account</h1>
//             {/* // loop over userData and display it */}
//             {userData.map((user) => (
//                 <div>
//                     <h2>{user.name}</h2>
//                     <h2>{user.email}</h2>
//                     <h2>{user.datejoined}</h2>
//                     <h2>{user.passwdhash}</h2>
//                 </div>
//             ))}
//         </div>
//     )
// }



