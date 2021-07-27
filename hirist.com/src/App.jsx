import { Homepage } from './Components/Homepage'
import { Switch, Route, Link } from "react-router-dom";

// import { RecruiterNavbar } from './Components/RecruiterNavbar/RecruiterNavbar';
//Amit"s files
import logo from './logo.svg';
// import styles from './App.module.css'
import SearchData from './Components/SearchData'
import Recruter from './Components/Recruter';


//amarjeet
import { RegiForm } from './Components/UserRegister/RegiForm';
import { LoginForm } from './Components/UserLogin/LoginForm';
// import { ShowNavbar } from './Components/Navbar/ShowNavbar';
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
          <Route exact path="/Company" component={Company} />
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
