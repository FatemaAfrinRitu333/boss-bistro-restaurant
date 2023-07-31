import { useQuery } from "@tanstack/react-query";
import React from "react";
import { Helmet } from "react-helmet-async";
import { FaTrashAlt, FaUserShield, FaUsers } from "react-icons/fa";
import Swal from "sweetalert2";

const AllUsers = () => {
  const { data: users = [], refetch } = useQuery(["users"], async () => {
    const res = await fetch("https://bistro-boss-server-ja6l.onrender.com/users");
    return res.json();
  });

  const handleMakeAdmin = (user) => {
    fetch(`https://bistro-boss-server-ja6l.onrender.com/users/admin/${user._id}`, {
      method: "PATCH",
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.modifiedCount) {
          refetch();
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: `Admin role assigned to ${user.name}`,
            showConfirmButton: false,
            timer: 1200,
          });
        }
      });
  };

  const handleDelete = (user) => {
    Swal.fire({
        title: "Are you sure you want to delete this item from your cart?",
        text: "You won't be able to revert this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, delete it!",
      }).then((result) => {
        if (result.isConfirmed) {
          fetch(`https://bistro-boss-server-ja6l.onrender.com/users/${user._id}`, {
              method: 'DELETE'
          })
          .then(res=> res.json())
          .then(data=>{
              if(data.deletedCount>0){
                  refetch();
                  Swal.fire("Deleted!", "This item had been removed", "success");
              }
              
          })
        }
      });
  };

  return (
    <div className="my-9 w-full mx-auto">
      <Helmet>
        <title>Boss | All Users</title>
      </Helmet>
      <div className="p-7 shadow-xl rounded-2xl">
        <h3 className="text-3xl font-semibold mb-6">
          Total Users: {users.length}
        </h3>
        <div className="overflow-x-auto w-full shadow-2xl rounded">
          <table className="table w-full">
            {/* head */}
            <thead>
              <tr>
                <th></th>
                <th>Name</th>
                <th>Email</th>
                <th>Role</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {users.map((user, index) => (
                <tr key={user._id} className="hover">
                  <th>{index + 1}</th>
                  <td>{user.name}</td>
                  <td>{user.email}</td>
                  <td>
                    {user?.role === "admin" ? (
                      <span className="font-bold">admin</span>
                    ) : (
                      <button
                        onClick={() => handleMakeAdmin(user)}
                        className="btn btn-ghost btn-sm bg-neutral text-white"
                      >
                        <FaUserShield />
                      </button>
                    )}
                  </td>
                  <td>
                    <button
                      onClick={() => handleDelete(user)}
                      className="btn btn-ghost btn-sm bg-red-700 text-white"
                    >
                      <FaTrashAlt />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default AllUsers;
