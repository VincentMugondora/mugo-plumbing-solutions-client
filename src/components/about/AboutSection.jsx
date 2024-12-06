import { FaStar } from "react-icons/fa";

const AboutUsSection = () => {
  return (
    <section className="bg-gradient-to-b from-white pb-5 via-indigo-50 to-purple-50 container-fluid">
      <div className="max-w-6xl mx-auto text-center">
        <h4 className="poppins-regular text-xl text-blue-600">
          ABOUT OUR COMPANY
        </h4>
        {/* Heading */}
        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight mb-4">
          Uncover{" "}
          <span className="text-[#00C9B5]">
            Our Journey: <br className="hidden md:block" />
          </span>{" "}
          Uniting Through Creativity
        </h2>
        <div className="flex justify-center items-center w-full">
          <p className="text-lg text-gray-600 lg:w-[60%] text-center mb-10">
            Our dedication to quality and excellence has made us a trusted
            partner for enterprises looking to enhance their online presence.
          </p>
        </div>

        {/* Images Section */}
        <div className="row g-4">
          <div className="col-md-8">
            <div className="relative">
              <img
                src="/about/about-6.jpg"
                alt="Team discussion"
                className="rounded-lg shadow-md w-full h-[70vh]"
              />

              {/* Happy Clients Info */}
              <div className="absolute bottom-4 left-4 bg-white opacity-95 h-[250px] p-3 filter drop-shadow-lg flex flex-col justify-center items-center w-[200px] rounded-lg shadow-lg z-[1]">
                <div className="absolute inset-0 rounded-lg bg-white opacity-50 z-30"></div>

                <p className="text-sm font-medium text-gray-700">
                  Loved by over <span className="font-bold">4k</span> happy
                  clients
                </p>
                <div className="flex mt-2 relative overflow-hidden items-center justify-center">
                  {/* Adjusted client images */}
                  <img
                    src="/about/happy.webp"
                    alt="client"
                    className="w-[60px] h-[60px] rounded-full border-2 border-white mr-[-20px] object-cover hover:scale-110 transition-all duration-300 "
                  />
                  <div className="w-[80px] cursor-pointer h-[80px] z-50 overflow-hidden rounded-full">
                    <img
                      src="/about/happy.jpeg"
                      alt="client"
                      className="w-[80px] z-50 h-[80px] rounded-full border-2 border-white object-cover hover:scale-110 transition-all duration-300"
                    />
                  </div>
                  <img
                    src="/about/happy.avif"
                    alt="client"
                    className="w-[60px] h-[60px] rounded-full -ml-[20px] border-2 border-white object-cover hover:scale-110 transition-all duration-300"
                  />
                </div>
                <div className="flex items-center mt-3 z-50 justify-center gap-2">
                  <FaStar className="text-yellow-500" />
                  <FaStar className="text-yellow-500" />
                  <FaStar className="text-yellow-500" />
                  <FaStar className="text-yellow-500" />
                  <FaStar className="text-yellow-500" />
                </div>
              </div>
            </div>
          </div>

          <div className="col-md-4 d-flex flex-column gap-4">
            {/* Set height of these images to half of the left image */}
            <img
              src="/about/about-test.png"
              alt="Team working"
              className="rounded-lg shadow-md w-full h-[50%]"
            />
            <img
              src="/about/creative.jpg"
              alt="Creative workspace"
              className="rounded-lg shadow-md w-full h-[50%]"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUsSection;
