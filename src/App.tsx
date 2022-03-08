import './App.css';
import { BrowserRouter as Router, Routes, Route, } from "react-router-dom";
import Button from './component/Button';
import Container from './component/Container';
import Input from './component/Input';
import Isloggedin from './component/state/Isloggedin';
// import Hookspractice from './component/Hookspractice';
import Advanceprops from './component/Advanceprops';
import Propspassing from './component/Propspassing';
import User from './component/state/User';
import Counter from './component/state/Counter';
import Navbar from './Navbar';
import Status from './component/Status';
import Hookspractice from './component/Hookspractice';
function App() {
  const name = [{
    first: "Daya",
    last: "Yadav"

  },
  {
    first: "22-01-2000",
    last: "surat",
  }]
  return (
 <div>
    <Router>
      <Navbar></Navbar>
      <Routes>
        {/* <Route path="propspassing"  element= {<Propspassing> names={name}</Propspassing>} ></Route> */}
        <Route path="advanceprops" element={<Advanceprops>Daya Yadav</Advanceprops>}></Route>
        <Route path="status" element={<Status status= "Loading"></Status>}></Route>
        <Route path="button" element={<Button handleclick={(event,id)=>{console.log("Button clicked", event , id);}}  ></Button>}></Route>
        <Route path="input" element={<Input value={'Daya'} handleClick={(event)=>{console.log(event.target.value);}}></Input>}></Route>
        <Route path="container" element={<Container styles={{background:'#DFF6FF', padding :'2rem' }}></Container>}></Route>
        <Route path="isloggedin"  element= {<Isloggedin></Isloggedin>}></Route>
        <Route path="user"  element= {<User></User>}></Route>
        <Route path="counter"  element= {<Counter></Counter>}></Route>
        <Route path="hookpractice"  element= {<Hookspractice></Hookspractice>}></Route>

      </Routes> 
    </Router>
    </div>

  );
}
export default App;