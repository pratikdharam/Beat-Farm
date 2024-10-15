import React, { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // You can add form submission logic (API call) here
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold text-[#4A3728] mb-6">Contact Us</h1>
      <p className="mb-4 text-gray-700">
        Have any questions, feedback, or inquiries? We would love to hear from you! Fill out the form below or reach us directly at <strong>support@beatfarm.com</strong>.
      </p>
      <form onSubmit={handleSubmit} className="max-w-lg mx-auto">
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">Name</label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Enter your name"
            required
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">Email</label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Enter your email"
            required
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="message">Message</label>
          <textarea
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="Your message"
            rows="5"
            required
          ></textarea>
        </div>

        <div className="flex justify-center">
          <button
            type="submit"
            className="bg-[#00A4E4] text-white font-bold py-2 px-4 rounded hover:bg-[#008ec1] focus:outline-none focus:shadow-outline"
          >
            Send Message
          </button>
        </div>
      </form>
    </div>
  );
};

export default Contact;
