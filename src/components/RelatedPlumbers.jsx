import { useContext, useEffect, useState } from "react";
import { AppContext } from "../context/AppContext";
import { useNavigate } from "react-router-dom";

const RelatedPlumbers = ({ city, plumberId }) => {
  const { plumbers } = useContext(AppContext);
  const navigate = useNavigate();

  const [relPlumbers, setRelPlumbers] = useState([]);

  useEffect(() => {
    if (plumbers?.length > 0 && city) {
      // Filter plumbers based on city and exclude the current plumber
      const plumbersData = plumbers.filter(
        (plumber) => plumber.city === city && plumber._id !== plumberId,
        console.log(plumberId)
      );

      // Sort the filtered plumbers by name
      const sortedPlumbers = plumbersData.sort((a, b) => {
        if (a.name < b.name) return -1;
        if (a.name > b.name) return 1;
        return 0;
      });

      setRelPlumbers(sortedPlumbers);
    }
  }, [plumbers, city, plumberId]);

  return (
    <div className="flex flex-col items-center gap-4 my-16 text-gray-900 md:mx-10">
      <h1 className="text-3xl font-medium">Top Plumbers in {city}</h1>
      <p className="sm:w-1/3 text-center text-sm">
        Simply browse through our extensive list of trusted plumbers in {city}.
      </p>
      <div className="w-full grid grid-cols-auto gap-4 pt-5 px-3 sm:px-0">
        {relPlumbers.slice(0, 5).map((item) => (
          <div
            onClick={() => {navigate(`/appointment/${item._id}`); scrollTo(0, 0);}}
            className="border border-blue-200 rounded-xl overflow-hidden cursor-pointer hover:translate-y-[-10px] transition-all duration-500"
            key={item._id}
          >
            <img
              className="bg-blue-50 h-[60%] object-cover object-center w-[30vw]"
              src={item.image}
              alt={`Image of ${item.name}`}
            />
            <div className="p-4">
              <div className="flex items-center gap-2 text-sm text-center text-green-500">
                <p className="w-2 h-2 bg-green-500 rounded-full"></p>
                <p>Available</p>
              </div>
              <p className="text-gray-900 text-lg font-medium">{item.name}</p>
              <p className="text-gray-600 text-sm">{item.speciality}</p>
            </div>
          </div>
        ))}
      </div>
      <button
        onClick={() => {
          navigate("/plumbers");
          window.scrollTo(0, 0);
        }}
        className="bg-blue-50 text-gray-600 px-12 py-3 rounded-full mt-10"
      >
        More
      </button>
    </div>
  );
};

export default RelatedPlumbers;
