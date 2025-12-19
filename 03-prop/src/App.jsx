import React from "react";
import Card from "./Components/Card";

const App = () => {
  return (
    <div className="parent">

      <Card User = "Piyush" age = {18}/>
      <Card User = "Sk" age = {23}/>
    </div>
  );
};

export default App;
