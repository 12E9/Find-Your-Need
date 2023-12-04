// import logo from './logo.svg';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import {Navbar} from "./components/Navbar"
import { About } from './pages/About';
import { Services } from './pages/Services';
import { ContactUs } from './pages/ContactUs';
import { Login } from './pages/Login';
import { Home } from './pages/Home';
import CustomerLogin from './components/CustomerLogin';
import WorkerLogin from './components/WorkerLogin';
import AdminLogin from './components/AdminLogin';
import CustomerSignUp from './components/CustomerSignUp';
import { UserAuthContextProvider } from './context/UserAuthContext';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <UserAuthContextProvider>
      <Routes>
        <Route path ="/" element = {<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/contact" element={<ContactUs />} />
        <Route path="/login" element={<Login />} />
      
        <Route path ="/customerlogin" element={<CustomerLogin/>} />
        <Route path ="/customersignup" element={<CustomerSignUp/>} />
        
        
        <Route path ="/workerlogin" element={<WorkerLogin/>} />
        <Route path ="/adminlogin" element={<AdminLogin/>} />
      </Routes>
      </UserAuthContextProvider>
    </div>
  );
}

export default App;
