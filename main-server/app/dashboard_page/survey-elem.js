"use client";
import "mdb-react-ui-kit/dist/css/mdb.min.css";
import "./App.css";
// import pb from './components/pocketbase';
import {
  MDBBtn,
  MDBContainer,
  MDBCard,
  MDBCardBody,
  MDBInput,
  MDBCheckbox,
} from "mdb-react-ui-kit";

export default function surveyDisplay() {
  async function getAllSurveyFromUser() {
    // if (isFetched == false) {
    //     // fetch all surveys with filter userid as current user
    //     const records = await pb.collection('Survey').getFullList({
    //         filter: "userid = '" + userdb?.id + "'",
    //     });
    // }
  }

  return (
    <div>
      <MDBContainer>
        <div id="survey-element">
          <table>
            <th>
              <h1 style={{ float: "left" }}>Survey name</h1>
            </th>
            <th>
              <p style={{ float: "right" }}>NULL points</p>
            </th>
          </table>
          <p style={{ textAlign: "justify" }}>
            Your description shall be displayed in this part and shall not go
            outside this. If the description is too long,...
          </p>
          <button id="skip-btn">Skip</button>
          <button id="takesurvey-btn">Take Survey</button>
        </div>
      </MDBContainer>
    </div>
  );
}
