"use client";
import "mdb-react-ui-kit/dist/css/mdb.min.css";
import "./App.css";
import pb from '../components/pocketbase';
import userdbQuery from '../components/userdbQuery';
import { Record } from 'pocketbase';
import { useState, useEffect, use } from 'react';
import {
  MDBBtn,
  MDBContainer,
  MDBCard,
  MDBCardBody,
  MDBInput,
  MDBCheckbox,
} from "mdb-react-ui-kit";
import { forEachChild } from "typescript";

export default function surveyDisplay() {
  const [isFetched, setIsFetched] = useState(false); // fetched state to avoid fetching multiple times
  const { isLoggedin, userdb } = userdbQuery(); // user database query function
  async function getAllSurveyFromUser() {
    if (isFetched == false) {
        // fetch all surveys with filter userid as current user
        const records = await pb.collection('Survey').getFullList({
            filter: "userid = '" + userdb?.id + "'",
        });
    }

    // records.forEach((record:Record) => {
        
    // });
  }

  return (
    <div>
      <MDBCard>
        <MDBCardBody>
            <div id="survey-element">
                <table>
                <th className="col-4">
                    <h1 className="fs-3" style={{ float: "left" }}>Survey name</h1>
                </th>
                <th className="col-3">
                    <p className="fs-7" style={{ float: "right" }}>NULL points</p>
                </th>
                </table>
                <p style={{ textAlign: "justify", margin:'3% 5%'}}>
                Your description shall be displayed in this part and shall not go
                outside this. If the description is too long,...
                </p>
                <button className="col-2" id="skip-btn">Skip</button>
                <button className="col-5" id="takesurvey-btn">Take Survey</button>
            </div>
        </MDBCardBody>
      </MDBCard>
    </div>
  );
}
