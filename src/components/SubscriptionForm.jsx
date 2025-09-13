import { useState } from 'react';

const SubscriptionForm = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        mobile: ''
    });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission here
        console.log('Form submitted:', formData);
    };

    return (
        <div className="bg-[#DCEEF6] py-8 px-4">
            <div className="max-w-7xl mx-auto">
                <h2 className="text-3xl font-bold text-center mb-8 text-gray-900">
                    Subscribe us and Get the latest updates and news
                </h2>

                <form onSubmit={handleSubmit} className="flex flex-col md:flex-row gap-4 justify-center items-center">
                    <input
                        type="text"
                        name="name"
                        placeholder="Your name *"
                        value={formData.name}
                        onChange={handleChange}
                        className="px-4 py-3 rounded-md border border-gray-300 bg-white placeholder-gray-600 text-gray-900 w-full md:w-64 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        required
                    />

                    <input
                        type="email"
                        name="email"
                        placeholder="Your Email ID *"
                        value={formData.email}
                        onChange={handleChange}
                        className="px-4 py-3 rounded-md border border-gray-300 bg-white placeholder-gray-600 text-gray-900 w-full md:w-64 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        required
                    />

                    <div className="flex w-full md:w-auto">
                        <span className="px-3 py-3 bg-white border border-r-0 border-gray-300 rounded-l-md text-gray-700">
                            +91 •
                        </span>
                        <input
                            type="tel"
                            name="mobile"
                            placeholder="Mobile Number *"
                            value={formData.mobile}
                            onChange={handleChange}
                            className="px-4 py-3 rounded-r-md border border-gray-300 bg-white placeholder-gray-600 text-gray-900 w-full md:w-48 focus:outline-none focus:ring-2 focus:ring-blue-500"
                            required
                        />
                    </div>

                    <button
                        type="submit"
                        className="px-8 py-3 bg-[#005D89] text-white font-semibold rounded-md transition duration-200 w-full md:w-auto hover:shadow-lg hover:shadow-gray-400/50"
                    >
                        Subscribe
                    </button>

                </form>
            </div>
        </div>
    );
};

export default SubscriptionForm;