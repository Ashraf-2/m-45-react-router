import { Link, NavLink } from "react-router-dom";
import './Header.css';
const Header = () => {
    return (
        <div>
            {/* <h2>Navbar</h2> */}
            <nav className="flex flex-row justify-center gap-5 ">
                {/* <Link to="/" className="px-4 py-2 bg-blue-700 hover:bg-blue-600 duration-200 text-white rounded-md shadow-sm">Home</Link> */}
                <NavLink to="/">Home</NavLink>
                <NavLink to="/about">About</NavLink>
                <NavLink to="/contact">Contact</NavLink>
                <NavLink to="/users">Users</NavLink>
                {/* <Link to="/about" className="px-4 py-2 bg-blue-700 hover:bg-blue-600 duration-200 text-white rounded-md shadow-sm">About</Link>
                <Link to="/contact" className="px-4 py-2 bg-blue-700 hover:bg-blue-600 duration-200 text-white rounded-md shadow-sm">Contact us</Link>
                <Link to="/users" className="px-4 py-2 bg-blue-700 hover:bg-blue-600 duration-200 text-white rounded-md shadow-sm">Users</Link> */}
                
                                
            </nav>
        </div>
    );
};

export default Header;