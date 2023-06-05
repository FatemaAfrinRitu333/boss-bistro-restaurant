import React from "react";
import { Helmet } from "react-helmet-async";
import useCart from "../../../Hooks/useCart";
import { FaTrashAlt } from "react-icons/fa";
import Swal from "sweetalert2";

const MyCart = () => {
  const [cart, refetch] = useCart();
  const total = cart.reduce((acc, item) => item.price + acc, 0);

  const handleDelete = (id) => {
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
        fetch(`http://localhost:5000/carts/${id}`, {
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
    <div className="w-full px-12 mt-8">
      <Helmet>
        <title>Bistro | My Cart</title>
      </Helmet>
      <div className="w-full flex justify-between items-center font-bold uppercase">
        <h2 className="text-xl">Total Orders: {cart.length}</h2>
        <h2 className="text-xl">Total price: ${total.toFixed(2)}</h2>
        <button className="btn bg-[#D1A054] border-0 text-white">pay</button>
      </div>
      <div className="overflow-x-auto my-7 w-full">
        <table className="table w-full">
          {/* head */}
          <thead>
            <tr>
              <th>#</th>
              <th>Food</th>
              <th>Item Name</th>
              <th>Price</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}
            {cart.map((row, index) => (
              <tr key={row._id}>
                <td>{index + 1}</td>
                <td>
                  <div className="avatar">
                    <div className="mask mask-squircle w-12 h-12">
                      <img
                        src={row.image}
                        alt="Avatar Tailwind CSS Component"
                      />
                    </div>
                  </div>
                </td>
                <td>{row.name}</td>
                <td className="text-end">$ {row.price}</td>
                <td>
                  <button
                    onClick={() => handleDelete(row._id)}
                    className="btn btn-ghost btn-sm bg-red-700 text-white"
                  >
                    <FaTrashAlt />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
          {/* foot */}
          <tfoot>
            <tr>
              <th>#</th>
              <th>Item Image</th>
              <th>Item Name</th>
              <th>Price</th>
              <th>Action</th>
            </tr>
          </tfoot>
        </table>
      </div>
    </div>
  );
};

export default MyCart;
