import { NavLink } from 'react-router-dom';
import "./Navbar.css"

const Navbar = () => {
  return (
    <div>
      <div className="flex gap-20 w-max border-b border-b-black" id="navbarNav">

        <NavLink className="px-3 pb-3 text-gray-400 font-medium" to="personal-info">Personal Info</NavLink>
      
        <NavLink className="px-3 pb-3 text-gray-400 font-medium" to="billing-info">Billing Info</NavLink>

        <NavLink className="px-3 pb-3 text-gray-400 font-medium" to="confirm-payment">Confirm Payment</NavLink>   

    </div>
  </div>
  )
}

export default Navbar