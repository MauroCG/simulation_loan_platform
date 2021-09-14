import React, { useState } from 'react';
import "./App.css";

import RequestLoanForm from "./components/RequestLoanForm";


function App() {
  const [loanDecision, setLoanDecision] = useState("");
  return (
    <div className="App-header">
      <RequestLoanForm setDecision={setLoanDecision} />
      <center><h2>Your loan request has been: {loanDecision}</h2></center>
    </div>
  );
}

export default App;
