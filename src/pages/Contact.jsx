import React, { useState } from 'react';

const Contact = () => {
    const [formData, setFormData] = useState({
        email: '',
        subject: '',
        message: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Form submitted:', formData);
        // Add form submission logic (API call) here if needed
    };

    return (
        <section className="bg-white ">
            <div className="py-8 lg:py-16 px-4 mx-auto max-w-screen-md">
                <h2 className="mb-4 text-4xl tracking-tight font-bold underline text-center text-gray-900 ">Contact Us</h2>
                <p className="mb-8 lg:mb-16 font-light text-center text-gray-500 ">
                    Have any questions, feedback, or inquiries? We would love to hear from you! Fill out the form!
                </p>
                <form onSubmit={handleSubmit} className="space-y-8">
                    {/* Email Input */}
                    <div>
                        <label htmlFor="email" className="block mb-2 text-sm font-medium ">Your email</label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 0 y-600 r-gray-400  -primary-500 er-primary-500 light"
                            placeholder="name@example.com"
                            required
                        />
                    </div>

                    {/* Subject Input */}
                    <div>
                        <label htmlFor="subject" className="block mb-2 text-sm font-medium text-gray-900 300">Subject</label>
                        <input
                            type="text"
                            id="subject"
                            name="subject"
                            value={formData.subject}
                            onChange={handleChange}
                            className="block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500 0 y-600 r-gray-400  -primary-500 er-primary-500 light"
                            placeholder="Let us know how we can help you"
                            required
                        />
                    </div>

                    {/* Message Input */}
                    <div className="sm:col-span-2">
                        <label htmlFor="message" className="block mb-2 text-sm font-medium text-gray-900 400">Your message</label>
                        <textarea
                            id="message"
                            name="message"
                            value={formData.message}
                            onChange={handleChange}
                            rows="6"
                            className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg shadow-sm border border-gray-300 focus:ring-primary-500 focus:border-primary-500 0 y-600 r-gray-400  -primary-500 er-primary-500"
                            placeholder="Leave a comment..."
                            required
                        ></textarea>
                    </div>

                    {/* Submit Button */}
                    <button type="submit" class="py-3 px-5 text-sm font-medium text-center text-white rounded-lg bg-blue-600 sm:w-fit hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 -600 rimary-700 -primary-800">Send message</button>

                </form>
            </div>
        </section>
    );
};

export default Contact;
