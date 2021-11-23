import React, { useEffect, useState } from "react";
import swal from "sweetalert";
import useAuth from "../../hooks/useAuth";

const ManageAllOrders = () => {
  const [orders, setOrders] = useState([]);
  const { user } = useAuth();
  // Fetch orders data
  useEffect(() => {
    fetch(`https://fierce-scrubland-09393.herokuapp.com/orders`)
      .then((res) => res.json())
      .then((data) => setOrders(data));
  }, []);
  // Handle Order product delete
  const handleDeleteOrder = (id) => {
    swal({
      title: "Are you sure?",
      text: "Once deleted, you will not be able to recover this deleted product",
      icon: "warning",
      buttons: true,
      dangerMode: true,
    }).then((willDelete) => {
      if (willDelete) {
        const url = `https://fierce-scrubland-09393.herokuapp.com/orders/${id}`;
        fetch(url, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            const remainingOrders = orders.filter((order) => order._id !== id);
            setOrders(remainingOrders);
            if (data.deletedCount === 1) {
              swal("", "Order deleted successfully!", "success");
            }
          });
      } else {
        swal("Your Ordered product is safe!");
      }
    });
  };

  //  _________________Status Pending and Approved________________________
  const acceptOrderHandle = (id) => {
    swal({
      title: "Are you sure?",
      text: "Once Approved, you will not be able to unapproved this Ordered Services!",
      icon: "warning",
      buttons: true,
      dangerMode: true,
    }).then((willDelete) => {
      if (willDelete) {
        const url = `https://fierce-scrubland-09393.herokuapp.com/orders/${id}`;
        fetch(url, {
          method: "PUT",
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.modifiedCount > 0) {
              const remainingOrders = orders.filter(
                (order) => order._id !== id
              );
              setOrders(remainingOrders);
              swal("Poof! Your Customer's Order Service has been Approved!", {
                icon: "success",
              });
            }
          });
      } else {
        swal("Services Approved Close!");
      }
    });
  };

  return (
    <div>
      <div className="container ">
        <div>
          <table className="w-full">
            <tr className="py-3 w-full bg-red-500 grid md:grid-cols-6 sm:grid-cols-3 text-left">
              <th className="px-2 pt-4 md:pt-0 text-lg font-bold text-white">
                Email
              </th>
              <th className="px-2 pt-4 md:pt-0 text-lg font-bold text-white">
                Order date
              </th>
              <th className="px-2 pt-4 md:pt-0 text-lg font-bold text-white">
                Country
              </th>
              <th className="px-2 pt-4 md:pt-0 text-lg font-bold text-white">
                City
              </th>
              <th className="px-2 pt-4 md:pt-0 text-lg font-bold text-white">
                Status
              </th>
            </tr>
            {orders.map((order) => (
              <tr
                key={order._id}
                className="bg-green-500 py-3 w-full grid md:grid-cols-6 sm:grid-cols-3 mt-3  gap-3"
              >
                <td className="px-2 pt-4 md:pt-0 text-red-800 font-medium text-md">
                  {order.user_email}
                </td>
                <td className="px-2 pt-4 md:pt-0 text-red-800 font-medium text-md">
                  {order.ordered}
                </td>
                <td className="px-2 pt-4 md:pt-0 text-red-800 font-medium text-md">
                  {order.user_country}
                </td>
                <td className="px-2 pt-4 md:pt-0 text-red-800 font-medium text-md">
                  {order.user_city}
                </td>
                <button
                  onClick={() => acceptOrderHandle(order?._id)}
                  className="bg-red-700 py-3 text-red-50 font-medium text-lg"
                >
                  {order.status}
                </button>
                <button
                  onClick={() => handleDeleteOrder(order?._id)}
                  className="bg-red-700 py-3 text-red-50 font-medium text-lg"
                >
                  Delete
                </button>
              </tr>
            ))}
          </table>
        </div>
      </div>
    </div>
  );
};

export default ManageAllOrders;
