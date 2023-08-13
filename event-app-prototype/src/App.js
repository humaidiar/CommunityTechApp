import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './Components/Home';
import SignUp from './Components/SignUp';
import QuestionInterest from './Components/QuestionInterest';
import Group from './Components/Group';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="signup" element={<SignUp />} />
        <Route path="questionInterest" element={<QuestionInterest />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
