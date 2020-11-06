import React from 'react';
import { useContext } from 'react';
import { AllContext } from '../../../App';
import Preloader from '../../Preloader/Preloader';
import Sidebar from '../Sidebar/Sidebar';

const Patient = () => {
   const [appointedPatient, setAppointedPatient] = useContext(AllContext)

   let slNo = 0;
   return (
      <div className="container-fluid row ">
         <Sidebar></Sidebar>
         <div className="col-md-10 p-4 pr-5" style={{position:"absolute", right:0,backgroundColor: "#F4FDFB",height:"100%"}}>
         <h4>Patient Info</h4>
         <div className="mt-5 bg-white rounded shadow-sm p-3">
            <table className="table table-borderless">
               <thead>
                  <tr>
                     <th className="text-secondary" scope="col">SL No</th>
                     <th className="text-secondary" scope="col">Name</th>
                     <th className="text-secondary text-center" scope="col">Gender</th>
                     <th className="text-secondary text-center" scope="col">Age</th>
                     <th className="text-secondary text-center" scope="col">Weight</th>
                     <th className="text-secondary text-center" scope="col">Phone</th>
                     <th className="text-secondary text-center" scope="col">Email</th>
                  </tr>
               </thead>
               <tbody>
                  {
                     appointedPatient && appointedPatient.map( patient => 
                        <tr>
                           <td> {slNo+1} </td>
                           <td> {patient.name} </td>
                           <td className="text-center py-3"> {patient.gender} </td>
                           <td className="text-center py-3"> {patient.age} </td>
                           <td className="text-center py-3"> {patient.weight} </td>
                           <td className="text-center py-3"> {patient.phone} </td>
                           <td className="text-center py-3"> {patient.email} </td>
                        </tr>
                     )
                  }
               </tbody>
            </table>
            {
               !appointedPatient && <Preloader></Preloader>
            }
         </div>
         
         </div>
      </div>
   );
};

export default Patient;