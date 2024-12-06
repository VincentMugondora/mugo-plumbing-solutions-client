import { specialityData } from "../../assets/assets";
import { Link } from "react-router-dom";

const SpecialityMenu = () => {
  return (
    <div
      className="flex flex-col -mt-4 items-center text-gray-800"
      id="speciality"
    >
      <h1 className="text-3xl font font-medium">Find A Plumber In Your Area</h1>
      <p className="sm:w-1/3 text-center text-sm">
        Simply browse through our extensive list of trusted plumbers, schedule
        your appointment hassle-free.
      </p>
      <div className="flex -mt-4 sm:justify-center gap-4 pt-5 w-full overflow-scroll">
        {specialityData.map((item, index) => (
          <Link
            onClick={() => scrollTo(0, 0)}
            className="flex no-underline flex-col items-center text-xs cursor-pointer flex-shrink-0 hover:translate-y-[-10px] transition-all duration-500"
            key={index}
            to={`/plumbers/${item.place}`}
          >
            <img
              className="w-16 sm:w-24 h-24 object-cover object-center rounded-full"
              src={item.image}
              alt="img"
            />
            <p className="no-underline text-gray-800">{item.place}</p>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default SpecialityMenu;
