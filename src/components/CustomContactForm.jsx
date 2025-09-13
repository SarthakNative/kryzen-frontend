import { useState, useEffect } from 'react';
import { ChevronDownIcon } from '@heroicons/react/24/outline';
import manIconPath from '../assets/images/man.png';
import TestimonialCarousel from './subComponents/TestimonialCarousel';

const CustomContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    mobile: '',
    service: '',
    budget: '',
    type: '',
    description: '',
    newsletter: false
  });

  const [currentReview, setCurrentReview] = useState(0);

  const stats = [
    { number: 20, suffix: '+', label: 'Years Experience' },
    { number: 2800, suffix: '+', label: 'Satisfied Clients' },
    { number: 1500, suffix: '+', label: 'Completed Projects' },
    { number: 200, suffix: '+', label: 'IT Professional' },
    { number: 95, suffix: '%', label: 'Client Retention' },
    { number: 18, suffix: '+', label: 'Industry Served' }
  ];

   const [counts, setCounts] = useState(stats.map(() => 0));

  useEffect(() => {
    stats.forEach((stat, i) => {
      let start = 0;
      const end = stat.number;
      const duration = 1500; // ms
      const stepTime = 16; // ~60fps
      const increment = end / (duration / stepTime);

      const interval = setInterval(() => {
        start += increment;
        if (start < end) {
          setCounts(prev =>
            prev.map((val, idx) => (idx === i ? Math.floor(start) : val))
          );
        } else {
          setCounts(prev => prev.map((val, idx) => (idx === i ? end : val)));
          clearInterval(interval);
        }
      }, stepTime);
    });
  }, []);

  const reviews = [
    {
      text: "Sapphire Software Solutions delivered a user-friendly...",
      author: "Nick",
      country: "Australia",
      avatar: manIconPath
    },
    {
      text: "Sapphire Software Solutions drastically improved the client's platform and single-handedly developed all of the planned features in a timely manner. They also ensured excellent project management and updated the client o...",
      author: "Julius John",
      country: "Tanzania",
      avatar: manIconPath
    },
    {
      text: "The team delivered high-quality work and was very responsive to our needs. They provided excellent solutions that exceeded our expectations.",
      author: "Sarah Williams",
      country: "United States",
      avatar: manIconPath
    }
  ];

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const nextReview = () => {
    setCurrentReview((prev) => (prev === reviews.length - 1 ? 0 : prev + 1));
  };

  const prevReview = () => {
    setCurrentReview((prev) => (prev === 0 ? reviews.length - 1 : prev - 1));
  };

  return (
    <div className="flex items-center justify-center p-4">
      <div className="max-w-6xl w-full overflow-hidden">
        <div className="flex flex-col lg:flex-row">
          {/* Left Panel - Stats and Testimonial */}
          <div className="lg:w-2/5 bg-[#F0F8FF] p-8">
            {/* Stats Grid */}
            <div className="grid grid-cols-2 gap-8 mb-12 md:ml-20">
              {stats.map((stat, index) => (
                <div key={index} className="text-left">
                  <div className="text-4xl font-bold text-[#005D89] mb-1">
                    {counts[index]}{stat.suffix}
                  </div>
                  <div className="text-black-700 font-bold text-sm leading-tight">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>

            {/* Divider */}
            <hr className="border-gray-300 mb-8" />

            <TestimonialCarousel reviews={reviews} />
          </div>

          {/* Right Panel - Contact Form (unchanged) */}
         <div className="lg:w-3/5 p-4">
          <div className="shadow-[0_6px_12px_2px_rgba(0,0,0,0.2)] bg-white">
            {/* Header */}

            <div className="bg-[#005D89] text-white p-2 px-4">
              <h2 className="text-lg font-semibold">
                Questions? Contact us for Sales Enquiry!
              </h2>
            </div>

            {/* Form */}
            <div className="p-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                {/* Name */}
                <div>
                  <label className="block text-sm text-gray-600 mb-2">
                    Your name <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-teal-500 focus:border-transparent"
                  />
                </div>

                {/* Email */}
                <div>
                  <label className="block text-sm text-gray-600 mb-2">
                    Email ID <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-teal-500 focus:border-transparent"
                  />
                </div>

                {/* Mobile */}
                <div>
                  <label className="block text-sm text-gray-600 mb-2">
                    Mobile Number <span className="text-red-500">*</span>
                  </label>
                  <div className="flex">
                    <span className="inline-flex items-center px-3 text-sm text-gray-900 bg-gray-200 border border-r-0 border-gray-300 rounded-l-md">
                      +91
                    </span>
                    <input
                      type="tel"
                      name="mobile"
                      value={formData.mobile}
                      onChange={handleInputChange}
                      className="flex-1 p-3 border border-gray-300 rounded-r-md focus:ring-2 focus:ring-teal-500 focus:border-transparent"
                    />
                  </div>
                </div>

                {/* Service */}
                <div>
                  <label className="block text-sm text-gray-600 mb-2">
                    Interested Service <span className="text-red-500">*</span>
                  </label>
                  <div className="relative">
                    <select
                      name="service"
                      value={formData.service}
                      onChange={handleInputChange}
                      className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-teal-500 focus:border-transparent appearance-none"
                    >
                      <option value="">Select Service</option>
                      <option value="web-development">Web Development</option>
                      <option value="mobile-app">Mobile App</option>
                      <option value="software">Software Development</option>
                    </select>
                    <ChevronDownIcon className="absolute right-3 top-3 w-5 h-5 text-gray-400 pointer-events-none" />
                  </div>
                </div>

                {/* Budget */}
                <div>
                  <label className="block text-sm text-gray-600 mb-2">
                    Project Budget
                  </label>
                  <div className="relative">
                    <select
                      name="budget"
                      value={formData.budget}
                      onChange={handleInputChange}
                      className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-teal-500 focus:border-transparent appearance-none"
                    >
                      <option value="">Select Budget</option>
                      <option value="under-10k">Under $10,000</option>
                      <option value="10k-50k">$10,000 - $50,000</option>
                      <option value="50k-plus">$50,000+</option>
                    </select>
                    <ChevronDownIcon className="absolute right-3 top-3 w-5 h-5 text-gray-400 pointer-events-none" />
                  </div>
                </div>

                {/* Project Type */}
                <div>
                  <label className="block text-sm text-gray-600 mb-2">
                    Project Type <span className="text-red-500">*</span>
                  </label>
                  <div className="relative">
                    <select
                      name="type"
                      value={formData.type}
                      onChange={handleInputChange}
                      className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-teal-500 focus:border-transparent appearance-none"
                    >
                      <option value="">Select Type</option>
                      <option value="new">New Project</option>
                      <option value="existing">Existing Project</option>
                      <option value="maintenance">Maintenance</option>
                    </select>
                    <ChevronDownIcon className="absolute right-3 top-3 w-5 h-5 text-gray-400 pointer-events-none" />
                  </div>
                </div>
              </div>

              {/* Description */}
              <div className="mb-6">
                <label className="block text-sm text-gray-600 mb-2">
                  Tell us more about your project <span className="text-red-500">*</span>
                </label>
                <textarea
                  name="description"
                  value={formData.description}
                  onChange={handleInputChange}
                  rows={4}
                  className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-teal-500 focus:border-transparent"
                />
              </div>

              {/* File Upload */}
              <div className="mb-6">
                <div className="border-2 border-dashed border-gray-300 rounded-lg p-4">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      <svg className="h-8 w-8 text-gray-400 mr-3" stroke="currentColor" fill="none" viewBox="0 0 48 48">
                        <path d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                      <div>
                        <p className="text-gray-700 font-medium">Select or Drop your file here</p>
                        <p className="text-sm text-gray-500">
                          Allow only .jpg, .png, .pdf file size up to 5MB
                        </p>
                      </div>
                    </div>
                    <button className="bg-[#005D89] text-white px-6 py-2 rounded-md hover:shadow-[0_0_12px_rgba(0,0,0,0.5)] hover:bg-[#005D89]">
                      Upload
                    </button>
                  </div>
                </div>
              </div>

              {/* Bottom Section */}
              <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-6">
                {/* Newsletter Checkbox */}
                <div className="mb-4 lg:mb-0">
                  <label className="flex items-center">
                    <input
                      type="checkbox"
                      name="newsletter"
                      checked={formData.newsletter}
                      onChange={handleInputChange}
                      className="mr-3 h-4 w-4 text-teal-600 focus:ring-teal-500 border-gray-300 rounded"
                    />
                    <span className="text-sm text-black-600">Subscribe to our Newsletter</span>
                  </label>
                </div>

                {/* NDA Notice */}
                <p className="text-sm text-black-400 font-bold">
                  All Projects are protected by NDA and IPs
                </p>
              </div>

              {/* reCAPTCHA */}
              <div className="mb-6">
                <div className="flex items-center p-3 border border-gray-300 rounded-md bg-gray-50">
                  <input
                    type="checkbox"
                    className="mr-3 h-4 w-4 text-teal-600 focus:ring-teal-500 border-gray-300 rounded"
                  />
                  <span className="text-sm text-gray-700 mr-auto">I'm not a robot</span>
                  <div className="text-xs text-gray-500">
                    <div>reCAPTCHA</div>
                    <div className="text-xs">Privacy - Terms</div>
                  </div>
                </div>
              </div>

              {/* Buttons */}
              <div className="flex flex-col sm:flex-row gap-4">
                <button className="bg-[#005D89] text-white px-8 py-3 rounded-md hover:shadow-[0_0_12px_rgba(0,0,0,0.5)] hover:bg-[#005D89]">
                  Schedule a meeting
                </button>
                <button className="bg-[#005D89] text-white px-8 py-3 rounded-md hover:shadow-[0_0_12px_rgba(0,0,0,0.5)] hover:bg-[#005D89]">
                  Submit
                </button>
              </div>
            </div>

            <div className="bg-[#005D89] text-white p-2 px-4">
              <h2 className="text-lg font-semibold"></h2>
            </div>
</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CustomContactForm;
