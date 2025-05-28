import React, { use } from "react";
import { Link, NavLink } from "react-router";
import { AuthContext } from "../../contexts/AuthContext";
import Swal from "sweetalert2";

const Navbar = () => {
  const { user, loader, handleLogOut } = use(AuthContext);

  const handleUserLogOut = () => {
    handleLogOut()
      .then(() => {
         Swal.fire({
                  position: "center",
                  icon: "success",
                  title: "Logout succeefull",
                  showConfirmButton: false,
                  timer: 1000,
                });
      })
      .catch(() => {
        alert("oops! something is wrong");
      });
  };

  return (
    <div className="fixed top-0 left-0 z-50 w-full max-h-20 bg-transparent backdrop-blur-md">
      <div className="max-w-7xl mx-auto w-full ">
        <div className="navbar shadow-sm ">
          <div className="navbar-start items-center">
            <h2 className="font-bold font-rubik text-xl md:text-2xl  text-colorBase text-transparent bg-clip-text bg-gradient-to-r from-secondary to-primary uppercase">
              JobBasket
            </h2>
          </div>
          <div className="navbar-center hidden lg:flex">
            <ul className="flex items-center space-x-6">
              <li className="hover:pb-2 transition-all duration-300 ease-in-out hover:text-primary ">
                <NavLink
                  to="/"
                  className={({ isActive }) =>
                    ` ${isActive ? "text-primary" : ""}`
                  }
                >
                  Home
                </NavLink>
              </li>

              <li className="hover:pb-2 transition-all duration-300 ease-in-out hover:text-primary ">
                <NavLink
                  to="/findajob"
                  className={({ isActive }) =>
                    ` ${isActive ? "text-primary" : ""}`
                  }
                >
                  Find A Job
                </NavLink>
              </li>

              <li className="hover:pb-2 transition-all duration-300 ease-in-out hover:text-primary ">
                <NavLink
                  to="/recruiters"
                  className={({ isActive }) =>
                    ` ${isActive ? "text-primary" : ""}`
                  }
                >
                  Recruiters
                </NavLink>
              </li>

              <li className="hover:pb-2 transition-all duration-300 ease-in-out hover:text-primary ">
                <NavLink
                  to="/candidates"
                  className={({ isActive }) =>
                    ` ${isActive ? "text-primary" : ""}`
                  }
                >
                  Candidates
                </NavLink>
              </li>

              <li className="hover:pb-2 transition-all duration-300 ease-in-out hover:text-primary ">
                <NavLink
                  to="/blog"
                  className={({ isActive }) =>
                    ` ${isActive ? "text-primary" : ""}`
                  }
                >
                  Blog
                </NavLink>
              </li>

              <li className="hover:pb-2 transition-all duration-300 ease-in-out hover:text-primary ">
                <NavLink
                  to="/contact"
                  className={({ isActive }) =>
                    ` ${isActive ? "text-primary" : ""}`
                  }
                >
                  Contact
                </NavLink>
              </li>
            </ul>
          </div>
          <div className="navbar-end">
            <div className="flex items-center gap-4">
              <div className="flex  items-center justify-center gap-4 md:gap-6">
                {/* dropdown menu sm */}
                <div className="dropdown dropdown-end">
                  <div className="dropdown">
                    <div
                      tabIndex={0}
                      role="button"
                      className="btn btn-ghost lg:hidden"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-6 w-6"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M4 6h16M4 12h8m-8 6h16"
                        />
                      </svg>
                    </div>
                    <ul
                      tabIndex={0}
                      className="menu menu-md dropdown-content bg-base-100 z-10 mt-3 w-52 p-2 shadow"
                    >
                      <li className="cursor-pointer mb-4 sm:mb-0 sm:pr-4">
                        <NavLink
                          to="/"
                          className={({ isActive }) =>
                            `transition-all duration-300 ease-in-out hover:pl-4 hover:text-primary ${
                              isActive ? "text-primary" : ""
                            }`
                          }
                        >
                          Home
                        </NavLink>
                      </li>

                      <li className="cursor-pointer mb-4 sm:mb-0 sm:pr-4">
                        <NavLink
                          to="/findajob"
                          className={({ isActive }) =>
                            `transition-all duration-300 ease-in-out hover:pl-4 hover:text-primary ${
                              isActive ? "text-primary" : ""
                            }`
                          }
                        >
                          Find A Job
                        </NavLink>
                      </li>

                      <li className="cursor-pointer mb-4 sm:mb-0 sm:pr-4">
                        <NavLink
                          to="/recruiters"
                          className={({ isActive }) =>
                            `transition-all duration-300 ease-in-out hover:pl-4 hover:text-primary ${
                              isActive ? "text-primary" : ""
                            }`
                          }
                        >
                          Recruiters
                        </NavLink>
                      </li>

                      <li className="cursor-pointer mb-4 sm:mb-0 sm:pr-4">
                        <NavLink
                          to="/candidates"
                          className={({ isActive }) =>
                            `transition-all duration-300 ease-in-out hover:pl-4 hover:text-primary ${
                              isActive ? "text-primary" : ""
                            }`
                          }
                        >
                          Candidates
                        </NavLink>
                      </li>

                      <li className="cursor-pointer mb-4 sm:mb-0 sm:pr-4">
                        <NavLink
                          to="/blog"
                          className={({ isActive }) =>
                            `transition-all duration-300 ease-in-out hover:pl-4 hover:text-primary ${
                              isActive ? "text-primary" : ""
                            }`
                          }
                        >
                          Blog
                        </NavLink>
                      </li>

                      <li className="cursor-pointer mb-4 sm:mb-0 sm:pr-4">
                        <NavLink
                          to="/contact"
                          className={({ isActive }) =>
                            `transition-all duration-300 ease-in-out hover:pl-4 hover:text-primary ${
                              isActive ? "text-primary" : ""
                            }`
                          }
                        >
                          Contact
                        </NavLink>
                      </li>
                       {loader? <h3>Loading...</h3>: user? <> <span className="sm:mb-0 text-md mb-4 font-bold">
                        Your Account
                      </span>

                      <li className="cursor-pointer mb-4 sm:mb-0 sm:pr-4">
                        <NavLink
                          to="/profile"
                          className={({ isActive }) =>
                            `transition-all duration-300 ease-in-out hover:pl-4 hover:text-primary ${
                              isActive ? "text-primary" : ""
                            }`
                          }
                        >
                          Profile
                        </NavLink>
                      </li>

                      <li className="cursor-pointer mb-4 sm:mb-0 sm:pr-4">
                        <NavLink
                          to="/workPreferences"
                          className={({ isActive }) =>
                            `transition-all duration-300 ease-in-out hover:pl-4 hover:text-primary ${
                              isActive ? "text-primary" : ""
                            }`
                          }
                        >
                          Work Preferences
                        </NavLink>
                      </li>

                      <li className="cursor-pointer mb-4 sm:mb-0 sm:pr-4">
                        <NavLink
                          to="/accountSettings"
                          className={({ isActive }) =>
                            `transition-all duration-300 ease-in-out hover:pl-4 hover:text-primary ${
                              isActive ? "text-primary" : ""
                            }`
                          }
                        >
                          Account Settings
                        </NavLink>
                      </li>

                      <li className="cursor-pointer mb-4 sm:mb-0 sm:pr-4">
                        <NavLink
                          to="/signOut"
                          className={({ isActive }) =>
                            `transition-all duration-300 ease-in-out hover:pl-4 hover:text-primary ${
                              isActive ? "text-primary" : ""
                            }`
                          }
                        >
                          Sign Out
                        </NavLink>
                      </li></> : <><li className="cursor-pointer mb-4 sm:mb-0 sm:pr-4">
                        <NavLink
                          to="/register"
                          className={({ isActive }) =>
                            `transition-all duration-300 ease-in-out hover:pl-4 hover:text-primary ${
                              isActive ? "text-primary" : ""
                            }`
                          }
                        >
                          Register
                        </NavLink>
                      </li>
                      <li className="cursor-pointer mb-4 sm:mb-0 sm:pr-4">
                        <NavLink
                          to="/login"
                          className={({ isActive }) =>
                            `transition-all duration-300 ease-in-out hover:pl-4 hover:text-primary ${
                              isActive ? "text-primary" : ""
                            }`
                          }
                        >
                          Sign In
                        </NavLink>
                      </li></>}
                     
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="hidden md:inline-block ">
            {loader? <h3>Loading...</h3>: user?.email ? (
              <div className="flex items-center jusctify-center gap-8 ">
                <Link
                  to="/profile"
                  className="text-blue-700 underline hover:text-blue-600 cursor-pointer hover:mb-0.5 duration-300 r text-sm "
                >
                  Profile
                </Link>
                <button
                  onClick={handleUserLogOut}
                  className="text-sm btn bg-[#3c65f5] text-gray-100 hover:bg-[#DB2525] hover:mb-0.5 duration-300  hover:text-[#FEFEFE]"
                >
                  Sign out
                </button>
              </div>
            ) : (
              <div className="flex items-center jusctify-center gap-8 ">
                <Link
                  to="/register"
                  className="text-blue-700 underline hover:text-blue-600 cursor-pointer hover:mb-0.5 duration-300 r text-sm "
                >
                  Register
                </Link>
                <Link
                  to="/login"
                  className="text-sm btn bg-[#3c65f5] text-gray-100 hover:bg-[#05264e] hover:mb-0.5 duration-300  hover:text-gray-200"
                >
                  Sign in
                </Link>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
