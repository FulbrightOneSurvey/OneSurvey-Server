"use client";
import "mdb-react-ui-kit/dist/css/mdb.min.css";
import "./App.css";
import pb from "../components/pocketbase";
import userdbQuery from "../components/userdbQuery";
import { Record } from "pocketbase";
import { useState, useEffect, use } from "react";
import {
  MDBBtn,
  MDBContainer,
  MDBCard,
  MDBCardBody,
  MDBInput,
  MDBCheckbox,
} from "mdb-react-ui-kit";

export default function surveyDisplay() {
  const [isFetched, setIsFetched] = useState(false); // fetched state to avoid fetching multiple times
  const { isLoggedin, userdb } = userdbQuery(); // user database query functionconst [isClient, setIsClient] = useState(false); // client state to avoid hydration mismatch
  const [surveyDB, setSurveyDB] = useState<Record[]>([]);
  const [numOfSurveyPublished, setNumOfSurveyPublished] = useState(0);
  const [isClient, setIsClient] = useState(false); // client state to avoid hydration mismatch
  var runOnce = false;

  useEffect(() => {
    setIsClient(true);
  }, []);

  async function getAllSurveyFromUser() {
    if (!runOnce) {
      runOnce = true;
      // fetch all surveys with filter userid as current user
      const records = await pb.collection("surveys").getFullList({
        // filter: "userid = '" + userdb?.id + "'", // turn off filter for this
      });
      setSurveyDB(records);
      setNumOfSurveyPublished(records.length);
      setIsFetched(true);
    }
  }

  getAllSurveyFromUser();

  return (
    <div>
      <div id="survey-element">
        {isClient ? (
          [...Array(numOfSurveyPublished)].map((item, i) => {
            return (
              // pull data from SurveyDB for each card
              <MDBCard className="mb-2">
                <MDBCardBody>
                  <table>
                    <th className="col-4">
                      <h1 className="fs-3" style={{ float: "left" }}>
                        {surveyDB[i]?.name}
                      </h1>
                    </th>
                    <th className="col-3">
                      <p className="fs-7" style={{ float: "right" }}>
                        {surveyDB[i]?.surveycredit} credits
                      </p>
                    </th>
                  </table>

                  <p style={{ textAlign: "justify", margin: "3% 5%" }}>
                    {surveyDB[i]?.description} credits
                  </p>
                  <button className="col-2" id="skip-btn">
                    Skip
                  </button>
                  <button
                    className="col-5"
                    id="takesurvey-btn"
                    onClick={() =>
                      window.open(surveyDB[i]?.surveylink, "_blank")
                    }
                  >
                    Take survey
                  </button>
                </MDBCardBody>
              </MDBCard>

            );
          })
        ) : (
          <div> Error: cannot fetch survey </div>
        )}
      </div>
    </div>
  );
}
