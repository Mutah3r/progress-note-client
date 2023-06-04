import { FaBars } from "react-icons/fa";
import { Link } from "react-router-dom";
import logo from '../../../assets/logo.png'
import { useContext } from "react";
import { AuthContext } from "../../../providers/AuthProvider";

const NavBar = () => {
    const { user, logOut } = useContext(AuthContext);

    const navLinks = (<>
        <li className="font-semibold text-[#7780A1]"><Link to="/">Home</Link></li>
        {!user && <li className="font-semibold text-[#7780A1]"><Link to="/login">Login</Link></li>}
        {!user && <li className="font-semibold text-[#7780A1]"><Link to="/signup">SignUp</Link></li>}
        {user && <li className="font-semibold text-[#7780A1]"><Link to="/tasks">My Tasks</Link></li>}
        {user && <li className="font-semibold text-[#7780A1]"><button onClick={logOut}>Logout</button></li>}
    </>);

    return (
        <nav className="navbar bg-base-100 p-2 ">

            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <FaBars className="h-5 w-5" />
                    </label>
                    <ul tabIndex={0} className="z-10 menu menu-sm dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        {navLinks}
                    </ul>
                </div>
                <Link to='/' className="text-xl font-bold m-2 flex items-center gap-2"><img className="h-10 w-10" src={logo} /> <span>ProgressNote</span></Link>
            </div>

            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {navLinks}
                </ul>
            </div>
            <div className="navbar-end">
                {/* <a className="button button-primary">My Tasks</a> */}
                {user &&
                    <div className="avatar online">
                        <div className="w-12 cursor-pointer rounded-full mr-3">
                            <img src={user?.photoURL || "https://truckomat.com/wp-content/uploads/2019/06/avatar-960_720-e1562935069333.png"} />
                        </div>
                    </div>
                }
            </div>
        </nav>
    );
};

export default NavBar;