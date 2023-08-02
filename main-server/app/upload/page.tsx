'use client'
import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import './App.css';

import Navbar from '../navbar';

export default function UploadPage() {
    return (
        <div>
            {/* Navbar */}
            <Navbar />

            {/* Main content */}
            {/* Two Buttons */}
            <div className="container-fluid" style={{ backgroundColor: '#CEEDF6', position: 'relative', color: '#102064', height: '50'}}>
               
                <h2 className="d-flex pt-4 pb-1 justify-content-center fs-1 fw-bold">Survey Creator Tool</h2>

                <div className="row d-flex justify-content-center">
                    <div className='col-4'>
                    <div className="d-flex py-3 justify-content-center" >
                        <div className="btn btn-primary btn-rounded" style={{ backgroundColor: '#102064'}}>
                            <label className="form-label m-1 mb-1 fs-6 fw-bold" style={{color: "#FEA200"}} htmlFor="button1">Upload Own Survey</label>
                            <input type="file" className="form-control d-none" id="button1" />
            
                        </div>
                    </div>
                    </div>
                    <div className='col-4'>
                        <div className="d-flex py-3 justify-content-center" >
                            <div className="btn btn-primary btn-rounded" style={{ backgroundColor: '#102064'}}>
                                <label className="form-label m-1 mb-1 fs-6 fw-bold" style={{color: "#FEA200"}}>Create New Survey</label>
                                <input type="button"/>
                
                            </div>
                        </div>
                    </div>
                </div>
                
            </div>

            {/* Main content */}
        
            <div className="container-fluid mt-5 py-5" style={{ backgroundColor: '#CEEDF6', color: '#102064'}}>
                <form>
                    <div className="d-flex justify-content-center align-items-center h-100">
                    
                    <div className='text-center pb-1'>
                        <span><h6 className='className="mb-0 fs-3 fw-bold'>Link your survey here!</h6></span>
                        <span><p>Copy the URL of your survey and verify the information to ensure that others can know about your survey!</p></span>
                        <input type="url" className="form-control form-control" placeholder='Paste your URL!' required/>
                    </div>
                </div>

                <div>
                    <div className="row align-items-center pt-5 pb-3">
                                <div className="col-md-3 ps-5">
                                    <h6 className="mb-0 fs-4 fw-bold">Survey description</h6>
                                </div>
                                <div className="col-md-4 pe-5">
                                    <textarea className="form-control form-control" rows={3}/>
                                </div>

                    </div>
                    <div className="row align-items-center py-4">
                                <div className="col-md-3 ps-5">
                                    <h6 className="mb-0 fs-4 fw-bold">Number of questions</h6>
                                </div>
                                <div className="col-md-4 pe-5">
                                    <input type='number' className="form-control form-control" required/>
                                </div>

                    </div>
                    <div className="row align-items-center py-4">
                                <div className="col-md-3 ps-5">
                                    <h6 className="mb-0 fs-4 fw-bold">Credit points worth</h6>
                                </div>
                                <div className="col-md-4 pe-5">
                                    <input type='number' className="form-control form-control"/>
                                </div>

                    </div>
                    <div className="row align-items-center py-4">
                                <div className="col-md-3 ps-5">
                                    <h6 className="mb-0 fs-4 fw-bold">Goal of response</h6>
                                </div>
                                <div className="col-md-4 pe-5">
                                    <input type='text' className="form-control form-control"/>
                                </div>

                    </div>
                    <p className="d-flex justify-content-center fs-6">Notices: Ensure that you have carefully provided accurate information, as respondents can report incorrect information, which
    may impact your account status.</p>

                    <div className="d-flex py-3 justify-content-center" >
                        <button type="submit" className="btn btn-lg btn-rounded ms-3" style={{backgroundColor: '#102064', color: '#FEA200'}}>Release it!</button>
                    </div>
                </div>
                </form>
             
            </div>

        </div>
    )
}