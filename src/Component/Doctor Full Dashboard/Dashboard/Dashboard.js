import React, { useState, useContext, useEffect } from 'react';
import { AllContext } from '../../../App';
import Sidebar from '../Sidebar/Sidebar';
import DataTable from './DataTable';
import PrescriptionEditModal from './PrescriptionEditModal';
import PrescriptionModal from './PrescriptionModal';
import './Dashboard.css'
import DashboardOverView from './DashboardOverView';
import MobileDataTable from './MobileDataTable';

const Dashboard = (props) => {
    const [appointedPatient, setAppointedPatient] = useContext(AllContext)

    const [selectedPatient, setSelectedPatient] = useState(null);
    const [modalIsOpen,setModalIsOpen] = useState(false);
    const [editModalIsOpen, setEditModalIsOpen] = useState(false);

    // For Open Prescription Modal when Click View or Plus Button
    const openPrescriptionModal = (patientId) => {
        setModalIsOpen(true);
        const selectedAp = appointedPatient.find(ap => ap._id === patientId)
        setSelectedPatient(selectedAp)
    }

    // For Open Prescription Edit Modal when Click Edit Button
    const openDataEditModal = (apId) => {
        setEditModalIsOpen(true);
        const selectedAp = appointedPatient.find(ap => ap._id === apId)
        setSelectedPatient(selectedAp);
    }

    return (
        <div className="container-fluid row">
            <Sidebar></Sidebar>
            <div className="col-9 col-sm-9 col-md-10 col-lg-10 pr-sm-3 pr-md-3 pr-lg-5" style={{position:"absolute", right:0,backgroundColor: "#F4FDFB",height:"100%"}}>
            {
                props.conditional === false ? <h5>Prescription</h5> : <h5>Dashboard</h5>
            }
            {
                props.conditional === false ? <div></div> : <DashboardOverView></DashboardOverView>
            }
            <DataTable
            openPrescriptionModal={openPrescriptionModal}
            openDataEditModal={openDataEditModal}
            conditional={props.conditional}
            ></DataTable>
            <MobileDataTable 
            openPrescriptionModal={openPrescriptionModal}
            openDataEditModal={openDataEditModal}
            conditional={props.conditional}
            >
            </MobileDataTable>
            
            {/* Prescription Edit Modal For Patient */}
            <PrescriptionEditModal
            editModalIsOpen={editModalIsOpen}
            setEditModalIsOpen={setEditModalIsOpen}
            selectedPatient={selectedPatient}
            setSelectedPatient={setSelectedPatient}
            />

            {/* Prescription Modal For Patient */}
            <PrescriptionModal
            modalIsOpen={modalIsOpen}
            setModalIsOpen={setModalIsOpen}
            selectedPatient={selectedPatient}
            setSelectedPatient={setSelectedPatient}
            />
            </div>
        </div>
    );
};

export default Dashboard;