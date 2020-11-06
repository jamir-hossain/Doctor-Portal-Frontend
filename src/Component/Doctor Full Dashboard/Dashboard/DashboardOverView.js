import React from 'react';
import { useContext } from 'react';
import { AllContext, CalenderContext } from '../../../App';

const DashboardOverView = () => {
    const [date, setData] = useContext(CalenderContext)
    const [appointedPatient, setAppointedPatient] = useContext(AllContext)

    // Pending Appointments
    const pendingPatient = appointedPatient && appointedPatient.filter(data => data.status === 'Pending')
    console.log(pendingPatient)

    // Total Appointed Patient
    const totalPatient = appointedPatient && appointedPatient.filter(data => data.status === 'Approved')
    console.log(totalPatient)

    // Today's Appointments
    const formatedDate = `${date.getDate()}-${date.getMonth() + 1}-${date.getFullYear()}`;
    const todayAppointed = appointedPatient && appointedPatient.filter( data => data.appointment.bookingDate === formatedDate)
    console.log(todayAppointed)
    
    // const ContextData = useContext(DataContext);
    // const total = ContextData.allBookedAppointments.length;
    // const pending =  ContextData.allBookedAppointments.reduce((accu , curr) => {
    //     if(curr.status === "Pending"){
    //             accu += 1;
    //     }
    //     return accu;

    // },0) 
    // const date = new Date();
    // const formatedDate = `${date.getDate()}-${date.getMonth() + 1}-${date.getFullYear()}`;
    // const todays =  ContextData.allBookedAppointments.reduce((accu , curr) => {
    //     if(curr.date === formatedDate){
    //         accu += 1;
    //     }
    //     return accu;
    // },0)

    return (
        <div className="row my-5">
            <div className="col-md-3">
                <div className={"d-flex align-items-center p-3 px-4  rounded text-white bg-danger"}>
                    <h1 className="w-25 mr-2">{pendingPatient && pendingPatient.length}</h1>
                    <h6>Pending Appointment</h6>
                </div>
            </div>
            <div className="col-md-3">
                <div className={"d-flex align-items-center p-3 px-4  rounded text-white bg-info"}>
                    <h1 className="w-25 mr-2">{todayAppointed && todayAppointed.length}</h1>
                    <h6>Today's Appointment</h6>
                </div>
            </div>
            <div className="col-md-3">
                <div className={"d-flex align-items-center p-3 px-4  rounded text-white bg-success"}>
                    <h1 className="w-25 mr-2">{appointedPatient && appointedPatient.length}</h1>
                    <h6>Total Appointments</h6>
                </div>
            </div>
            <div className="col-md-3">
                <div className={"d-flex align-items-center p-3 px-4  rounded text-white bg-warning"}>
                    <h1 className="w-25 mr-2">{totalPatient && totalPatient.length}</h1>
                    <h6>Total Appointed</h6>
                </div>
            </div>
        </div>
    );
};

export default DashboardOverView;