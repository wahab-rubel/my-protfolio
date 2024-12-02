import React, { useState } from "react";
import Header from "../Header/Header";

const Contact = () => {
  // State to manage form fields
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  // State for form submission status
  const [status, setStatus] = useState("");

  // Handle input change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validate form fields
    if (!formData.name || !formData.email || !formData.message) {
      setStatus("Please fill in all required fields.");
      return;
    }

    try {
      // Simulate sending data to the server
      const response = await fetch("https://your-backend-url.com/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setStatus("Thank you! We will contact you soon.");
        setFormData({ name: "", email: "", phone: "", message: "" }); // Clear form
      } else {
        setStatus("Something went wrong. Please try again.");
      }
    } catch (error) {
      setStatus("Failed to submit the form. Please check your connection.");
    }
  };

  return (
   <div>
    <Header></Header>
     <div className="w-full max-w-md mx-auto bg-white p-8 rounded shadow mt-16">
      <h1 className="text-2xl font-bold mb-4 text-center">Contact Us</h1>
      <form onSubmit={handleSubmit}>
        {/* Name Field */}
        <div className="mb-4">
          <label className="block text-sm font-medium mb-2">Name *</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Enter your name"
            className="w-full p-2 border rounded"
            required
          />
        </div>

        {/* Email Field */}
        <div className="mb-4">
          <label className="block text-sm font-medium mb-2">Email *</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Enter your email"
            className="w-full p-2 border rounded"
            required
          />
        </div>

        {/* Phone Field */}
        <div className="mb-4">
          <label className="block text-sm font-medium mb-2">Phone</label>
          <input
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            placeholder="Enter your phone number"
            className="w-full p-2 border rounded"
          />
        </div>

        {/* Message Field */}
        <div className="mb-4">
          <label className="block text-sm font-medium mb-2">Message *</label>
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="Enter your message"
            className="w-full p-2 border rounded h-24"
            required
          ></textarea>
        </div>

        {/* Submit Button */}
        <div>
          <button
            type="submit"
            className="w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600"
          >
            Submit
          </button>
        </div>
        <div className="mt-4 flex justify-center items-center">
       <button className="btn text-center">Sign Up</button>
      </div>
      </form>

      {/* Status Message */}
      {status && (
        <p className="mt-4 text-center text-sm text-red-500">{status}</p>
      )}
    </div>
   </div>
  );
};

export default Contact;
