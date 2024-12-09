import { useState, useEffect } from "react";
import axios from "axios";

const Profile = () => {
  const [user, setUser] = useState({
    name: "",
    email: "",
    phoneNumber: "",
    address: "",
    avatar: "",
  });
  const [isEditing, setIsEditing] = useState(false);
  const [file, setFile] = useState(null); // For avatar upload

  // Retrieve user ID from localStorage
  const userId = localStorage.getItem("userId");
  console.log("User ID from localStorage:", userId); // Debugging line

  // Fetch the user profile
  const fetchUserProfile = async () => {
    if (!userId) {
      console.error("User ID is null or undefined");
      return; // Exit if user ID is not available
    }

    try {
      const response = await axios.get(`/api/auth/profile/${userId}`);
      setUser(response.data.user);
    } catch (error) {
      console.error("Error fetching user profile:", error);
    }
  };

  useEffect(() => {
    if (userId) {
      fetchUserProfile();
    } else {
      console.error("User ID is null or undefined");
    }
  }, [userId]);

  // Handle file change (for avatar)
  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  // Handle form submit (update profile)
  const handleProfileUpdate = async (e) => {
    e.preventDefault();

    if (!userId) {
      console.error("User ID is null or undefined");
      return; // Exit if user ID is not available
    }

    const formData = new FormData();
    formData.append("name", user.name);
    formData.append("email", user.email);
    formData.append("phoneNumber", user.phoneNumber);
    formData.append("address", user.address);

    if (file) {
      formData.append("avatar", file);
    }

    try {
      const response = await axios.put(
        `/api/auth/profile/${userId}`,
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );
      setUser(response.data.user); // Update state with new data
      setIsEditing(false); // Hide edit form
    } catch (error) {
      console.error("Error updating profile:", error);
    }
  };

  return (
    <div className="container mx-auto p-8">
      <h1 className="text-3xl font-bold mb-4">User Profile</h1>
      <div className="bg-white shadow-lg rounded-lg p-6">
        <div className="flex items-center space-x-6">
          <img
            src={user.avatar || "https://via.placeholder.com/150"}
            alt="User Avatar"
            className="w-32 h-32 rounded-full object-cover border-4 border-blue-500 shadow-lg"
          />
          <div>
            <h2 className="text-2xl font-bold">{user.name}</h2>
            <p className="text-lg text-gray-600">{user.email}</p>
            <p className="text-sm text-gray-500">{user.role}</p>
            <button
              className="mt-4 py-2 px-4 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
              onClick={() => setIsEditing(!isEditing)}
            >
              {isEditing ? "Cancel" : "Update Profile"}
            </button>
          </div>
        </div>

        {isEditing && (
          <form className="mt-6" onSubmit={handleProfileUpdate}>
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700">
                Name
              </label>
              <input
                type="text"
                value={user.name}
                onChange={(e) => setUser({ ...user, name: e.target.value })}
                className="w-full p-2 mt-1 border rounded-md"
                required
              />
            </div>

            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700">
                Email
              </label>
              <input
                type="email"
                value={user.email}
                onChange={(e) => setUser({ ...user, email: e.target.value })}
                className="w-full p-2 mt-1 border rounded-md"
                required
              />
            </div>

            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700">
                Phone Number
              </label>
              <input
                type="text"
                value={user.phoneNumber || ""} // Ensure it's a string
                onChange={(e) =>
                  setUser({ ...user, phoneNumber: e.target.value })
                }
                className="w-full p-2 mt-1 border rounded-md"
              />
            </div>

            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700">
                Address
              </label>
              <input
                type="text"
                value={user.address || ""} // Ensure it's a string
                onChange={(e) => setUser({ ...user, address: e.target.value })}
                className="w-full p-2 mt-1 border rounded-md"
              />
            </div>

            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700">
                Profile Picture
              </label>
              <input
                type="file"
                onChange={handleFileChange}
                className="w-full p-2 mt-1"
              />
            </div>

            <button
              type="submit"
              className="mt-4 py-2 px-4 bg-green-600 text-white rounded-lg hover:bg-green-700"
            >
              Update Profile
            </button>
          </form>
        )}
      </div>
    </div>
  );
};

export default Profile;
