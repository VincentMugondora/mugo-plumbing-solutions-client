import { useEffect, useState } from "react";
import axios from "axios";

const UserProfile = () => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [editable, setEditable] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    profileImage: null,
  });

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const token = localStorage.getItem("token");

        if (!token) {
          return setError("No token found. Please log in.");
        }

        const response = await axios.get(
          "http://localhost:5000/api/auth/profile",
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );

        setUser(response.data);
        setFormData({
          name: response.data.name,
          email: response.data.email,
          profileImage: response.data.profileImage,
        });
        setLoading(false);
      } catch (err) {
        setError("Failed to fetch user data.");
        setLoading(false);
      }
    };

    fetchUserData();
  }, []);

  const handleEdit = () => {
    setEditable(true);
  };

  const handleCancel = () => {
    setEditable(false);
    setFormData({
      name: user.name,
      email: user.email,
      profileImage: user.profileImage,
    });
  };

  const handleChange = (e) => {
    const { name, value, type, files } = e.target;
    if (type === "file") {
      setFormData({ ...formData, profileImage: files[0] });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const token = localStorage.getItem("token");

    if (!token) {
      return setError("No token found. Please log in.");
    }

    const form = new FormData();
    form.append("name", formData.name);
    form.append("email", formData.email);
    if (formData.profileImage) {
      form.append("profileImage", formData.profileImage);
    }

    try {
      const response = await axios.put(
        "http://localhost:5000/api/auth/profile",
        form,
        {
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "multipart/form-data",
          },
        }
      );

      setUser(response.data);
      setEditable(false);
      setError("");
    } catch (err) {
      setError("Failed to update user data.");
    }
  };

  if (loading)
    return <div className="text-blue-500 text-center">Loading...</div>;
  if (error) return <div className="text-red-500 text-center">{error}</div>;

  return (
    <div className="flex justify-center items-center min-h-screen bg-blue-50">
      <div className="bg-white rounded-lg shadow-xl p-8 w-96">
        <h1 className="text-3xl font-semibold text-center text-blue-600 mb-6">
          {editable ? "Edit Profile" : "User Profile"}
        </h1>
        <div className="mb-4">
          <img
            src={user.profileImage || "/default-profile.jpg"}
            alt="Profile"
            className="w-32 h-32 rounded-full object-cover mx-auto mb-4"
          />
          {editable && (
            <input
              type="file"
              name="profileImage"
              onChange={handleChange}
              className="block w-full text-blue-500 mb-4"
            />
          )}
        </div>
        <form onSubmit={handleSubmit}>
          <div className="flex justify-between mb-4">
            <p className="text-lg font-medium text-gray-700">Name:</p>
            {editable ? (
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="text-lg text-blue-600 p-1 border-b border-gray-300"
              />
            ) : (
              <p className="text-lg text-blue-600">{user.name}</p>
            )}
          </div>
          <div className="flex justify-between mb-4">
            <p className="text-lg font-medium text-gray-700">Email:</p>
            {editable ? (
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="text-lg text-blue-600 p-1 border-b border-gray-300"
              />
            ) : (
              <p className="text-lg text-blue-600">{user.email}</p>
            )}
          </div>

          <div className="flex justify-between mb-4">
            <p className="text-lg font-medium text-gray-700">Role:</p>
            <p className="text-lg text-blue-600">{user.role}</p>
          </div>

          <div className="flex justify-center mt-4">
            {editable ? (
              <>
                <button
                  type="submit"
                  className="px-6 py-2 bg-blue-600 text-white rounded-lg mr-2"
                >
                  Save Changes
                </button>
                <button
                  type="button"
                  onClick={handleCancel}
                  className="px-6 py-2 bg-gray-300 text-black rounded-lg"
                >
                  Cancel
                </button>
              </>
            ) : (
              <button
                type="button"
                onClick={handleEdit}
                className="px-6 py-2 bg-blue-600 text-white rounded-lg"
              >
                Edit Profile
              </button>
            )}
          </div>
        </form>
      </div>
    </div>
  );
};

export default UserProfile;
