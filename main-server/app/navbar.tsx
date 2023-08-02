import { MDBDropdown, MDBDropdownMenu, MDBDropdownToggle, MDBDropdownItem } from 'mdb-react-ui-kit';

import useLogout from './hooks/useLogout';
import userdbQuery from './components/userdbQuery';

import { useState, useEffect} from 'react';

export default function Navbar() {
    const [isClient, setIsClient] = useState(false); // client state to avoid hydration mismatch
    const logout = useLogout(); // logout function
    const { isLoggedin, userdb } = userdbQuery(); // user database query function

    // will be called when hydration occurs
    useEffect(() => {
        setIsClient(true);
    }, [])

    // logout function
    function onLogout() {
        logout();
        window.location.href = '/login';
    }

    // if user is NOT logged in, redirect to login page
    if (!isLoggedin) {
        alert('Not logged in yet');
        window.location.href = '/login';
    }

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
                    <a className="navbar-brand" href="/dashboard_page">
                        <img
                            src="/branding.svg"
                            height="20"
                            alt="Brand Logo"
                            loading="lazy"
                        
                        />
                    </a>
                    <a className="navbar-brand me-auto" href="/management">
                        {/* Button style banner */}
                        <button type="button" className="btn btn-warning btn-rounded" color="#F9A31A">Go to survey management page</button>
                    </a>
                    <a className="navbar-brand me-auto" href="/upload">
                        {/* Button style banner */}
                        <button type="button" className="btn btn-warning btn-rounded" color="#F9A31A">Create survey</button>
                    </a>
                    <a className="navbar-brand me-auto" href="#">
                        {/* User coin */}
                        <h5 className="me-3 mb-lg-0 fw-bold">
                            Credit points <br></br>
                            {isClient && isLoggedin ? userdb?.points : "Null"}
                        </h5>
                        <img src="/coin.svg" height="20" alt="Coin Logo" loading="lazy" />
                    </a>
                    <a className="navbar-brand me-auto" href="#">
                        {/* User response */}
                        <h5 className="me-3 mb-lg-0 fw-bold">
                            Respondants <br></br>
                            Null / Null
                        </h5>
                        <img src="/response.svg" height="20" alt="Response Logo" loading="lazy" />
                    </a>
                    <a className="navbar-brand" href="#">
                        {/* User name */}
                        <h3 className="mb-lg-0 fw-bold">
                            {isClient && isLoggedin ? userdb?.name : "Null"}
                        </h3>
                    </a>
                    <MDBDropdown className="me-3">
                        {/* Note that this is also a drop down menu for 2 options: go to account management page or to logout */}
                        <MDBDropdownToggle tag="a">
                            {/* User avatar */}
                            <img src="/user.svg" height="20" alt="Avatar Logo" loading="lazy" />
                        </MDBDropdownToggle>
                        <MDBDropdownMenu>
                            <MDBDropdownItem link href="/dashboard_page">Dashboard</MDBDropdownItem>
                            <MDBDropdownItem divider />
                            <MDBDropdownItem link href="/account">Account management</MDBDropdownItem>
                            <MDBDropdownItem divider />
                            <MDBDropdownItem link href='/management'>Creator management</MDBDropdownItem>
                            <MDBDropdownItem divider />
                            <MDBDropdownItem link onClick={onLogout}>Logout</MDBDropdownItem>
                        </MDBDropdownMenu>
                    </MDBDropdown>
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
        </div>
    )
}