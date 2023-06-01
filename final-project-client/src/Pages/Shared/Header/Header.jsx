import { Link } from "react-router-dom";
import logo from "../../../assets/logo.png";
import { useContext } from "react";
import { AuthContext } from "../../../Providers/AuthProvider";
import Swal from "sweetalert2";

const Header = () => {
  const { user, LogOut } = useContext(AuthContext);

  const handleLogOut = () => {
    LogOut()
      .then(() => {
        Swal.fire("Success!", "You are logged out!!", "success");
      })
      .catch((error) => {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: `${error.message}`,
        });
      });
  };

  const list = (
    <>
      <li>
        <Link className="p-0" to="/">
          Home
        </Link>
      </li>
      <li>
        <Link className="p-0" to="/contact">
          Contact us
        </Link>
      </li>
      <li>
        <Link className="p-0" to="/dashboard">
          Dashboard
        </Link>
      </li>
      <li>
        <Link className="p-0" to="/menu">
          Our menu
        </Link>
      </li>
      <li>
        <Link className="p-0" to="/shop/salad">
          our shop
        </Link>
      </li>
    </>
  );

  return (
    <div className="navbar lg:max-w-screen-xl mx-auto fixed z-10 bg-black/40 text-white">
      <div className="navbar-start">
        <Link to="/" className="uppercase font-bold flex items-center gap-2">
          <img className="avatar w-8" src={logo} alt="" />
          <div>
            <span className="md:text-3xl text-xl">bistro boss</span> <br />
            <span className="md:text-xl text-base md:tracking-[0.38em] tracking-widest">
              restaurant
            </span>
          </div>
        </Link>
      </div>
      <div className="navbar-end">
        <div>
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
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
            </label>
            <ul
              tabIndex={0}
              className="menu menu-compact dropdown-content mt-3 px-6 py-3 space-y-3 shadow bg-base-100 rounded-box w-max uppercase"
            >
              {list}
            </ul>
          </div>
        </div>
        <div className="hidden lg:flex">
          <ul className="menu menu-horizontal px-1 space-x-4">{list}</ul>
        </div>
        <div className="flex">
          <div className="dropdown dropdown-end">
            <label tabIndex={0} className="btn btn-ghost btn-circle">
              <div className="indicator">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                  />
                </svg>
                <span className="badge badge-sm indicator-item">8</span>
              </div>
            </label>
            <div
              tabIndex={0}
              className="mt-3 card card-compact dropdown-content w-max px-4 bg-base-100 shadow"
            >
              <div className="card-body">
                <span className="font-bold text-lg">8 Items</span>
                <span className="text-info">Subtotal: $999</span>
                <div className="card-actions">
                  <button className="btn btn-primary btn-outline btn-block">
                    View cart
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="dropdown dropdown-end">
            <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
              <div className="w-[30px] rounded-full">
                <img src={user? user.photoURL : ''} />
              </div>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-max  px-4"
            >
              {user ? (
                <>
                  <li>{user.displayName}</li>
                  <button
                    onClick={handleLogOut}
                    className="btn btn-ghost hover:btn-error"
                  >
                    <Link className="p-0">LogOut</Link>
                  </button>
                </>
              ) : (
                <button>
                  <Link className="p-0" to="/login">
                    Login
                  </Link>
                </button>
              )}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
