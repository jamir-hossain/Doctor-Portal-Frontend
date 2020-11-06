import React from 'react';
import { Link } from 'react-router-dom';
import './Sidebar.css'
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faCog, faSignOutAlt, faCalendar, faGripHorizontal, faUsers } from '@fortawesome/free-solid-svg-icons';
// import {  faFileAlt } from '@fortawesome/free-regular-svg-icons'

const Sidebar = () => {
    return (
        <div className="sidebar d-flex flex-column justify-content-between col-md-2 py-5 px-4" style={{height:"90vh"}}>
            <ul className="list-unstyled">
                <li>
                    <Link to="/doctor/dashboard" className="text-white">
                    <i className="fas fa-grip-horizontal"></i><span>Dashboard</span> 
                    </Link>
                </li>
                <li>
                    <Link to="/doctor/appointment" className="text-white">
                    <i className="fas fa-calendar-alt"></i><span>Appointment</span> 
                    </Link>
                </li>
                <li>
                    <Link to="/doctor/patients" className="text-white">
                    <i className="fas fa-users"></i><span>Patients</span>
                    </Link>
                </li>
                <li>
                    <Link to="/doctor/prescriptions" className="text-white">
                    <i className="fas fa-file-alt"></i><span>Prescriptions</span>
                    </Link>
                </li>
                <li>
                    <Link to="/doctor/setting" className="text-white" >
                    <i className="fas fa-cog"></i><span>Setting</span>
                    </Link>
                </li>
            </ul>
            <div>
                <Link to="/" className="text-white">
                    <span>Logout</span>
                </Link>
            </div>
        </div>
    );
};

export default Sidebar;