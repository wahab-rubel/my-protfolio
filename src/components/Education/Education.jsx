import React from "react";
import Header from "../Header/Header";

const EducationPage = () => {
  const educationData = [
    {
      id: 1,
      degree: "Bachelor of Science in Computer Science",
      institution: "University of XYZ",
      duration: "2018 - 2022",
      description:
        "Graduated with honors in Computer Science. Specialized in web development and software engineering. Completed a thesis on machine learning applications.",
    },
    {
      id: 2,
      degree: "Higher Secondary Certificate",
      institution: "ABC College",
      duration: "2016 - 2018",
      description:
        "Focused on science with a strong foundation in mathematics, physics, and computer studies. Achieved top grades in the board examinations.",
    },
    {
      id: 3,
      degree: "Secondary School Certificate",
      institution: "XYZ High School",
      duration: "2014 - 2016",
      description:
        "Excelled in academics and participated in various science fairs and coding competitions.",
    },
  ];

  const certifications = [
    {
      id: 1,
      title: "Full-Stack Web Development",
      provider: "Coursera",
      year: "2023",
    },
    {
      id: 2,
      title: "React and Redux Certification",
      provider: "Udemy",
      year: "2022",
    },
    {
      id: 3,
      title: "UI/UX Design Specialization",
      provider: "EdX",
      year: "2021",
    },
  ];

  const workshops = [
    {
      id: 1,
      title: "Advanced React Workshop",
      organizer: "React Conf",
      year: "2023",
    },
    {
      id: 2,
      title: "Tailwind CSS Masterclass",
      organizer: "CSS Academy",
      year: "2022",
    },
  ];

  return (
    <div> 
     <Header></Header>
     <section className="bg-gray-100 py-12">
      <div className="container mx-auto px-6">
        <h1 className="text-4xl font-bold text-center text-gray-800 mb-12">
          My Education Journey
        </h1>

        {/* Education Section */}
        <div>
          <h2 className="text-3xl font-semibold text-gray-700 mb-6">
            Academic Qualifications
          </h2>
          <div className="space-y-8">
            {educationData.map((edu) => (
              <div
                key={edu.id}
                className="bg-white shadow-lg rounded-lg p-6 hover:shadow-xl transition duration-300"
              >
                <h3 className="text-2xl font-bold text-gray-800">{edu.degree}</h3>
                <p className="text-gray-600 text-lg mt-1">{edu.institution}</p>
                <p className="text-gray-500 mt-2">{edu.duration}</p>
                <p className="text-gray-600 mt-4">{edu.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Certifications Section */}
        <div className="mt-12">
          <h2 className="text-3xl font-semibold text-gray-700 mb-6">
            Certifications
          </h2>
          <div className="grid lg:grid-cols-2 gap-6">
            {certifications.map((cert) => (
              <div
                key={cert.id}
                className="bg-white shadow-lg rounded-lg p-6 hover:shadow-xl transition duration-300"
              >
                <h3 className="text-2xl font-bold text-gray-800">{cert.title}</h3>
                <p className="text-gray-600 mt-2">{cert.provider}</p>
                <p className="text-gray-500">{cert.year}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Workshops Section */}
        <div className="mt-12">
          <h2 className="text-3xl font-semibold text-gray-700 mb-6">Workshops</h2>
          <div className="space-y-8">
            {workshops.map((workshop) => (
              <div
                key={workshop.id}
                className="bg-white shadow-lg rounded-lg p-6 hover:shadow-xl transition duration-300"
              >
                <h3 className="text-2xl font-bold text-gray-800">
                  {workshop.title}
                </h3>
                <p className="text-gray-600 mt-2">{workshop.organizer}</p>
                <p className="text-gray-500">{workshop.year}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Divider */}
        <div className="mt-12 text-center">
          <p className="text-gray-600 text-lg">
            Continuous learning is the key to staying ahead in the tech world.
          </p>
        </div>
      </div>
    </section>
    </div>
  );
};

export default EducationPage;
