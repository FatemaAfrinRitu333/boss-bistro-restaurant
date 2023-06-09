import React from "react";
import { NavLink, Outlet } from "react-router-dom";
import {
  FaShoppingCart,
  FaMoneyBill,
  FaCalendarAlt,
  FaHome,
  FaUtensils,
  FaBook,
  FaUsers,
  FaBars,
} from "react-icons/fa";
import { MdReviews } from "react-icons/md";
import { AiOutlineBars } from "react-icons/ai";
import { IoIosMail } from "react-icons/io";
import { BsFillBagCheckFill, BsFillCalendarCheckFill } from "react-icons/bs";
import useCart from "../Hooks/useCart";
import useAdmin from "../Hooks/useAdmin";

const Dashboard = () => {
  const [cart] = useCart();

  // TODO: load data from the server to have dynamic isAdmin based data
  // const isAdmin = true;
  const [isAdmin] = useAdmin();

  return (
    <div className="drawer drawer-mobile lg:drawer-open">
      <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content flex flex-col items-center">
        {/* Page content here */}

        <label
          htmlFor="my-drawer-2"
          className="btn btn-ghost drawer-button lg:hidden"
        >
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
        <Outlet></Outlet>
      </div>
      <div className="drawer-side">
        <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
        <ul className="menu py-4 px-6 w-max bg-[#D1A054] text-base-content uppercase">
          {/* Sidebar content here */}
          <p className="mt-5 mb-7">
            <span className="text-2xl font-bold py-0">Bistro Boss</span>
            <br />
            <span className="text-lg tracking-[.38em] py-0 font-semibold">
              restaurant
            </span>
          </p>
          {isAdmin ? (
            <> 
              <li>
                <NavLink to="/">
                  <FaHome /> Admin Home
                </NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/add-item">
                  <FaUtensils /> Add Items
                </NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/manage-items">
                  <FaBars /> Manage Items
                </NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/manage-bookings">
                  <FaBook /> Manage Bookings
                </NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/all-users">
                  <FaUsers /> All Users
                </NavLink>
              </li>
            </>
          ) : (
            <>
              <li>
                <NavLink to="/">
                  <FaHome /> User Home
                </NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/reservation">
                  <FaCalendarAlt /> Reservation
                </NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/payment-history">
                  <FaMoneyBill /> Payment History
                </NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/my-cart">
                  <FaShoppingCart /> My Cart
                  <span className="badge badge-sm badge-success indicator-item">
                    {cart?.length || 0}
                  </span>
                </NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/add-review">
                  <MdReviews /> Add review
                </NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/my-booking">
                  <BsFillCalendarCheckFill /> My booking
                </NavLink>
              </li>
            </>
          )}

          <div className="divider"></div>
          <li>
            <NavLink to="/">
              <BsFillCalendarCheckFill /> Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/menu">
              <AiOutlineBars /> Menu
            </NavLink>
          </li>
          <li>
            <NavLink to="/shop">
              <BsFillBagCheckFill /> shop
            </NavLink>
          </li>
          <li>
            <NavLink to="/contact">
              <IoIosMail /> contact
            </NavLink>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Dashboard;
