import React, { useContext, useEffect } from 'react';
import { useState } from 'react';
import { CalenderContext, PrescriptionContext } from '../../../App';
import Dashboard from '../Dashboard/Dashboard';
import Sidebar from '../Sidebar/Sidebar';

const Prescription = () => {
   const [conditional, setConditional] = useState()
   useEffect(() => {
      setConditional(false)
   }, [])
   console.log(conditional)
   return (
      <div>
            <Dashboard conditional={conditional}></Dashboard>
      </div>
   );
};

export default Prescription;