import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css"; 
import "swiper/css/pagination"; 
import "swiper/css/navigation"; 
import { FaArrowLeftLong } from "react-icons/fa6";
import { Pagination, Navigation, Autoplay } from "swiper/modules";
import { FaArrowRightLong } from "react-icons/fa6";
import { useRef } from "react";

const WhyUsSection = () => {
  const swiperRef = useRef(null);

  const cards = [
    {
      id: 1,
      category: "PLUMBING",
      title: "Reliable Service",
      description:
        "Mugo Plumbing Solutions offers reliable and efficient plumbing services tailored to your needs.",
      image: "/about/about-2.jpg",
    },
    {
      id: 2,
      category: "EXPERIENCE",
      title: "Experienced Professionals",
      description:
        "Our team consists of experienced professionals who ensure quality workmanship.",
      image: "/about/about-3.jpg",
    },
    {
      id: 3,
      category: "CUSTOMER FOCUS",
      title: "Customer Satisfaction",
      description:
        "We prioritize customer satisfaction and strive to exceed expectations with every job.",
      image: "/about/about-4.jpg",
    },
    {
      id: 4,
      category: "AFFORDABLE PRICING",
      title: "Affordable Pricing",
      description:
        "We provide high-quality services at competitive prices without compromising on quality.",
      image: "/about/about-6.jpg",
    },
    {
      id: 5,
      category: "EMERGENCY SERVICES",
      title: "24/7 Emergency Services",
      description:
        "Available around the clock for any plumbing emergencies you may encounter.",
      image: "/about/about-7.jpg",
    },
  ];

  return (
    <section className="container-fluid py-12 bg-[#CECFD0]">
      {/* Section Heading */}
      <div className="container">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-left w-full flex place-items-end justify-between mb-12">
            <div className="w-full lg:w-1/2">
              <p className="text-blue-600 font-medium tracking-wider uppercase mb-2">
                Why Choose Us?
              </p>
              <h2 className="text-3xl font-bold text-gray-800">
                Discover Why Mugo Plumbing Solutions Stands Out
              </h2>
              <p className="text-gray-500 mt-2">
                Here are a few reasons why our customers choose us.
              </p>
            </div>
            <div className="gap-2 text-lg hidden md:flex text-blue-500">
              <button
                onClick={() => swiperRef.current?.slidePrev()}
                className="w-[50px] flex items-center justify-center rounded-full bg-white shadow-lg hover:bg-gray-50"
              >
                <FaArrowLeftLong className="text-2xl text-black" />
              </button>
              <button
                onClick={() => swiperRef.current?.slideNext()}
                className="w-[50px] h-[50px] flex items-center justify-center rounded-full bg-white shadow-lg hover:bg-gray-50"
              >
                <FaArrowRightLong className="text-2xl text-black" />
              </button>
            </div>
          </div>
        </div>

        {/* Swiper Carousel */}
        <div className="max-w-6xl mx-auto px-4">
          <Swiper
            onSwiper={(swiper) => {
              swiperRef.current = swiper;
            }}
            modules={[Pagination, Navigation, Autoplay]}
            slidesPerView={1}
            spaceBetween={30}
            navigation={false}
            loop={true}
            autoplay={{
              delay: 5000,
              disableOnInteraction: false,
            }}
            pagination={{ clickable: true }}
            breakpoints={{
              640: { slidesPerView: 1 },
              768: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
            }}
            className="mySwiper"
          >
            {cards.map((card) => (
              <SwiperSlide key={card.id}>
                <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
                  <img
                    src={card.image}
                    alt={card.title}
                    className="w-full h-48 object-cover"
                  />
                  <div className="p-6">
                    <span className="bg-blue-100 text-blue-600 text-xs font-medium uppercase tracking-wider px-2 py-1 rounded">
                      {card.category}
                    </span>
                    <h3 className="text-lg font-semibold text-gray-800 mt-4">
                      {card.title}
                    </h3>
                    <p className="text-gray-500 mt-2">{card.description}</p>
                    <a
                      href="#"
                      className="text-blue-600 no-underline font-medium inline-flex items-center mt-4"
                    >
                      Keep Reading <span className="ml-1">→</span>
                    </a>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default WhyUsSection;
