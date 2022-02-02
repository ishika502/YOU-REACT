import About from "./components/About";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import React, { useState } from "react";
import Alert from "./components/Alert";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  const [mode, setMode] = useState("light");
  const [alert, setAlert] = useState(null);

  const alertFunction = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 2000);
  };

  const toggleMode = () => {
    if (mode === "dark") {
      setMode("light");
      document.body.style.backgroundColor = "white";
      alertFunction("Light mode has been enabled", "Success");
    } else {
      setMode("dark");
      document.body.style.backgroundColor = "#212529";
      alertFunction("Dark mode has been enabled", "Success");
    }
  };

  return (
    <>
      <Router>
        <Navbar title="YOU" mode={mode} toggleMode={toggleMode} />
        <Alert alert={alert} />
        <div className="container my-4">
          <Switch>
            <Route exact path="/about">
              <About mode={mode} />
            </Route>
            <Route exact path="/">
              <TextForm mode={mode} alertFunction={alertFunction} />
            </Route>
          </Switch>
        </div>
      </Router>
    </>
  );
}

export default App;

//"container" is a class in bootstrap which styles the element itself.
//"my-4": gives margin in y-axis as 4.
//using "exact" before path makes it more secure.
