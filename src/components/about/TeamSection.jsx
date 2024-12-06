import React from "react";

const TeamSection = () => {
  const teamMembers = [
    {
      name: "Jona Mugondora",
      title: "CEO",
      image: "/about/about-2.jpg",
    },
    {
      name: "Vincent Mugondora",
      title: "Project Manager",
      image: "/about/about-3.jpg",
    },
    {
      name: "Mike Johnson",
      title: "Field Technician",
      image: "/about/about-4.jpg",
    },
    {
      name: "Emma Brown",
      title: "Customer Support",
      image: "/about/about-6.jpg",
    },
  ];

  return (
    <div className="py-16 bg-gray-100">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h3 className="text-2xl font-semibold text-gray-700 uppercase">
            Meet Our Team
          </h3>
          <h2 className="text-4xl font-bold text-gray-900">
            Mugo Plumbing Solutions Team
          </h2>
          <p className="text-gray-600 mt-4">
            Our skilled and dedicated team is committed to providing top-notch
            plumbing solutions, ensuring reliability and excellence for all your
            needs.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {teamMembers.map((member, index) => (
            <div
              key={index}
              className="bg-white shadow-xl rounded-xl overflow-hidden text-center p-6 transform transition duration-300 hover:scale-105 hover:shadow-2xl"
            >
              <div className="relative mb-6">
                <img
                  className="w-40 h-40 object-cover mx-auto rounded-full border-4 border-blue-500 shadow-md"
                  src={member.image}
                  alt={member.name}
                />
                <div className="absolute inset-0 rounded-full bg-gradient-to-b from-blue-500/20 to-transparent"></div>
              </div>
              <h4 className="text-xl font-bold text-gray-800 mb-2">
                {member.name}
              </h4>
              <p className="text-blue-600 font-medium mb-4">{member.title}</p>
              <div className="w-16 h-1 bg-blue-500 mx-auto rounded-full"></div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TeamSection;
