import React from 'react';
import './App.css';
import Login from './Components/Login';
// import submit from './Submit/submit';
// import submitvalidationform from './Submit/submitvalidationform';
import Register from './Components/Register';
import { BrowserRouter as Router, Route } from 'react-router-dom';
                     
function App() {
  return (
    <div className="App">
   <Router> 
   <switch>
   <Route exact path='/' component={Login}></Route>
   <Route exact path='/Register' component={Register}></Route>
   </switch>
 </Router>
    </div>
  );
}

export default App;
