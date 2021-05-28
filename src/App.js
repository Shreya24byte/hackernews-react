import './App.css';
import React from 'react';
import { StoriesContainer } from './container/StoriesContainer';
import { JobsContainer } from './container/JobsContainer';
import { ShowContainer } from './container/ShowContainer';
import { PastContainer } from './container/PastContainer';
import {StoriesContainerWrapper} from './styles/StoryContainerStyles';
import { Welcome } from './components/Welcome';
import { Header } from './components/Header';
import { Login } from './components/Login';
import { Submit } from './components/Submit';
import { ForgotPassword } from './components/ForgotPassword';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function App() {
  
  return (
    <>
    <Router>
    <StoriesContainerWrapper>
    <Header/>
    </StoriesContainerWrapper>
  
   <Switch>
          <Route path="/welcome">
            <Welcome/>
          </Route>
          <Route path="/submit">
            <Submit/>
          </Route>
          <Route path="/login">
            <Login/>
          </Route>
          <Route path="/forgot">
            <ForgotPassword/>
          </Route>
          <Route path="/jobs">
          <JobsContainer/>
          </Route>
          <Route path="/show">
          <ShowContainer/>
          </Route>
          <Route path="/past">
          <PastContainer/>
          </Route>
          <Route path="/">
          <StoriesContainer/>
          </Route>
        </Switch>
   </Router>
   </>
  );
}

export default App;
