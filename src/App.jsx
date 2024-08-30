import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LandingPage from './LandingPage.jsx';
import Login from './Login.jsx';
import CreateAccount from './CreateAccount.jsx';
import FamilyForm from './FamilyForm.jsx';

import HomePage2 from './HomePage2.jsx';
function App() {
  

  return (
    <Router>
    <Routes>

      <Route path="/" element={<LandingPage/>} />
      <Route path="/home" element={<HomePage2/>} />
      <Route path="/login" element={<Login/>} />
      <Route path="/create" element={<CreateAccount/>} />
      <Route path="/createfamily" element={<FamilyForm/>} />
    </Routes>
</Router>

  )
}

export default App
