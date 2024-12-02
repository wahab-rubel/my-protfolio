import React from "react";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";

const About = () => {
  return (
    <div>
      <Header />
      <section className="bg-gray-100 text-gray-800 py-16" id="about">
        <div className="container mx-auto px-6 md:px-12 lg:px-20">
          {/* About Section */}
          <div className="flex flex-wrap items-center">
            {/* Image Section */}
            <div className="w-full lg:w-1/2 mb-10 lg:mb-0">
              <img
                src="https://i.ibb.co.com/kmxhhd7/Photo-95bb8331-afb0-47f0-a181-83cf3da8bef5.jpg"
                alt="Profile"
                className="rounded-lg shadow-lg mx-auto"
              />
            </div>

            {/* Text Section */}
            <div className="w-full lg:w-1/2">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">About Me</h2>
              <p className="text-lg leading-relaxed mb-6">
                Hi, I'm <strong>Abdul Wahab Rubel</strong>, a passionate software
                developer with expertise in creating elegant, user-friendly, and
                scalable web applications. With over 100 completed projects, I
                specialize in React.js, Tailwind CSS, Firebase, MongoDB, and modern
                front-end development.
              </p>
              <p className="text-lg leading-relaxed mb-6">
                I enjoy turning complex problems into simple, beautiful solutions
                and collaborating with clients to bring their ideas to life. My goal
                is to create impactful digital experiences that leave a lasting
                impression.
              </p>
              <div className="mt-6 flex gap-4">
                <a
                  href="#contact"
                  className="px-6 py-3 bg-purple-600 text-white rounded-lg shadow hover:bg-purple-700 transition duration-300"
                >
                  Contact Me
                </a>
                <a
                  href="/resume.pdf"
                  className="px-6 py-3 border border-purple-600 text-purple-600 rounded-lg shadow hover:bg-purple-600 hover:text-white transition duration-300"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Download Resume
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Skills Section */}
        <div className="container mx-auto px-6 md:px-12 lg:px-20 mt-16">
          <h3 className="text-2xl md:text-3xl font-bold text-center mb-10">
            My Skills
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {[
              { skill: "React.js", image: "/images/react-logo.png" },
              { skill: "Tailwind CSS", image: "/images/tailwind-logo.png" },
              { skill: "JavaScript (ES6+)", image: "/images/js-logo.png" },
              { skill: "Firebase", image: "/images/firebase-logo.png" },
              { skill: "Node.js", image: "/images/node-logo.png" },
              { skill: "MongoDB", image: "/images/mongodb-logo.png" },
              { skill: "Next.js", image: "/images/nextjs-logo.png" },
              { skill: "API Development", image: "/images/api-logo.png" },
            ].map((item, index) => (
              <div
                key={index}
                className="bg-white shadow-lg rounded-lg p-4 text-center hover:shadow-2xl transition duration-300"
              >
                <img
                  src={item.image}
                  alt={item.skill}
                  className="h-16 mx-auto mb-4"
                />
                <h4 className="text-lg font-semibold">{item.skill}</h4>
              </div>
            ))}
          </div>
        </div>
      </section>
      <Footer></Footer>
    </div>
  );
};

export default About;
