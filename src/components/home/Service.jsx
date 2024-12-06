import { FaTools, FaShower, FaWater, FaWrench } from "react-icons/fa";
import { IoWater } from "react-icons/io5";

const services = [
  {
    icon: <FaShower className="text-blue-600 text-3xl" />,
    title: "Bathroom Remodeling",
    description:
      "Make sure the plumber you properly insured. This protects you in case any accidents or damage that may",
    image: "/home/sservice.jpg",
  },
  {
    icon: <FaWrench className="text-blue-600 text-3xl" />,
    title: "Emergency Plumbing",
    description:
      "Make sure the plumber you properly insured. This protects you in case any accidents or damage that may",
    image: "/home/service.jpg",
  },
  {
    icon: <FaWater className="text-blue-600 text-3xl" />,
    title: "Drains Cleaning",
    description:
      "Make sure the plumber you properly insured. This protects you in case any accidents or damage that may",
    image: "/home/service1.jpg",
  },
  {
    icon: <FaTools className="text-blue-600 text-3xl" />,
    title: "Perfectionists Pipe",
    description:
      "Make sure the plumber you properly insured. This protects you in case any accidents or damage that may",
    image: "/home/service2.jpg",
  },
];

const Services = () => {
  return (
    <section className="text-center relative py-16 bg-gray-50">
      <h3 className="poppins-light heading">SERVICES</h3>
      <h2 className="text-4xl font-bold text-gray-800 mb-10">
        We Provide Service For You
      </h2>

      <div className="grid  md:grid-cols-2 gap-12 px-6 md:px-16">
        {services.map((service, index) => (
          <div
            key={index}
            className=" lg:pt-28 shadow-lg sm:text-center lg:shadow-none relative flex flex-col lg:flex-row gap-4 items-center lg:text-left rounded-lg overflow-hidden p-6 space-y-4"
          >
            {/* Image */}
            <img
              src={service.image}
              alt={service.title}
              className="w-56 z-30 h-56 object-cover rounded-full"
            />

            {/* Icon */}
            <div className="flex items-center -mt-8 space-x-4">
              <div className="flex-shrink-0 z-40 absolute left-60 top-14 md:left-52 md:top-8 lg:top-24 lg:left-44 p-3 bg-blue-100 rounded-full">
                {service.icon}
              </div>
            </div>

            <div>
              {/* title */}
              <h3 className="text-xl font-semibold text-gray-800">
                {service.title}
              </h3>

              {/* Description */}
              <p className="text-gray-500">{service.description}</p>

              {/* Read More Link */}
              <a
                href="/services"
                className="text-blue-600 no-underline font-semibold hover:underline mt-4"
              >
                READ MORE →
              </a>
            </div>
            <div className="absolute hidden lg:block z-0 top-10 left-36 w-64 h-[85px] border-t-2 border-r-2 border-l-2 border-dashed border-[#1690FF] rounded-t-lg"></div>
            <IoWater className="text-[#1690FF] absolute z-50 text-2xl left-[387px] bottom-[196px]" />

            {/* Decorative Line */}
            {index % 2 === 0 ? (
              <div className="absolute top-0 right-0 w-1 h-full "></div>
            ) : (
              <div className="absolute bottom-0 left-0 w-1 h-full"></div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;
