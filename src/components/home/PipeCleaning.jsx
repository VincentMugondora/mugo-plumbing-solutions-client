import Button from "../miscellenous/Button";
import { MdDoubleArrow } from "react-icons/md";
import CallButton from "../miscellenous/CallButton";

const PipeCleaning = () => {
  return (
    <div
      className="w-full p-10 md:p-20"
      style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('/home/1-2.jpg')`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="container flex flex-col items-center gap-4 text-center text-white">
        <h2 className="heading poppins-light text-lg md:text-xl lg:text-2xl">
          FAST CLEAN AND INEXPENSIVE
        </h2>
        <div className="flex flex-col items-center">
          <h1 className="text-2xl md:text-3xl lg:text-5xl poppins-light">
            Approach Of Pipe Cleaning Nuremberg
          </h1>
          <div className="w-[90%] md:w-[40%] bg-[#00C6B1] flex items-center justify-center h-[3px] mb-5 rounded-full">
            <div className="w-3 h-3 bg-inherit rounded-full"></div>
          </div>
        </div>
        <p className="lg:w-[65%] px-4">
          At Mugo Plumbing Solutions, we elevate pipe cleaning services in
          Nuremberg by utilizing high-pressure water jetting and environmentally
          friendly techniques. Our approach effectively addresses even the most
          stubborn clogs without causing harm to the environment.
          <span className="hidden md:block">
            {" "}
            Our skilled team employs advanced CCTV inspections to identify
            potential issues early, ensuring your pipes remain clear and
            efficient. Choose Mugo Plumbing Solutions for a cleaner, greener
            plumbing experience that keeps your Nuremberg property flowing
            smoothly!
          </span>
        </p>
        <div className="flex flex-col md:flex-row items-center gap-2">
          <Button
            bgColor="#00C6B1"
            to="/booking"
            text="Request A Service"
            icon={<MdDoubleArrow />}
          />
          <a href="/booking" className="text-white hidden md:block">
            or
          </a>
          <CallButton
            bgColor="#0096D2"
            hoverBgColor="#00C6B1"
            text="Call Us Now!"
            icon={
              <box-icon
                name="phone-call"
                animation="tada"
                color="#ffffff"
              ></box-icon>
            }
            className="ml-4 hidden md:block"
          />
        </div>
      </div>
    </div>
  );
};

export default PipeCleaning;
