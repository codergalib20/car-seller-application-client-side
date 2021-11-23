import Rating from "@mui/material/Rating";
import React, { useEffect, useState } from "react";
import { A11y, Navigation, Pagination, Scrollbar } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react/swiper-react.js";

const Reviews = () => {
  const [reviews, setReviews] = useState([]);
  useEffect(() => {
    fetch("https://fierce-scrubland-09393.herokuapp.com/reviews")
      .then((res) => res.json())
      .then((data) => setReviews(data));
  }, []);
  return (
    <div className="pb-12">
      <div className="container mx-auto overflow-x-hidden h-96 px-2">
        <Swiper
          className=" flex items-center h-96"
          modules={[Navigation, Pagination, Scrollbar, A11y]}
          spaceBetween={50}
          slidesPerView={3}
          navigation
          pagination={{ clickable: true }}
          scrollbar={{ draggable: true }}
          onSwiper={(swiper) => console.log(swiper)}
          onSlideChange={() => console.log("slide change")}
        >
          {reviews.map((review) => (
            <SwiperSlide className="bg-gray-800 p-4 relative" key={review.id}>
              <div>
                <div className="w-16 h-16 rounded-full overflow-hidden absolute right-8 -top-8">
                  <img src={review.img} alt="" />
                </div>
                <h1 className="text-red-50 font-bold text-2xl capitalize">
                  {review.name}
                </h1>
                <span>{review.profession}</span>
                <p className="text-red-300" style={{ fontSize: "14px" }}>
                  {review.description}
                </p>
                <Rating
                  name="read-only"
                  value={Number(review.rating)}
                  readOnly
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default Reviews;
