import { NavLink } from "react-router-dom";

const NavBarItem = ({ title, to })=>{
    return <li className="NavBarItem "><NavLink to={to}>{title}</NavLink></li>;
}
export default NavBarItem;