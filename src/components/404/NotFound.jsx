import { FaArrowRight } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const NotFound = () => {
  const navigate = useNavigate();

  return (
    <div
      className="min-h-screen bg-black flex flex-col items-center justify-center text-gray-300 px-6"
      style={{
        backgroundImage: 'url("/404/404.png")',
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Main Content */}
      <main className="flex flex-col items-center text-center">
        <h1 className="text-9xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-gray-500 via-gray-200 to-gray-500 animate-pulse">
          404
        </h1>
        <p className="text-2xl md:text-3xl text-gray-400 mt-4">
          Oops! The page you're looking for doesn't exist.
        </p>
      </main>

      {/* Promo Section */}
      <section className="mt-10 bg-black/70 backdrop-blur-md p-6 md:p-8 rounded-lg text-center max-w-md md:max-w-lg w-full shadow-lg">
        <p className="text-xl md:text-2xl text-white font-semibold">
          Discover reliable plumbing solutions with Mugo Plumbing.
        </p>
        <p className="text-sm md:text-base text-gray-400 mt-2 leading-relaxed">
          Our expert team is here to handle all your plumbing needs, ensuring
          quality service and customer satisfaction.
        </p>
        <div className="flex justify-center mt-6">
          <button
            onClick={() => navigate("/")}
            className="flex items-center gap-2 px-6 py-3 md:px-8 md:py-4 text-sm md:text-base font-medium bg-gradient-to-r from-blue-600 via-blue-800 to-black rounded-full text-white hover:scale-105 transform transition-all duration-300"
          >
            Back to homepage
            <FaArrowRight className="animate-bounce" />
          </button>
        </div>
      </section>
    </div>
  );
};

export default NotFound;
