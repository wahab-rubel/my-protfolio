import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";

const Slider = () => {
  const slides = [
    {
      id: 1,
      image: "https://via.placeholder.com/800x400?text=Slide+1",
      title: "Web Development",
      description: "Building modern and responsive websites tailored to your needs.",
    },
    {
      id: 2,
      image: "https://via.placeholder.com/800x400?text=Slide+2",
      title: "UI/UX Design",
      description: "Crafting user-friendly designs with a focus on user experience.",
    },
    {
      id: 3,
      image: "https://via.placeholder.com/800x400?text=Slide+3",
      title: "Full-Stack Solutions",
      description: "Delivering complete web solutions from frontend to backend.",
    },
  ];

  return (
    <section className="bg-gray-100 py-16">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-800">
          My Portfolio Highlights
        </h2>
        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          spaceBetween={30}
          slidesPerView={1}
          navigation
          pagination={{ clickable: true }}
          autoplay={{ delay: 3000, disableOnInteraction: false }}
          className="rounded-lg shadow-lg"
        >
          {slides.map((slide) => (
            <SwiperSlide key={slide.id}>
              <div className="relative">
                <img
                  src={slide.image}
                  alt={slide.title}
                  className="w-full h-[400px] object-cover rounded-lg"
                />
                <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-center items-center text-center text-white px-6">
                  <h3 className="text-2xl md:text-3xl font-bold">{slide.title}</h3>
                  <p className="text-sm md:text-base mt-4">{slide.description}</p>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default Slider;
