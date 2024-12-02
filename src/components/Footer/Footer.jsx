// src/Components/Footer.jsx
const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-10">
      <div className="container mx-auto flex flex-col md:flex-row justify-between px-6 md:px-12">
        {/* Footer Logo and About */}
        <div className="flex flex-col mb-6 md:mb-0">
          <img src="/logo.png" alt="Logo" className="w-20 h-20 mb-4" />
          <p className="text-gray-400">
            We are a passionate team dedicated to providing the best services to our customers.
          </p>
        </div>

        {/* Quick Links */}
        <div className="mb-6 md:mb-0">
          <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
          <ul className="space-y-2">
            <li><a href="#" className="text-gray-400 hover:text-white">Home</a></li>
            <li><a href="#" className="text-gray-400 hover:text-white">Services</a></li>
            <li><a href="#" className="text-gray-400 hover:text-white">About</a></li>
            <li><a href="#" className="text-gray-400 hover:text-white">Contact</a></li>
          </ul>
        </div>

        {/* Subscribe */}
        <div>
          <h3 className="text-xl font-semibold mb-4">Subscribe</h3>
          <p className="text-gray-400 mb-4">Subscribe to our newsletter for the latest updates.</p>
          <div className="flex items-center">
            <input
              type="email"
              placeholder="Enter your email"
              className="px-3 py-2 rounded-l-md border-none focus:outline-none"
            />
            <button className="px-4 py-2 bg-gradient-to-r from-yellow-400 to-pink-500 text-white rounded-r-md">
              Subscribe
            </button>
          </div>
        </div>
      </div>
      <div className="mt-8 text-center text-gray-500 text-sm">
        ©2024 Your Company All Rights Reserved.
      </div>
    </footer>
  );
};

export default Footer;
