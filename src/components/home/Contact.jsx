import { useState } from "react";

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const validateForm = () => {
    const newErrors = {};
    if (!formData.name) newErrors.name = "Name is required";
    if (!formData.email) newErrors.email = "Email is required";
    if (!formData.subject) newErrors.subject = "Subject is required";
    if (!formData.message) newErrors.message = "Message is required";
    return newErrors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const validationErrors = validateForm();

    if (Object.keys(validationErrors).length === 0) {
      // Send form data to Formspree
      try {
        const response = await fetch("YOUR_FORMSPREE_ENDPOINT", {
          method: "POST",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        });

        if (response.ok) {
          setSubmitted(true);
          setFormData({
            name: "",
            email: "",
            phone: "",
            subject: "",
            message: "",
          });
          setErrors({});
        } else {
          console.error("Error submitting the form");
        }
      } catch (error) {
        console.error("Error:", error);
      }
    } else {
      setErrors(validationErrors);
    }
  };

  return (
    <div className="flex mb-[50px] flex-col md:flex-row items-stretch py-5">
      {/* Map Section */}
      <div className="w-full md:w-1/2">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3820.8849113218294!2d30.931182515389033!3d-17.896586290161355!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1931a548a2fa1be7%3A0x238a1bcdde30403a!2s22%20Murambaonde%2C%20Mufakose%2C%20Harare%2C%20Zimbabwe!5e0!3m2!1sen!2sus!4v1635567575143!5m2!1sen!2sus"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          title="Google Maps Location"
          className="h-full"
        ></iframe>
      </div>

      {/* Contact Form Section */}
      <div className="w-full md:w-1/2 flex items-center justify-center bg-gray-100 p-8">
        <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">
            Contact Us
          </h2>
          {submitted && (
            <p className="mb-4 text-green-400">Your message has been sent!</p>
          )}
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                value={formData.name}
                onChange={handleChange}
                className={`w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:border-gray-500 ${
                  errors.name ? "border-red-500" : ""
                }`}
              />
              {errors.name && (
                <p className="text-red-500 text-sm">{errors.name}</p>
              )}
            </div>
            <div className="flex gap-2">
              <div>
                <input
                  type="email"
                  name="email"
                  placeholder="Your Email"
                  value={formData.email}
                  onChange={handleChange}
                  className={`w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:border-gray-500 ${
                    errors.email ? "border-red-500" : ""
                  }`}
                />
                {errors.email && (
                  <p className="text-red-500 text-sm">{errors.email}</p>
                )}
              </div>
              <div>
                <input
                  type="tel"
                  name="phone"
                  placeholder="Your Phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className={`w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:border-gray-500`}
                />
              </div>
            </div>
            <div>
              <input
                type="text"
                name="subject"
                placeholder="Your Subject"
                value={formData.subject}
                onChange={handleChange}
                className={`w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:border-gray-500 ${
                  errors.subject ? "border-red-500" : ""
                }`}
              />
              {errors.subject && (
                <p className="text-red-500 text-sm">{errors.subject}</p>
              )}
            </div>
            <div>
              <textarea
                name="message"
                placeholder="Your Message"
                value={formData.message}
                onChange={handleChange}
                rows="4"
                className={`w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:border-gray-500 ${
                  errors.message ? "border-red-500" : ""
                }`}
              ></textarea>
              {errors.message && (
                <p className="text-red-500 text-sm">{errors.message}</p>
              )}
            </div>
            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-3 rounded-md transition duration-200 hover:bg-blue-700"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
