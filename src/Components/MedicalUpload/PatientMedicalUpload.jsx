//require("dotenv").config();
import React, { useRef } from "react";
import { Link } from "react-router-dom";
import "./PatientMedicalUpload.css";
import WhiteLogo from "../../assets/WhiteLogo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faThLarge, faUserGraduate, faClock, faUpload, faCalendar, faHandHoldingUsd, faCog, faQuestion, faCloudUpload, faDownload, faSync,} from "@fortawesome/free-solid-svg-icons";
import PatientProfileImage from "../../assets/PatientProfileImage.png";

const DoctorMedicalUpload = () => {
  return (
    <div className='PatientHistory'>
      <div className='TheDoctorProfileLinks'>
        <div className="TheProfileLogo">
          <img className="navLogo" src={WhiteLogo} alt="The Medic-Safe Logo" />
        </div>
        <div className='DoctorFirstLinks'>
        <Link to="/PatientDashboard">
              <button key="Dashboard"><FontAwesomeIcon icon={faThLarge} /> Dashboard</button><br />
            </Link>
            <Link to="/PatientProfile">
              <button key="Profile"><FontAwesomeIcon icon={faUserGraduate} /> Profile</button><br />
            </Link>
            <Link to="/PatientMedicalUpload">
              <button key="MedicalHistory"><FontAwesomeIcon icon={faClock} /> Medical History</button><br />
            </Link>
            <Link to="/HealthEdu">
              <button key="HealthEdu"><FontAwesomeIcon icon={faCalendar} /> Health Education</button><br />
            </Link>
        </div>
        <div className='DoctorProfileSecondLinks'>
          <Link to="/Privacy_Security">
            <button key="PrivacyPolicy"><FontAwesomeIcon icon={faHandHoldingUsd} /> Privacy Policy</button><br />
          </Link>
          <Link to="/Settings">
            <button key="Settings"><FontAwesomeIcon icon={faCog} /> Settings</button><br />
          </Link>
          <Link to="/LogOut">
            <button key="Logout"><FontAwesomeIcon icon={faQuestion} /> Logout</button><br />
          </Link>
        </div>
      </div>
      <div className="TheDoctorDetails">
        <div className='SearchDetails'>
          <input
            type="text"
            placeholder="Search"
            className="TextInput"
          />
          <div className='SideBarImage'>
            <img className="PatientProfileImg" src={PatientProfileImage} alt="Doctor Profile Image" />
          </div>
        </div>
        <div className="TheUploadDetails">
          <h1>
            Dashboard/<h2>Medical Upload</h2>
          </h1>
          <div className="TheUploadWrapper">
            <div className="HistoryUploads">
              <h2>Uploaded documents</h2>
              <ul>
                <li>Documents <h3>Records</h3></li>
                <li>Scan <h4>6</h4></li>
                <li>X-Ray <h4>2</h4></li>
                <li>Hepatitis <h4>1</h4></li>
                <li>Physical Screening <h6>2</h6></li>
                <li>Biopsy <h4>1</h4></li>
                <li>Pregnancy <h4>2</h4></li>
                <li>Blood Test <h4>1</h4></li>
              </ul>
            </div>
          </div>
          <div className='SaveDoc'>
            <h4><FontAwesomeIcon icon={faSync} /> Saving</h4>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DoctorMedicalUpload;
