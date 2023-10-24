import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../Providers/AuthProvider";
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

const Navbar = () => {

    const { user, logOut } = useContext(AuthContext)

    const handleLogOut = () => {
        logOut()
            .then(() => toast('user logged out successfully'))
            .catch(error => console.log(error))
    }

    return (
        <div>
            <div className="navbar bg-base-100">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                            <li><NavLink to="/">Home</NavLink></li>
                            {
                                user &&
                                <>
                                    <li><NavLink to="/addProduct">Add Product</NavLink></li>
                                    <li><NavLink to="/cart">My Cart</NavLink></li>
                                </>
                            }
                        </ul>
                    </div>
                    <a className="btn btn-ghost normal-case text-xl">Techy Store</a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        <li><NavLink to="/">Home</NavLink></li>
                        {
                            user &&
                            <>
                                <li><NavLink to="/addProduct">Add Product</NavLink></li>
                                <li><NavLink to="/cart">My Cart</NavLink></li>
                            </>
                        }
                    </ul>
                </div>
                <div className="navbar-end">
                    {
                        user ?
                            <div className="flex justify-center items-center gap-4">
                                <span className="flex justify-center items-center gap-3">
                                    <span className="text-sm md:text-lg">{user.displayName}</span>
                                    <div className="avatar online">
                                        <div className="w-6 md:w-16 rounded-full">
                                            <img src={user.photoURL} />
                                        </div>
                                    </div>
                                </span>

                                <Link onClick={handleLogOut} className="btn btn-xs md:btn-md">Log Out</Link>
                            </div> :
                            <Link to="/login" className="btn">Login</Link>
                    }
                </div>
            </div>
            <ToastContainer />
        </div>
    );
};

export default Navbar;