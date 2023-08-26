import './App.css';
import React, { useState } from 'react'
import Navbar from './components/Navbar';
import News from './components/News';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import LoadingBar from 'react-top-loading-bar'



const App =()=> {
  const api="418827ab253c4cb59209cc36c30e9463"
  const [progress,setProgress]=useState(0);
    return (
      <Router>
        <div>
          <LoadingBar
            height={4}
            color='#f11946'
            progress={progress}
          />
          </div>
          <Navbar />
          <Routes>
            <Route exact path="/" element={<News api={api} setProgress={setProgress} />} />
            <Route exact path="/general" element={<News api={api} setProgress={setProgress} key="general" pagesize={6} country={"in"} category={"general"} />} />
            <Route exact path="/business" element={<News api={api} setProgress={setProgress} key="business" pagesize={6} country={"in"} category={"business"} />} />
            <Route exact path="/entertainment" element={<News api={api} setProgress={setProgress} key="entertainment" pagesize={6} country={"in"} category={"entertainment"} />} />
            <Route exact path="/health" element={<News api={api} setProgress={setProgress} key="health" pagesize={6} country={"in"} category={"health"} />} />
            <Route exact path="/science" element={<News api={api} setProgress={setProgress} key="science" pagesize={6} country={"in"} category={"science"} />} />
            <Route exact path="/sports" element={<News api={api} setProgress={setProgress} key="sports" pagesize={6} country={"in"} category={"sports"} />} />
            <Route exact path="/technology" element={<News api={api} setProgress={setProgress} key="technology" pagesize={6} country={"in"} category={"technology"} />} />
          </Routes>
      </Router>
    )
  
}

export default App;
