import { FaUser, FaSignOutAlt, FaClipboardList } from "react-icons/fa";
import { useAuth } from "../../context/AuthContext"; // Import AuthContext
import { NavLink } from "react-router-dom"; // Import NavLink for navigation

const UserProfile = ({ isOpen }) => {
  const { user, logout } = useAuth();
  
  const handleLogout = () => {
    logout(); 
  };

  return (
    <div className="flex flex-col items-center p-4 bg-gradient-to-r from-blue-800 via-blue-600 to-blue-400 rounded-xl shadow-lg border-4 border-blue-500 transition-transform transform hover:scale-105 hover:shadow-2xl">
      {/* Profile Picture */}
      {user?.profilePicture ? (
        <img
          src={user.profilePicture}
          alt="Profile"
          className="w-20 h-20 rounded-full border-4 border-white shadow-xl transform transition-transform hover:scale-110"
        />
      ) : (
        <div className="flex items-center justify-center w-20 h-20 rounded-full bg-blue-600 text-white shadow-xl transform transition-transform hover:scale-110">
          <FaUser className="text-4xl" />
        </div>
      )}

      {/* User Info */}
      {isOpen && (
        <div className="ml-4 flex flex-col space-y-1 mt-2">
          <span className="text-2xl font-semibold text-white transition-colors duration-300 hover:text-blue-200">
            {user?.name || "User  Name"}
          </span>
          {user?.email ? (
            <span className="text-sm text-gray-200">{user.email}</span>
          ) : (
            <span className="text-sm italic text-gray-400">
              No email provided
            </span>
          )}
          {/* Additional Fields */}
          {user?.phone && (
            <span className="text-sm text-gray-200">Phone: {user.phone}</span>
          )}
          {user?.address && (
            <span className="text-sm text-gray-200">
              Address: {user.address}
            </span>
          )}
        </div>
      )}

      {/* Actions Section (Buttons inside the card) */}
      <div className="mt-4 flex space-x-4">
        {/* Bookings Button */}
        <NavLink
          to="/bookings"
          className="flex items-center justify-center bg-blue-500 text-white py-1 px-4 rounded-lg shadow-md hover:bg-blue-600 transform transition-all duration-300 hover:scale-105"
        >
          <FaClipboardList className="text-lg mr-1" />
          Bookings
        </NavLink>

        {/* Logout Button */}
        <button
          onClick={handleLogout}
          className="flex items-center justify-center bg-blue-700 text-white py-1 px-4 rounded-lg shadow-md hover:bg-blue-800 transform transition-all duration-300 hover:scale-105"
        >
          <FaSignOutAlt className="text-lg mr-1" />
          Logout
        </button>
      </div>
    </div>
  );
};

export default UserProfile;
