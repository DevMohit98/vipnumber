import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Component/Home";
import Loader from "./Component/Loader";
const App = () => {
  const [load, setLoad] = useState(true);
  useEffect(() => {
    if (load) {
      setInterval(() => {
        setLoad(false);
      }, 1000);
    }
  }, [load]);
  if (load) {
    return <Loader />;
  }
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" exact element={<Home />}></Route>
        </Routes>
      </Router>
    </>
  );
};
export default App;
