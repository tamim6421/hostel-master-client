import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";

import { Pagination, Navigation } from "swiper/modules";

const Review = () => {
  return (
    <div className="my-36">
      <div>
        <h1 className="text-center text-blue-500 font-bold text-3xl">
          Customer Voices: <br />
          Hear What They Say!
        </h1>
      </div>

      <div className="text-center flex justify-center mt-10">
        <div className="avatar-group -space-x-6 rtl:space-x-reverse">
          <div className="avatar">
            <div className="w-12">
              <img src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
            </div>
          </div>
          <div className="avatar">
            <div className="w-12">
              <img src="https://i.ibb.co/HNc9Lyv/model.png" />
            </div>
          </div>
          <div className="avatar">
            <div className="w-12">
              <img src="https://i.ibb.co/k5W6fsY/4a0ffae7dcdc5f1d1423bfbf192e0714.jpg" />
            </div>
          </div>
          <div className="avatar">
            <div className="w-12">
              <img src="https://i.ibb.co/k9GGzC7/Screenshot-3-removebg-preview.png" />
            </div>
          </div>
        </div>
      </div>

      <div className="mb-10 px-0">
        <Swiper
          pagination={{
            type: "fraction",
          }}
          navigation={true}
          modules={[Pagination, Navigation]}
          className="mySwiper w-3/4 text-gray-400  text-center"
        >
          <SwiperSlide className="px-16">
          <p className="text-gray-500 font-bold text-xl">Abul Khan</p>
            <p>Student </p>
            An unforgettable stay at aquarelle! The beachfront location provided
            breathtaking views, and the hotel's blend of luxury and a relaxed
            atmosphere was perfect. The attentive staff including a refreshing
            pool and superb dining options.
          </SwiperSlide>
          <SwiperSlide className="px-16">
          <p className="text-gray-500 font-bold text-xl">Fahim </p>
            <p>Student  </p>
            Emma Trueman ENVATO MARKET An unforgettable stay at aquarelle! The
            beachfront location provided breathtaking views, and the hotel's
            blend of luxury and a relaxed atmosphere was perfect. The attentive
            staff and excellent amenities,{" "}
          </SwiperSlide>
          <SwiperSlide className="px-16">
          <p className="text-gray-500 font-bold text-xl">Dela </p>
            <p>Developer </p>
            Emma Trueman ENVATO MARKET An unforgettable stay at aquarelle! The
            beachfront location provided breathtaking views, and the hotel's
            blend of luxury and a relaxed atmosphere was perfect. The attentive
            staff and excellent amenities,{" "}
          </SwiperSlide>
          <SwiperSlide className="px-16">
          <p className="text-gray-500 font-bold text-xl">Jhon Don </p>
            <p>Developer </p>
            Emma Trueman ENVATO MARKET An unforgettable stay at aquarelle! The
            beachfront location provided breathtaking views, and the hotel's
            blend of luxury and a relaxed atmosphere was perfect. The attentive
            staff and excellent amenities,{" "}
          </SwiperSlide>
          <SwiperSlide className="px-16">
            <p className="text-gray-500 font-bold text-xl">Tamim Hossan </p>
            <p>Developer </p>
            Emma Trueman ENVATO MARKET An unforgettable stay at aquarelle! The
            beachfront location provided breathtaking views, and the hotel's
            blend of luxury and a relaxed atmosphere was perfect. The attentive
            staff and excellent amenities,{" "}
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};

export default Review;
