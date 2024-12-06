import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const RegisterForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "http://localhost:5000/api/auth/register",
        { name, email, password } // Removed role from here
      );
      alert("Registration successful! Please log in.");

      // Redirect to dashboard after successful registration
      navigate("/dashboard");
    } catch (err) {
      setError(err.response ? err.response.data.msg : "Something went wrong");
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gradient-to-r from-blue-500 to-blue-800">
      <div className="bg-white p-8 rounded-lg shadow-lg max-w-sm w-full">
        <h2 className="text-3xl font-bold text-center text-blue-600 mb-6">
          Register
        </h2>

        {error && <p className="text-red-500 text-center mb-4">{error}</p>}

        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <input
              type="text"
              placeholder="Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
              className="w-full p-3 border-2 border-blue-300 rounded-lg focus:outline-none focus:border-blue-500 transition duration-200"
            />
          </div>

          <div className="mb-4">
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="w-full p-3 border-2 border-blue-300 rounded-lg focus:outline-none focus:border-blue-500 transition duration-200"
            />
          </div>

          <div className="mb-6">
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="w-full p-3 border-2 border-blue-300 rounded-lg focus:outline-none focus:border-blue-500 transition duration-200"
            />
          </div>

          {/* Removed role selection */}

          <button
            type="submit"
            className="w-full p-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 focus:outline-none transition duration-200"
          >
            Register
          </button>
        </form>

        <p className="mt-4 text-center text-blue-600">
          Already have an account?{" "}
          <span className="font-semibold cursor-pointer hover:text-blue-700">
            Login
          </span>
        </p>
      </div>
    </div>
  );
};

export default RegisterForm;
