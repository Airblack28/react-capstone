import './App.css';
import Footer from './Footer';
import Header from './Header.js';
import Main from './Main';
import Nav from './Nav';
import Menu from './Menu';
import BookingForm from './BookingForm.js';
import React, { useReducer } from "react";
import { Route, Routes, useNavigate } from "react-router-dom";

function App() {

  const seededRandom = function (seed) {
    var m = 2**35 - 31;
    var a = 185852;
    var s = seed % m;
    return function () {
        return (s = s * a % m) / m;
    };
}

const fetchAPI = function(date) {
    let result = [];
    let random = seededRandom(date.getDate());

    for(let i = 17; i <= 23; i++) {
        if(random() < 0.5) {
            result.push(i + ':00');
        }
        if(random() < 0.5) {
            result.push(i + ':30');
        }
    }
    return result;
};
const submitAPI = function(formData) {
    return true;
};

const initialState = {availableTimes:  fetchAPI(new Date())}
const [state, dispatch] = useReducer(updateTimes, initialState);

function updateTimes(state, date) {
    return {availableTimes: fetchAPI(new Date(date))}
}

const navigate = useNavigate();
function submitForm (formData) {
    if (submitAPI(formData)) {
        navigate("/confirmed")
    }
}

  return (
    <>
      <Nav/>
      {/* <Header/> */}
      <Main></Main>
      <Menu></Menu>
      <BookingForm availableTimes={state} dispatch={dispatch} submitForm={submitForm}></BookingForm>
      <Footer></Footer>
    </>
  );
}

export default App;
