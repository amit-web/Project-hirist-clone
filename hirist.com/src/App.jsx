import { Navbar } from './Components/Navbar'
import { Category } from './Components/CategoryCompo/Category'
import { PremiumJobs } from './Components/PremiumJobsCompo/PremiumJobs'
import { DownloadApp } from './Components/DownloadApp/DownloadApp';
import { Opportunity } from './Components/Opportunity/Opportunity'
import { Implinks } from './Components/Implinks/Implinks';
import { RecruiterNavbar } from './Components/RecruiterNavbar/RecruiterNavbar';
import './App.css';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Category />
      <PremiumJobs />
      <DownloadApp />
      <Opportunity />
      <Implinks />
      {/* <RecruiterNavbar /> */}
    </div>
  );
}

export default App;
