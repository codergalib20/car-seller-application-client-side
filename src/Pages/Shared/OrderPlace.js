import { Backdrop, Box, Fade, Modal } from "@mui/material/";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { FaTimes } from "react-icons/fa";
import swal from "sweetalert";
import useAuth from "../../hooks/useAuth";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "100%",
  maxWidth: "500px",
  bgcolor: "background.paper",
  boxShadow: 24,
  p: 4,
};

const OrderPlace = ({
  open,
  handleClose,
  handleOpen,
  title,
  about,
  img,
  price,
  release,
}) => {
  const { register, handleSubmit, reset } = useForm();
  const [date, setDate] = useState(new Date());
  const onSubmit = (data) => {
    data.title = title;
    data.ordered = date.toLocaleDateString();
    data.about = about;
    data.price = price;
    data.release = release;
    data.status = "pending";
    console.log(data);

    // Save to database
    fetch("https://fierce-scrubland-09393.herokuapp.com/orders", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((result) => {
        if (result.insertedId) {
          swal("Order Placed", "Your order has been placed", "success");
        }
      })
      .catch((err) => console.log(err));

    // Handle Close Order Popup & Reset Form
    reset();
    handleClose(true);
  };
  const { user } = useAuth();
  return (
    <Modal
      aria-labelledby="transition-modal-title"
      aria-describedby="transition-modal-description"
      open={open}
      onClose={handleClose}
      closeAfterTransition
      BackdropComponent={Backdrop}
      BackdropProps={{
        timeout: 800,
      }}
    >
      <Fade in={open}>
        <Box className="relative" sx={style}>
          <div>
            <span
              className="absolute top-3 right-3 text-2xl text-red-700 cursor-pointer"
              onClick={handleClose}
            >
              <FaTimes />
            </span>
            <form onSubmit={handleSubmit(onSubmit)}>
              <input
                className="w-full py-2 px-4 text-lg border border-red-700 mt-3 rounded-md"
                value={user?.displayName}
                {...register("userName", { required: true })}
                placeholder="Name"
              />
              <input
                className="w-full py-2 px-4 text-lg border border-red-700 mt-3 rounded-md"
                value={user?.email}
                {...register("user_email", { required: true })}
                placeholder="E-mail"
              />
              <input
                className="w-full py-2 px-4 text-lg border border-red-700 mt-3 rounded-md"
                {...register("user_city", { required: true })}
                placeholder="City"
              />
              <input
                className="w-full py-2 px-4 text-lg border border-red-700 mt-3 rounded-md"
                {...register("user_country", { required: true })}
                placeholder="Country"
              />
              <input
                className="w-full py-2 px-4 text-lg border-2 bg-red-600 font-bold text-white cursor-pointer border-red-700 mt-3 rounded-md"
                type="submit"
                value="Submit Order"
              />
            </form>
          </div>
        </Box>
      </Fade>
    </Modal>
  );
};

export default OrderPlace;
