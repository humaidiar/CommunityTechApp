import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './Components/Home';
import SignUp from './Components/SignUp';
import QuestionInterest from './Components/QuestionInterest';
import { QuestionBasedAuckland } from './Components/QuestionBasedAuckland';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<QuestionBasedAuckland />}/>
        <Route path="signup" element={<SignUp />} />
        <Route path="questionInterest" element={<QuestionInterest />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
