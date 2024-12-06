import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const Book = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    clientName: '',
    email: '',
    phone: '',
    serviceType: '',
    urgency: '',
    description: '',
    date: '',
    startTime: '',
    address: {
      street: '',
      city: '',
      postalCode: ''
    }
  });
  const [error, setError] = useState(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const serviceTypes = [
    { id: 'pipe_repair', name: 'Pipe Repair' },
    { id: 'drain_cleaning', name: 'Drain Cleaning' },
    { id: 'water_heater', name: 'Water Heater Service' },
    { id: 'installation', name: 'New Installation' },
    { id: 'leak_detection', name: 'Leak Detection' },
    { id: 'emergency', name: 'Emergency Plumbing' }
  ];

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name.includes('address.')) {
      const addressField = name.split('.')[1];
      setFormData(prev => ({
        ...prev,
        address: {
          ...prev.address,
          [addressField]: value
        }
      }));
    } else {
      setFormData(prev => ({
        ...prev,
        [name]: value
      }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      console.log('Form data before submission:', {
        ...formData,
        date: formData.date,
        startTime: formData.startTime
      });

      const response = await axios.post('http://localhost:5000/api/bookings', {
        clientName: formData.clientName,
        email: formData.email,
        phone: formData.phone,
        serviceType: formData.serviceType,
        urgency: formData.urgency,
        description: formData.description,
        date: formData.date,
        startTime: formData.startTime,
        address: {
          street: formData.address.street,
          city: formData.address.city,
          postalCode: formData.address.postalCode
        }
      });

      if (response.data) {
        console.log('Booking successful:', response.data);
        navigate('/dashboard');
      }
    } catch (error) {
      console.error('Submission error:', error.response?.data || error.message);
      setError(error.response?.data?.message || 'Failed to create booking');
    }
  };

  return (
    <div className="max-w-3xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-8">Schedule a Plumbing Service</h1>
      
      {error && (
        <div className="bg-red-100 text-red-700 p-4 rounded-lg mb-6">
          {error}
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Personal Information */}
        <div className="bg-gray-50 p-4 rounded-lg space-y-4">
          <h2 className="text-xl font-semibold mb-4">Personal Information</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Full Name *
              </label>
              <input
                type="text"
                name="clientName"
                value={formData.clientName}
                onChange={handleChange}
                className="w-full p-2 border rounded-lg"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Email *
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full p-2 border rounded-lg"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Phone Number *
              </label>
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                className="w-full p-2 border rounded-lg"
                required
              />
            </div>
          </div>
        </div>

        {/* Service Details */}
        <div className="bg-gray-50 p-4 rounded-lg space-y-4">
          <h2 className="text-xl font-semibold mb-4">Service Details</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Service Type *
              </label>
              <select
                name="serviceType"
                value={formData.serviceType}
                onChange={handleChange}
                className="w-full p-2 border rounded-lg"
                required
              >
                <option value="">Select a service</option>
                {serviceTypes.map(service => (
                  <option key={service.id} value={service.id}>
                    {service.name}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Urgency Level *
              </label>
              <select
                name="urgency"
                value={formData.urgency}
                onChange={handleChange}
                className="w-full p-2 border rounded-lg"
                required
              >
                <option value="">Select Urgency</option>
                <option value="low">Low Priority</option>
                <option value="medium">Medium Priority</option>
                <option value="high">High Priority</option>
              </select>
            </div>

            <div className="col-span-2">
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Description of Problem *
              </label>
              <textarea
                name="description"
                value={formData.description}
                onChange={handleChange}
                rows="4"
                className="w-full p-2 border rounded-lg"
                required
              />
            </div>
          </div>
        </div>

        {/* Schedule */}
        <div className="bg-gray-50 p-4 rounded-lg space-y-4">
          <h2 className="text-xl font-semibold mb-4">Schedule</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Preferred Date *
              </label>
              <input
                type="date"
                name="date"
                value={formData.date}
                onChange={handleChange}
                className="w-full p-2 border rounded-lg"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Preferred Time *
              </label>
              <input
                type="time"
                name="startTime"
                value={formData.startTime}
                onChange={handleChange}
                className="w-full p-2 border rounded-lg"
                required
              />
            </div>
          </div>
        </div>

        {/* Address */}
        <div className="bg-gray-50 p-4 rounded-lg space-y-4">
          <h2 className="text-xl font-semibold mb-4">Service Address</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="col-span-2">
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Street Address *
              </label>
              <input
                type="text"
                name="address.street"
                value={formData.address.street}
                onChange={handleChange}
                className="w-full p-2 border rounded-lg"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                City *
              </label>
              <input
                type="text"
                name="address.city"
                value={formData.address.city}
                onChange={handleChange}
                className="w-full p-2 border rounded-lg"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Postal Code *
              </label>
              <input
                type="text"
                name="address.postalCode"
                value={formData.address.postalCode}
                onChange={handleChange}
                className="w-full p-2 border rounded-lg"
                required
              />
            </div>
          </div>
        </div>

        <div className="flex justify-end space-x-4">
          <button
            type="button"
            onClick={() => navigate('/dashboard')}
            className="px-4 py-2 text-gray-600 hover:text-gray-800"
          >
            Cancel
          </button>
          <button
            type="submit"
            className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default Book; 