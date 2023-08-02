'use client'
import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import './App.css';

import pb from '../components/pocketbase';
import useLogout from '../hooks/useLogout';
import dbQuery from '../components/userdbQuery';

import { useState, useEffect, use } from 'react';

import {
    MDBBtn,
    MDBContainer,
    MDBCard, MDBCardBody,
    MDBDropdown, MDBDropdownMenu, MDBDropdownToggle, MDBDropdownItem

} from 'mdb-react-ui-kit';

import Navbar from '../navbar';
import { data } from 'autoprefixer';
import { Record } from 'pocketbase';

export default function ManagementPage() {
    const [isClient, setIsClient] = useState(false); // client state to avoid hydration mismatch
    const logout = useLogout(); // logout function
    const { isLoggedin, userdb } = dbQuery(); // user database query function
    const [numOfSurveyPublished, setNumOfSurveyPublished] = useState(0);
    const [numOfSurveyCompleted, setNumOfSurveyCompleted] = useState(0);
    const [numOfSurveyInProgress, setNumOfSurveyInProgress] = useState(0);
    const [numOfSurveyInApprove, setNumOfSurveyInApprove] = useState(0);
    const [numOfSurveyResponseRatio, setNumOfSurVeyResponseRatio] = useState("Null");
    const [numOfSurveyViews, setNumOfSurVeyViews] = useState(0);
    const [numOfSurveyReports, setNumOfSurVeyReports] = useState(0);

    // will be called when hydration occurs
    useEffect(() => {
        setIsClient(true);
    }, [])

    async function getAllSurveyFromUser() {
        // fetch all surveys with filter userid as current user
        const records = await pb.collection('surveys').getFullList({
            filter: "userid = '" + userdb?.id + "'",
        });
        setNumOfSurveyPublished(records.length);
        
        // loop through all surveys and count the stats
        let completed = 0;
        let inprogress = 0;
        let inapprove = 0;
        let filled = 0;
        let views = 0;
        let reports = 0;
        records.forEach((record: Record) => {
            if (record['currentrecord'] == record['targetrecord']) completed++;
            if (record['currentrecord'] < record['targetrecord'] && record['isactive'] == true) inprogress++;
            if (record['isapprove'] == false) inapprove++;
            filled += record['currentrecord'];
            views += record['views'];
            if (record['currentrecord'] < record['targetrecord'] && record['isactive'] == false && record['isapprove'] == false) reports++;
        });
        setNumOfSurveyCompleted(completed);
        setNumOfSurveyInProgress(inprogress);
        setNumOfSurveyInApprove(inapprove);
        setNumOfSurVeyResponseRatio(((filled/views)*100).toFixed(2));
        setNumOfSurVeyViews(views);
        setNumOfSurVeyReports(reports);
        return records;
    }

    // run once when component is mounted
    useEffect(() => {
        const surveyList = getAllSurveyFromUser();
        console.log(surveyList);
    }, []);
    

    return (
        <div>
            {/* Navbar */}
            <Navbar />

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
            <div className="container-fluid row" style={{ backgroundColor: '#FFFFFF', position: 'relative', height: '300px' }}>
                {/* User profile picture */}
                <div className="me-auto ms-24 col-xl-2 col-lg-3 col-md-4 col-sm-5 d-flex align-items-center">
                    <img src="/user.svg" className="card-img-top" alt="User avatar" />
                </div>
                {/* Banner */}
                <div className="ms-auto col-xl-8 col-lg-7 col-md-6 col-sm-5 d-flex align-items-center">
                    <div>
                        <span className="d-flex align-items-center ms-3 fs-2 fw-bold">Xin chào, {isClient ? userdb?.name : "Username"}!</span>
                        <span className="d-flex align-items-center ms-3 fs-4">Let’s we help you embrace your surveys’ performance!</span>
                    </div>
                </div>
            </div>
            {/* Dashboard summary banner */}
            <div className="container-fluid" style={{ backgroundColor: '#102064', position: 'relative'}}>
                {/* Paddling */}
                <div className="d-flex align-items-center justify-content-center" style={{ position: 'relative', height:'40px' }}/>
                <div className="d-flex align-items-center justify-content-center" style={{ position: 'relative', top:'10%' }}>
                    <span className="d-flex align-items-center ms-3 fs-2 fw-bold" style={{ color: '#FEBE4D' }}>In total, you have</span>
                    <span className="d-flex align-items-center ms-3 fs-1 fw-bold" style={{ color: '#FFFFFF' }}> {isClient ? numOfSurveyPublished : "Null"} </span>
                    <span className="d-flex align-items-center ms-3 fs-2 fw-bold" style={{ color: '#FEBE4D' }}>survey that have uploaded.</span>
                </div>
                <div className="d-flex align-items-center justify-content-center" style={{ position: 'relative', height:'20px' }}/>
                <div className="d-flex align-items-center justify-content-center" style={{ position: 'relative', top:'10%' }}>
                    <span className="d-flex align-items-center ms-3 fs-1 fw-bold" style={{ color: '#FFFFFF' }}> {isClient ? numOfSurveyCompleted : "Null"} </span>
                    <span className="d-flex align-items-center ms-3 fs-2 fw-bold" style={{ color: '#FEBE4D' }}>achieved goal - completed.</span>
                </div>
                <div className="d-flex align-items-center justify-content-center" style={{ position: 'relative', height:'20px' }}/>
                <div className="d-flex align-items-center justify-content-center" style={{ position: 'relative', top:'10%' }}>
                    <span className="d-flex align-items-center ms-3 fs-1 fw-bold" style={{ color: '#FFFFFF' }}> {isClient ? numOfSurveyInProgress : "Null"} </span>
                    <span className="d-flex align-items-center ms-3 fs-2 fw-bold" style={{ color: '#FEBE4D' }}>in collecting process.</span>
                </div>
                <div className="d-flex align-items-center justify-content-center" style={{ position: 'relative', height:'20px' }}/>
                <div className="d-flex align-items-center justify-content-center" style={{ position: 'relative', top:'10%' }}>
                    <span className="d-flex align-items-center ms-3 fs-1 fw-bold" style={{ color: '#FFFFFF' }}> {isClient ? numOfSurveyInApprove : "Null"} </span>
                    <span className="d-flex align-items-center ms-3 fs-2 fw-bold" style={{ color: '#FEBE4D' }}>in approving process.</span>
                </div>
                <div className="d-flex align-items-center justify-content-center" style={{ position: 'relative', height:'40px' }}/>
            </div>
            {/* Dashboard summary detail */}
            <div className="me-auto ms-auto container-fluid row" style={{ backgroundColor: '#102064', position: 'relative', height:'600px' }}>
                {/* Survey history short: 1/3 of screen width*/}
                <div className="col-4">
                    {/* Scrollable card items list */}
                    <div className="overflow-auto p-3" style={{ maxHeight:'500px' }}>
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
                <div className="col-8" style={{ position: 'relative', height:'500px', top:'3%' }}>
                    {/* Survey performance summary */}
                    <div className="row">
                        <div className="col-4">
                            <div className="card text-center mb-2" style={{ backgroundColor: '#CEEDF6'}}>
                                <div className="card-body">
                                    <p className="card-text fs-1 fw-bold" style={{ color: '#FEBE4D' }}>{isClient ? numOfSurveyResponseRatio : "Null"}%</p>
                                    <p className="card-text fs-3 fw-bold" style={{ color: '#102064' }}>Response rate</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-4">
                            <div className="card text-center mb-2" style={{ backgroundColor: '#CEEDF6'}}>
                                <div className="card-body">
                                    <p className="card-text fs-1 fw-bold" style={{ color: '#FEBE4D' }}>{isClient ? numOfSurveyViews : "Null"}</p>
                                    <p className="card-text fs-3 fw-bold" style={{ color: '#102064' }}>Survey view</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-4">
                            <div className="card text-center mb-2" style={{ backgroundColor: '#CEEDF6'}}>
                                <div className="card-body">
                                    <p className="card-text fs-1 fw-bold" style={{ color: '#FEBE4D' }}>{isClient ? numOfSurveyReports : "Null"}</p>
                                    <p className="card-text fs-3 fw-bold" style={{ color: '#102064' }}>Related report</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* Survey performance detail */}
                    <div className="mt-3 card" style={{ backgroundColor: '#CEEDF6'}}>
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


