import React from 'react';
// import PropTypes from 'prop-types';
// import AppFrame from '../../components/AppFrame';
//import PatientRegistration from '../PatientRegistration'
import LaboratoryTestPrescrizione from '../LaboratoryTestPrescrizione';
//import PatientVisit from '../PatientVisit'
const Dashboard = props => (
    // <AppFrame username="Dr. Housee" hospitalName="Hospital St. Democrito" />
    //<AppFrame username={props.username} hospitalName={props.hospitalName} />
    // <PatientRegistration username={props.username} hospitalName={props.hospitalName} />
    //<PatientVisit username={props.username} hospitalName={props.hospitalName} />
    <LaboratoryTestPrescrizione username={props.username} hospitalName={props.hospitalName} />
);

export default Dashboard;
