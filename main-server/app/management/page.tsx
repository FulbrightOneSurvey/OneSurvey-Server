'use client'
import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import './App.css';
import {
    MDBBtn,
    MDBContainer,
    MDBCard, MDBCardBody,
    MDBDropdown, MDBDropdownMenu, MDBDropdownToggle, MDBDropdownItem

} from 'mdb-react-ui-kit';

export default function ManagementPage() {
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
            <div className="bg-image container-fluid d-flex align-items-center justify-content-center" style={{ backgroundImage: 'url(/Ultraclops_212.png)', height: '50vh' }}>
                {/* <div className="mask" style={{ backgroundColor: 'rgba(0, 0, 0, 0.1)' }}></div> */}
                {/* Card in the middle */}
                <div className="card text-center" style={{ backgroundColor: '#CEEDF6' }}>
                    <div className="card-body">
                        <span className="card-text fs-1 fw-bold" style={{ color: '#FEBE4D' }}>SURVEY CREATOR </span>
                        <span className="card-text fs-1 fw-bold">MANAGEMENT</span>
                    </div>
                </div>
            </div>
            {/* User welcome banner */}
            <div className="container-fluid" style={{ backgroundColor: '#FFFFFF', position: 'relative', height: '35vh' }}>
                {/* User profile picture */}
                <div className='me-auto ms-24 col-xl-2 col-lg-3 col-md-4 col-sm-5' style={{ position: 'relative', height: '15vh' }}>
                    <img src="/user.svg" className="card-img-top" alt="User avatar" />
                </div>
                {/* Banner */}
                <div className='ms-auto col-xl-8 col-lg-7 col-md-6 col-sm-5' style={{ backgroundColor: '#FFFFFF', position: 'relative', top:'-25%' }}>
                    <div className="mt-4 m">
                        <span className="d-flex align-items-center ms-3 fs-2 fw-bold">Xin chào, User name!</span>
                        <span className="d-flex align-items-center ms-3 fs-4">Let’s we help you embrace your surveys’ performance!</span>
                    </div>
                </div>
            </div>
            {/* Dashboard summary banner */}
            <div className="container-fluid" style={{ backgroundColor: '#102064', position: 'relative'}}>
                {/* Paddling */}
                <div className="d-flex align-items-center justify-content-center" style={{ position: 'relative', height:'4vh' }}/>
                <div className="d-flex align-items-center justify-content-center" style={{ position: 'relative', top:'10%' }}>
                    <span className="d-flex align-items-center ms-3 fs-2 fw-bold" style={{ color: '#FEBE4D' }}>In total, you have</span>
                    <span className="d-flex align-items-center ms-3 fs-1 fw-bold" style={{ color: '#FFFFFF' }}> Null </span>
                    <span className="d-flex align-items-center ms-3 fs-2 fw-bold" style={{ color: '#FEBE4D' }}>survey that have uploaded.</span>
                </div>
                <div className="d-flex align-items-center justify-content-center" style={{ position: 'relative', height:'2vh' }}/>
                <div className="d-flex align-items-center justify-content-center" style={{ position: 'relative', top:'10%' }}>
                    <span className="d-flex align-items-center ms-3 fs-1 fw-bold" style={{ color: '#FFFFFF' }}> Null </span>
                    <span className="d-flex align-items-center ms-3 fs-2 fw-bold" style={{ color: '#FEBE4D' }}>achieved goal - completed.</span>
                </div>
                <div className="d-flex align-items-center justify-content-center" style={{ position: 'relative', height:'2vh' }}/>
                <div className="d-flex align-items-center justify-content-center" style={{ position: 'relative', top:'10%' }}>
                    <span className="d-flex align-items-center ms-3 fs-1 fw-bold" style={{ color: '#FFFFFF' }}> Null </span>
                    <span className="d-flex align-items-center ms-3 fs-2 fw-bold" style={{ color: '#FEBE4D' }}>in collecting process.</span>
                </div>
                <div className="d-flex align-items-center justify-content-center" style={{ position: 'relative', height:'2vh' }}/>
                <div className="d-flex align-items-center justify-content-center" style={{ position: 'relative', top:'10%' }}>
                    <span className="d-flex align-items-center ms-3 fs-1 fw-bold" style={{ color: '#FFFFFF' }}> Null </span>
                    <span className="d-flex align-items-center ms-3 fs-2 fw-bold" style={{ color: '#FEBE4D' }}>in approving process.</span>
                </div>
                <div className="d-flex align-items-center justify-content-center" style={{ position: 'relative', height:'4vh' }}/>
            </div>
            {/* Dashboard summary detail */}
            <div className="me-auto ms-auto container-fluid row" style={{ backgroundColor: '#102064', position: 'relative', height:'1000px' }}>
                {/* Survey history short: 1/3 of screen width*/}
                <div className="col-4">
                    {/* Scrollable card items list */}
                    <div className="overflow-auto p-3" style={{ maxHeight:'65vh' }}>
                        <div className="card text-center mb-2" style={{ backgroundColor: '#CEEDF6' }}>
                            <div className="card-body row">
                                <span className="card-text fs-3 fw-bold col-8" style={{ color: '#102064' }}>Survey name 1</span>
                                <span className="card-text fs-6 fw-bold col-4" style={{ color: '#102064' }}>Null credits</span>
                            </div>
                            <button type="button" className="btn btn-warning btn-rounded me-auto ms-auto mb-3" color="#F9A31A">View performance</button>
                        </div>
                        <div className="card text-center mb-2" style={{ backgroundColor: '#CEEDF6' }}>
                            <div className="card-body row">
                                <span className="card-text fs-3 fw-bold col-8" style={{ color: '#102064' }}>Survey name 2</span>
                                <span className="card-text fs-6 fw-bold col-4" style={{ color: '#102064' }}>Null credits</span>
                            </div>
                            <button type="button" className="btn btn-warning btn-rounded me-auto ms-auto mb-3" color="#F9A31A">View performance</button>
                        </div>
                        <div className="card text-center mb-2" style={{ backgroundColor: '#CEEDF6' }}>
                            <div className="card-body row">
                                <span className="card-text fs-3 fw-bold col-8" style={{ color: '#102064' }}>Survey name 3</span>
                                <span className="card-text fs-6 fw-bold col-4" style={{ color: '#102064' }}>Null credits</span>
                            </div>
                            <button type="button" className="btn btn-warning btn-rounded me-auto ms-auto mb-3" color="#F9A31A">View performance</button>
                        </div>
                        <div className="card text-center mb-2" style={{ backgroundColor: '#CEEDF6' }}>
                            <div className="card-body row">
                                <span className="card-text fs-3 fw-bold col-8" style={{ color: '#102064' }}>Survey name 4</span>
                                <span className="card-text fs-6 fw-bold col-4" style={{ color: '#102064' }}>Null credits</span>
                            </div>
                            <button type="button" className="btn btn-warning btn-rounded me-auto ms-auto mb-3" color="#F9A31A">View performance</button>
                        </div>
                    </div>
                </div>
                {/* Survey performance short: 2/3 of screen width*/}
                <div className="col-8" style={{ position: 'relative', height:'65vh', top:'4%' }}>
                    {/* Survey performance summary */}
                    <div className="row" style={{ position: 'relative', height:'175px' }}>
                        <div className="col-4">
                            <div className="card text-center mb-2" style={{ backgroundColor: '#CEEDF6'}}>
                                <div className="card-body">
                                    <p className="card-text fs-1 fw-bold" style={{ color: '#FEBE4D' }}>Null%</p>
                                    <p className="card-text fs-3 fw-bold" style={{ color: '#102064' }}>Response rate</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-4">
                            <div className="card text-center mb-2" style={{ backgroundColor: '#CEEDF6'}}>
                                <div className="card-body">
                                    <p className="card-text fs-1 fw-bold" style={{ color: '#FEBE4D' }}>Null</p>
                                    <p className="card-text fs-3 fw-bold" style={{ color: '#102064' }}>Survey view</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-4">
                            <div className="card text-center mb-2" style={{ backgroundColor: '#CEEDF6'}}>
                                <div className="card-body">
                                    <p className="card-text fs-1 fw-bold" style={{ color: '#FEBE4D' }}>Null</p>
                                    <p className="card-text fs-3 fw-bold" style={{ color: '#102064' }}>Related report</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* Survey performance detail */}
                    <div className="mt-3 card" style={{ backgroundColor: '#CEEDF6', position: 'relative' }}>
                        <div className="card-body row">
                            <p className="card-text fs-3 fw-bold col-8 d-flex align-items-center" style={{ color: '#102064' }}>How has your response goal been so far?</p>
                            <img src="/chart.svg" className="col-4" alt="Survey performance chart" />
                        </div>
                    </div>
                </div>
            </div>
            <div className="container-fluid" style={{ backgroundColor: '#FFFFFF', position: 'relative', height: '100vh' }}/>
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


