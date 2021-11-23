import React, { useEffect, useState } from "react";
import swal from "sweetalert";
import useAuth from "../../hooks/useAuth";

const MyOrders = () => {
  const [orders, setOrders] = useState([]);
  const { user } = useAuth();
  useEffect(() => {
    fetch(`https://fierce-scrubland-09393.herokuapp.com/orders`)
      .then((res) => res.json())
      .then((data) => setOrders(data));
  }, []);
  const filterEmail = orders.filter((order) => order.user_email === user.email);
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
  return (
    <div>
      <div className="container">
        <div>
          <table className="w-full">
            <tr className="py-3 w-full grid md:grid-cols-6 sm:grid-cols-3 text-left bg-red-500">
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
            {filterEmail.map((order) => (
              <tr className="bg-green-500 py-3 w-full mt-6 grid md:grid-cols-6 sm:grid-cols-3">
                <td className="px-2 pt-4 md:pt-0 flex items-center text-red-800 font-medium text-md">
                  {order.user_email}
                </td>
                <td className="px-2 pt-4 md:pt-0 flex items-center text-red-800 font-medium text-md">
                  {order.ordered}
                </td>
                <td className="px-2 pt-4 md:pt-0 flex items-center text-red-800 font-medium text-md">
                  {order.user_country}
                </td>
                <td className="px-2 pt-4 md:pt-0 flex items-center text-red-800 font-medium text-md">
                  {order.user_city}
                </td>
                <td className="px-2 pt-4 md:pt-0 flex items-center text-red-800 font-medium text-md">
                  {order.status}
                </td>
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

export default MyOrders;
