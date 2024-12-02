import React from "react";
import Header from "../Header/Header";

const Services = () => {
  const services = [
    {
      id: 1,
      title: "Web Development",
      description:
        "Custom, responsive websites and web applications built with modern technologies like React.js, Node.js, and Tailwind CSS.",
      icon: "🌐",
    },
    {
      id: 2,
      title: "UI/UX Design",
      description:
        "Clean, user-friendly, and interactive designs to deliver seamless user experiences using Figma and Adobe XD.",
      icon: "🎨",
    },
    {
      id: 3,
      title: "API Integration",
      description:
        "Integrate and customize APIs to enable robust communication between frontend and backend services.",
      icon: "🔗",
    },
    {
      id: 4,
      title: "E-Commerce Solutions",
      description:
        "Develop scalable and feature-rich e-commerce platforms with integrated payment gateways and smooth user experiences.",
      icon: "🛒",
    },
    {
      id: 5,
      title: "Full-Stack Development",
      description:
        "End-to-end development, from database design to frontend interfaces, delivering seamless and scalable solutions.",
      icon: "💻",
    },
    {
      id: 6,
      title: "Performance Optimization",
      description:
        "Improve your site's performance, ensuring fast load times, smooth navigation, and better SEO rankings.",
      icon: "🚀",
    },
  ];

  return (
    <div>
     <Header></Header>
     <section className="bg-gray-100 py-16" id="services">
      <div className="container mx-auto px-6 md:px-12 lg:px-20">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-800">
          My Services
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <div
              key={service.id}
              className="bg-white p-6 rounded-lg shadow-lg hover:shadow-2xl transition duration-300"
            >
              <div className="text-4xl mb-4 text-purple-600 text-center">
                {service.icon}
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-4 text-center">
                {service.title}
              </h3>
              <p className="text-gray-600 text-center">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
    </div>
  );
};

export default Services;
