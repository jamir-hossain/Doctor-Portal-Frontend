import React from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import './Calender.css'
import { useState } from 'react';
import { useContext } from 'react';
import { CalenderContext } from '../../App';

const ReactCalender = () => {

   const [date, setDate] = useContext(CalenderContext)
   const onChange = ( date => setDate(date))

   return (
      <div className="my-calender">
         <Calendar onChange={onChange} value={date}/>
      </div>
   );
};

export default ReactCalender;