import React, { useState } from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import FusionCharts from "fusioncharts";
import MainDashboard from "./component/dashboard/MainDashboard";
import Navbar from "./component/common/Navbar";
import Sidebar from "./component/common/Sidebar";

FusionCharts.options.license({
  key: "iyE4qlbA7A3C4A2D1B1I2C4D2A3B1B3fqyH2B7C-16xvhyA2E1lduC7E2B4E2F2G2C1B10B2C1E6F1C1E3E1G2c1D-16yC2A3E2yD1J2B3lozD1B1G4da1wB9B6C6dG-10A-8D3J2A9B1A8C7E1E5A2A1A1sB-22uE2D6G1F1H-8H-7lB8A5C7epG4d1I3B8lnE-13F4E2D3F1H4A10D9C1B5D6B1E4G3E1g==",
  creditLabel: false,
});

function App() {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <Router>
      {/* <Sidebar isOpen={isOpen} toggle={toggle} /> */}
      <Navbar toggle={toggle} />
      <Switch>
        <Route path="/dashboard" exact component={MainDashboard} />
      </Switch>
    </Router>
  );
}

export default App;
