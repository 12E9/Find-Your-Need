import Dropdown from 'react-bootstrap/Dropdown';
import {NavLink} from "react-router-dom"

function LoginDropdown() {
  return (
    <Dropdown>
      <Dropdown.Toggle variant="success" id="dropdown-basic">
        Login
      </Dropdown.Toggle>
   
      <Dropdown.Menu >
        <Dropdown.Item ><NavLink to="/customerlogin">Customer</NavLink></Dropdown.Item>
        <Dropdown.Item ><NavLink to="/workerlogin">Worker</NavLink></Dropdown.Item>
        <Dropdown.Item ><NavLink to="/adminlogin">Admin</NavLink></Dropdown.Item>
      </Dropdown.Menu>
  
    </Dropdown>
  );
}

export default LoginDropdown;