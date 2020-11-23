import React, { createContext, useState, useEffect } from 'react';

import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Header from './Component/Header/Header';
import Banner from './Component/Banner/Banner';
import AppointmentSection from './Component/Get Appointment Section/AppointmentSection';
import Login from './Component/Doctor Full Dashboard/Login/Login';
import FullDashboard from './Component/Doctor Full Dashboard/FullDashboard';
import Footer from './Component/Footer/Footer';
import Services from './Component/Service/Services';
import FeaturedService from './Component/FeaturedService/FeaturedService';
import AppointmentBanner from './Component/AppointmentBanner/AppointmentBanner';
import Testimonials from './Component/Testimonials/Testimonials';
import Blogs from './Component/Blogs/Blogs';
import Doctors from './Component/Doctors/Doctors';
import Contact from './Component/Contact/Contact';
import Dashboard from './Component/Doctor Full Dashboard/Dashboard/Dashboard';
import Appointment from './Component/Doctor Full Dashboard/Appointment/Appointment';
import Patient from './Component/Doctor Full Dashboard/Patient/Patient';
import Prescription from './Component/Doctor Full Dashboard/Prescription/Prescription';
import NotFound from './Component/NotFound';


export const CalenderContext = createContext()
export const AllContext = createContext()
export const PrescriptionContext = createContext()

function App() {

  const [date, setDate] = useState(new Date())
  console.log(date)
  const [appointedPatient, setAppointedPatient] = useState();
  useEffect(() => {
    fetch('https://doctor-portal-backend-server.herokuapp.com/get-appointments', {
      method:'GET',
      headers:{
        'Content-Type':'application/json'
      }
    })
    .then(res => res.json())
    .then(result => {
      console.log(result)
      setAppointedPatient(result)
    })
  }, [])

  const [preLoaderVisibility, setPreLoaderVisibility] = useState(true);
  const [appointmentData, setAppointmentData] = useState([])

  return (
    <div>
      <AllContext.Provider value={[appointedPatient, setAppointedPatient]}>
      <CalenderContext.Provider value={[date, setDate]}>
      <Router>
            <Header></Header>
        <Switch>
          <Route exact path="/">
            <Banner></Banner>
            <Services></Services>
            <FeaturedService></FeaturedService>
            <AppointmentBanner></AppointmentBanner>
            <Testimonials></Testimonials>
            <Blogs></Blogs>
            <Doctors></Doctors>
            <Contact></Contact>
            <Footer></Footer>
          </Route>
          <Route path="/appointment-section">
            <AppointmentSection></AppointmentSection>
          </Route>
          <Route path="/login">
            <Login></Login>
          </Route>
          <Route path="/doctor/dashboard">
            <Dashboard></Dashboard>
          </Route>
          <Route path="/doctor/appointment">
            <Appointment></Appointment>
          </Route>
          <Route path="/doctor/patients">
            <Patient></Patient>
          </Route>
          <Route path="/doctor/prescriptions">
            <Prescription></Prescription>
          </Route>
          <Route path="/doctor-dashboard">
            <FullDashboard></FullDashboard>
          </Route>
          <Route path="/contact">
            <Contact></Contact>
          </Route>
          <Route path="/blog">
            <Blogs></Blogs>
          </Route>
          <Route path="*">
            <NotFound></NotFound>
          </Route>
        </Switch>
      </Router>
      </CalenderContext.Provider>
      </AllContext.Provider>
    </div>
  );
}

export default App;
