import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AppContext } from "../../context/AppContext";

const TopPlumbers = () => {
  const navigate = useNavigate();
  const { plumbers } = useContext(AppContext);

  return (
    <div className="flex flex-col items-center gap-4 text-gray-900">
      <h1 className="text-3xl font-medium">Top Plumbers To Book</h1>
      <p className="w-1/3 text-center text-sm">
        Simply browse through our extensive list of trusted plumbers.
      </p>
      <div className="w-full container grid grid-cols-auto gap-4 gap-y-6 px-3 sm:px-0">
        {plumbers.slice(0, 10).map((item) => (
          <div
            onClick={() => {
              navigate(`/appointment/${item._id}`);
              scrollTo(0, 0);
            }}
            className="border border-blue-200 rounded-xl overflow-hidden cursor-pointer hover:translate-y-[10px] transition-all duration-500"
            key={item._id} // Use unique id for key
          >
            <img
              className="bg-blue-50 object-cover h-[60%] w-full"
              src={item.image}
              alt={item.name}
            />
            <div className="p-4">
              <div className="flex items-center gap-2 text-sm text-center text-green-500">
                <p className="w-2 h-2 bg-green-500 rounded-full"></p>
                <p>Available</p>
              </div>
              <p className="text-gray-900 text-lg font-medium">{item.name}</p>
              <p className="text-gray-600 text-sm">{item.speciality}</p>
              <p className="text-gray-500 text-xs">{item.place}</p>{" "}
              {/* Added place */}
            </div>
          </div>
        ))}
      </div>
      <button
        onClick={() => navigate("/plumbers")} // Navigate to plumbers page
        className="bg-blue-50 text-gray-600 px-12 py-3 rounded-full"
      >
        More
      </button>
    </div>
  );
};

export default TopPlumbers;
