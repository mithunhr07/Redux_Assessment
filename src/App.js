import React from 'react';
import './App.css';
import Login from './Components/Login';
import PostForm from './Components/PostForm';
import AllPost from './Components/AllPost';
import Register from './Components/Register';
import { BrowserRouter as Router, Route , Switch} from 'react-router-dom';
                     
function App() {
  return (
    <div className="App">
   <Router> 
   <Switch>
   <Route exact path='/' component={Login}></Route>
   <Route exact path='/Register' component={Register}></Route>
   {/* <Route exact path='/Users' component={Users}></Route> */}
   {/* <Route exact path='/PostForm' component={PostForm}></Route> */}
   {/* <Route exact path='/AllPost' component={AllPost}></Route> */}
   </Switch>
 </Router>
    </div>
  );
}

export default App;

