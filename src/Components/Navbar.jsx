import { useContext } from 'react';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import { AuthContext } from '../Context/AuthProvider';

const Navbar = () => {
    const { user, logOut } = useContext(AuthContext);
    const navigate = useNavigate();
    const handleLogOut = () => {
        logOut();
        navigate('/');
    } 

    const links = <>
        <li><NavLink to='/'>Home</NavLink></li>
        <li><NavLink to='/profile'>Profile</NavLink></li>
        <li><NavLink to='/contact'>Contact</NavLink></li>
    </>


    return (
        <div className="navbar bg-optional px-5 text-primary">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor">
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M4 6h16M4 12h8m-8 6h16" />
                        </svg>
                    </div>
                    <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content bg-primary text-Tertiary rounded-box z-10 mt-3 w-52 p-2 shadow">
                        {links}
                    </ul>
                </div>
                {/* <a className="btn btn-ghost text-xl">daisyUI</a> */}
                <div className='flex flex-col items-center'>
                    <Link>
                        {/* <img className='w-16 rounded-xl' src={logo} alt="" /> */}
                        <h2 className='md:text-2xl font-bold '>Nomad&apos;s Land</h2>
                    </Link>
                </div>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {links}
                </ul>
            </div>
            <div className="navbar-end">
                {
                    user ? <div className="dropdown dropdown-end">
                        <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                            <div className="w-10 rounded-full">
                                <img
                                    alt={user.displayName}
                                    title={user.displayName}
                                    src={user.photoURL} />
                            </div>
                        </div>
                        <ul
                            tabIndex={0}
                            className="menu menu-sm dropdown-content text-Tertiary bg-primary rounded-box z-[10] mt-3 w-52 p-2 shadow">
                            <li>
                                <Link to='/profile/update' className="justify-between">
                                    Update Profile
                                    <span className="badge">New</span>
                                </Link>
                            </li>
                            <li><Link onClick={handleLogOut}>Logout</Link></li>
                        </ul>
                    </div>
                    :
                <Link to='/login'><button className='btn bg-primary text-Tertiary'>Login</button></Link>
                }

            </div>
        </div>
    );
};

export default Navbar;