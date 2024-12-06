import { Link } from "react-router-dom";

const NotAuthorized = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 p-4">
      <div className="max-w-md w-full bg-white shadow-lg rounded-lg p-6 text-center">
        <h1 className="text-3xl font-bold text-red-600 mb-4">Access Denied</h1>
        <p className="text-gray-700 mb-6">
          You do not have permission to view this page. Please contact your
          administrator if you believe this is an error.
        </p>
        <img
          src="https://via.placeholder.com/150"
          alt="Not Authorized"
          className="mx-auto mb-6"
        />
        <Link
          to="/"
          className="inline-block px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition duration-300"
        >
          Go to Home
        </Link>
      </div>
    </div>
  );
};

export default NotAuthorized;
