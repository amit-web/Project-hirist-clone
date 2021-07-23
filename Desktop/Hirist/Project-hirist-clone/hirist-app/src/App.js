import logo from './logo.svg';
import './App.css';
// import { RegiForm } from './Components/UserRegister/RegiForm';
// import { LoginForm } from './Components/UserLogin/LoginForm';
// import { ShowNavbar } from './Components/Navbar/ShowNavbar';
import { Show } from './Components/Recruiter/Show';
import { SelectTag } from './Components/Recruiter/SelectTag';



function App() {
	
  return (
    <div className="App">
      {/* <RegiForm/> */}
      {/* <LoginForm/> */}
      {/* <ShowNavbar></ShowNavbar> */}
      <Show/>
    {/* <SelectTag></SelectTag> */}
    </div>
  );
}

export default App;
