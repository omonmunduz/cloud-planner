import React from 'react';
import './index.css';
import Navbar from './components/layout/Navbar';
import Dashboard from './components/dashboard/Dashboard';
import CreateProject from './components/project/CreateProject';
import SignIn from './components/auth/SignIn';
import SignUp from './components/auth/SignUp';
import ProjectDetails from './components/project/ProjectDetails';
import {BrowserRouter,Route,Switch} from 'react-router-dom';


const App = () => {
  return(
    <BrowserRouter>
      <div className="app">
        <Navbar/>
        <Switch>
          <Route exact path="/" component = {Dashboard}/>
          <Route path="/create-project" component = {CreateProject}/>
          <Route path="/signin" component = {SignIn}/>
          <Route path="/signup" component = {SignUp}/>
          <Route path="/:_id" component = {ProjectDetails}/>
        </Switch>
      </div>
    </BrowserRouter>
  )
}
export default App;