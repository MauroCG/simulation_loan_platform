import React, { useState } from 'react';

import RequestLoanForm from "./components/RequestLoanForm";


function App() {
  const [loanDecision, setLoanDecision] = useState("");
  return (
    <>
      <RequestLoanForm setDecision={setLoanDecision} />
      <center><h2>Your loan request has been: {loanDecision}</h2></center>
    </>
  );
}

export default App;
