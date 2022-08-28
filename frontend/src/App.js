import logo from './logo.svg';
import './App.css';
import Userlist from './components/Userlist'
import Complainform from './components/Complainform';
import Navbar from './components/Navbar';
import Checkstatus from './components/Checkstatus';
import {Routes,Route} from "react-router-dom";
function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>

        <Route exact path='/' element={<Complainform />} />
        
        <Route exact path="check" element={<Checkstatus />} />
      </Routes>

      
      {/* <Userlist /> */}
      {/* <Checkstatus />  */}

    </div>
  );
}

export default App;
