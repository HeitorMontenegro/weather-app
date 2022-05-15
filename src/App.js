import WeatherDisplay from "./components/WeatherDisplay";
import InfoInput from "./components/InfoInput";
import React, { useState } from 'react';

function App() {
  let [APIdata, setAPIdata] = useState(null);

  return (
    <div className="App">

      <InfoInput setAPIdata={setAPIdata} APIdata={APIdata}/>
      <WeatherDisplay APIdata={APIdata}/>
    </div>
  );
}

export default App;
