import { Homepage } from './Components/Homepage'
import { Switch, Route } from "react-router-dom";

import SearchData from './Components/SearchData'
import Recruter from './Components/Recruter';


import { RegiForm } from './Components/UserRegister/RegiForm';
import { LoginForm } from './Components/UserLogin/LoginForm';

import { Show } from './Components/Recruiter/Show';
import Company from "./Components/Company"

function App() {
  return (
    <>
      <div>
        <Switch >
          <Route exact path="/" component={Homepage} />
          <Route exact path="/Homepage" component={Homepage} />
          <Route exact path="/Recruter" component={Recruter} />
          <Route exact path="/Show" component={Show} />
          <Route exact path="/Recruter/Show" component={Show} />
          <Route exact path="/SearchData" component={SearchData} />
          <Route exact path="/Regiform" component={RegiForm} />
          <Route exact path="/LoginForm" component={LoginForm} />
          <Route exact path="/SearchData/:id" component={Company} />
        </Switch>

        {/* <Company/> */}

      </div>
      <div>


        {/* <RecruiterNavbar /> */}
        {/* amit files */}
        {/* <SearchData /> */}
        {/* <Recruter /> */}
        {/* <RegiForm /> */}
        {/* <LoginForm /> */}
        {/* <ShowNavbar></ShowNavbar> */}
        {/* <Show /> */}
      </div>
    </>
  );
}

export default App;
