import React from 'react';
import { Link } from 'react-router-dom';
import './Sidebar.css'

const Sidebar = () => {
    return (
        <div className="sidebar d-flex flex-column justify-content-between col-3 col-sm-3 col-md-2 col-lg-2 py-5 px-3" style={{height:"90vh"}}>
            <ul className="list-unstyled">
                <li>
                    <Link to="/doctor/dashboard" className="text-white d-none d-md-block d-lg-block">
                    <i className="fas fa-grip-horizontal"></i><span>Dashboard</span> 
                    </Link>
                    <Link to="/doctor/dashboard" className="text-white text-center d-block d-md-none d-lg-none">
                    <i className="fas fa-grip-horizontal"></i><br/>
                    <span>Dashboard</span> 
                    </Link>
                </li>
                <li>
                    <Link to="/doctor/appointment" className="text-white d-none d-md-block d-lg-block">
                    <i className="fas fa-calendar-alt"></i><span>Appointment</span> 
                    </Link>
                    <Link to="/doctor/appointment" className="text-white text-center d-block d-md-none d-lg-none">
                    <i className="fas fa-calendar-alt"></i><br/>
                    <span>Appointment</span> 
                    </Link>
                </li>
                <li>
                    <Link to="/doctor/patients" className="text-white d-none d-md-block d-lg-block">
                    <i className="fas fa-users"></i><span>Patients</span>
                    </Link>
                    <Link to="/doctor/patients" className="text-white text-center d-block d-md-none d-lg-none">
                    <i className="fas fa-users"></i><br/>
                    <span>Patients</span>
                    </Link>
                </li>
                <li>
                    <Link to="/doctor/prescriptions" className="text-white d-none d-md-block d-lg-block">
                    <i className="fas fa-file-alt"></i><span>Prescriptions</span>
                    </Link>
                    <Link to="/doctor/prescriptions" className="text-white text-center d-block d-md-none d-lg-none">
                    <i className="fas fa-file-alt"></i><br/>
                    <span>Prescriptions</span>
                    </Link>
                </li>
                <li>
                    <Link to="/doctor/setting" className="text-white d-none d-md-block d-lg-block" >
                    <i className="fas fa-cog"></i><span>Setting</span>
                    </Link>
                    <Link to="/doctor/setting" className="text-white text-center d-block d-md-none d-lg-none" >
                    <i className="fas fa-cog"></i><br/>
                    <span>Setting</span>
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