import { IoWater } from "react-icons/io5";

const WhyChooseUs = () => {
  return (
    <section className="flex items-center justify-center p-8 bg-gray-800 text-white">
      <div className="container flex flex-col md:flex-row items-center md:space-x-8 relative">
        {/* Left Section - Text */}
        <div className="md:w-1/2 space-y-6 relative z-10">
          <h4 className="text-blue-400 uppercase font-semibold text-sm">
            Why Choose Us
          </h4>
          <h2 className="text-3xl md:text-4xl font-bold">
            From drip to drain we've got you covered
          </h2>
          <div className="space-y-6">
            {/* Service List */}
            {[
              {
                number: 1,
                title: "Pipe Installation & Repair",
                description:
                  "Signs include low water pressure, unusual noises, slow drainage, or visible leaks.",
              },
              {
                number: 2,
                title: "Kitchen Plumbing Services",
                description:
                  "Signs include low water pressure, unusual noises, slow drainage, or visible leaks.",
              },
              {
                number: 3,
                title: "Your Water Woes Our Expertise",
                description:
                  "Signs include low water pressure, unusual noises, slow drainage, or visible leaks.",
              },
            ].map((service, index) => (
              <div key={index} className="flex items-start space-x-4">
                {/* Number in Droplet Shape */}
                <div className="flex items-center justify-center w-10 h-10 rounded-full bg-blue-500 font-semibold text-white">
                  {service.number}
                </div>
                {/* Service Title and Description */}
                <div>
                  <h3 className="font-semibold text-xl">{service.title}</h3>
                  <p className="text-gray-300">{service.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right Section - Background Image with Overlays */}
        <div className="relative hidden md:block md:w-1/2 h-80 md:h-[70vh] mt-8 md:mt-0">
          <div
            className="w-full h-full bg-cover bg-center rounded-md"
            style={{
              backgroundImage: `url('/home/choose.jpg')`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            {/* Decorative Overlay with Crooked Line */}
            <div className="absolute inset-y-0 right-0 w-full md:w-1/2 bg-blue-500 opacity-20 -skew-y-3 transform translate-x-[50%] md:translate-x-[10%]"></div>
            <div className="absolute inset-y-0 right-0 w-full md:w-1/2 bg-white -skew-y-3 transform translate-x-[40%] md:translate-x-[8%] opacity-20"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
