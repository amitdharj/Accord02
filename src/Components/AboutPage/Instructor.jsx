import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation, Autoplay } from "swiper/modules";

const instructors = [
  {
    name: "Leslie Alexander",
    role: "Instructors",
    image: "/1stInstructor.png", // replace with your image path
  },
  {
    name: "Ronald Richards",
    role: "Instructors",
    image: "/2ndInstructor.png",
  },
  {
    name: "Kristin Watson",
    role: "Instructors",
    image: "/3rdInstructor.png",
  },
  {
    name: "Brooklyn Simmons",
    role: "Instructors",
    image: "/1stInstructor.png",
  },
  {
    name: "Brooklyn Simmons",
    role: "Instructors",
    image: "/3rdInstructor.png",
  },
  {
    name: "Brooklyn Simmons",
    role: "Instructors",
    image: "/3rdInstructor.png",
  },
];

export default function Instructor() {
  return (
    <section className="py-12 pt-20 pb-20 ">
      <div className="text-center mb-10">
        <h4 className="text-orange-500 text-lg font-medium mb-1">Our Experts</h4>
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
          Our Expert Instructors
        </h2>
      </div>

      <div className="max-w-6xl mx-auto relative">
        <Swiper
          modules={[Navigation, Autoplay]}
          navigation
          autoplay={{ delay: 2000, disableOnInteraction: false }}
          loop={true}
          slidesPerView={1}
          spaceBetween={20}
          breakpoints={{
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 4 },
          }}
          className="px-4"
        >
          {instructors.map((instructor, index) => (
            <SwiperSlide key={index}>
              <div className="bg-white rounded-2xl overflow-hidden shadow-md">
                <div className="relative">
                  <img
                    src={instructor.image}
                    alt={instructor.name}
                    className="w-full h-64 object-cover"
                  />
                  <button className="absolute top-3 right-3 bg-white p-2 rounded-full shadow hover:bg-gray-100 transition">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="currentColor"
                      className="w-5 h-5 text-gray-700"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M15 8.25H9m6 3H9m6 3H9m-2.25-9h10.5a.75.75 0 0 1 .75.75v10.5a.75.75 0 0 1-.75.75H6.75a.75.75 0 0 1-.75-.75V6.75a.75.75 0 0 1 .75-.75z"
                      />
                    </svg>
                  </button>
                </div>
                <div className="text-center py-4">
                  <h3 className="font-semibold text-lg text-gray-800">
                    {instructor.name}
                  </h3>
                  <p className="text-gray-500 text-sm">{instructor.role}</p>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
