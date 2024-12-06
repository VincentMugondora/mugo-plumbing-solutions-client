import Button from "../miscellenous/Button"; 
import { MdDoubleArrow } from "react-icons/md";

const Hero = () => {
  return (
    <div
      className="w-full h-[86vh]"
      style={{
        backgroundImage: `url('/home/hero-bg.jpg')`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="container-fluid">
        <div className="row">
          <div className="col-lg-6 h-[87vh] flex items-center z-0 glass">
            <div className="md:px-28 sm:text-center lg:text-left">
              <h1 className=" text-5xl leading-[60px] poppins-semibold">
                Precision{" "}
                <span className="text-[#0094D2]">Plumbing, Trusted</span>{" "}
                Traditions.
              </h1>
              <p className="poppins-regular">
                Mugo Plumbing Solutions offers reliable, expert plumbing for
                homes and businesses. From quick repairs to full installations,
                we’re your trusted local partner for quality service and peace
                of mind.
              </p>
              <Button
                bgColor="#00C6B1"
                to="/booking"
                text="Book Now"
                icon={<MdDoubleArrow />}
              />
            </div>
          </div>
          <div className="col-lg-6 hidden lg:block relative">
            <img src="/home/plumber.webp" alt="img" className="h-[82vh] w-auto -ml-32 absolute -bottom-0" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
