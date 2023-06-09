import React from "react";
import SectionTitle from "../../../Components/SectionTitle/SectionTitle";
import { Helmet } from "react-helmet-async";
import useMenu from "../../../Hooks/useMenu";
import { BiEditAlt } from "react-icons/bi";
import { FaTrashAlt } from "react-icons/fa";
import Swal from "sweetalert2";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";

const ManageItems = () => {
  const [menu, , refetch] = useMenu();
  const [axiosSecure] = useAxiosSecure();

  const handleDelete = item => {
    Swal.fire({
        title: 'Are you sure?',
        text: "You won't be able to revert this!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes, delete it!'
    }).then((result) => {
        if (result.isConfirmed) {

            axiosSecure.delete(`/menu/${item._id}`)
                .then(res => {
                    console.log('deleted res', res.data);
                    if (res.data.deletedCount > 0) {
                        refetch();
                        Swal.fire(
                            'Deleted!',
                            'Your file has been deleted.',
                            'success'
                        )
                    }
                })

        }
    })
}

  //   Swal.fire("Deleted!", "This item had been removed", "success");

  return (
    <div className="w-full mx-auto mb-9 bg-[#f3f3f3]">
      <Helmet>
        <title>Boss | Manage All Items</title>
      </Helmet>
      <SectionTitle
        subHeading={"hurry up"}
        heading={"Manage all items"}
      ></SectionTitle>
      <div className="mx-7 p-5 bg-white">
        <div className="overflow-x-auto">
          <table className="table table-xs">
            {/* head */}
            <thead>
              <tr>
                <th></th>
                <th>Item</th>
                <th>Price</th>
                <th>Action</th>
                <th>Delete</th>
              </tr>
            </thead>
            <tbody className="bg-white">
              {menu.map((item, index) => (
                <tr key={item._id} className="hover">
                  <th>{index + 1}</th>
                  <td>
                    <div className="flex items-center space-x-3">
                      <div className="avatar">
                        <div className="mask mask-squircle w-12 h-12">
                          <img
                            src={item.image}
                            alt="Avatar Tailwind CSS Component"
                          />
                        </div>
                      </div>
                      <div>
                        <div className="font-bold">{item.name}</div>
                      </div>
                    </div>
                  </td>
                  <td className="text-right">${item.price}</td>
                  <td>
                    <button className="btn btn-ghost btn-xs bg-accent text-white">
                      <BiEditAlt />{" "}
                    </button>
                  </td>
                  <td>
                    <button
                      onClick={() => handleDelete(item)}
                      className="btn btn-ghost btn-xs bg-red-700 text-white"
                    >
                      <FaTrashAlt />{" "}
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

export default ManageItems;
