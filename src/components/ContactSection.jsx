const ContactSection = () => {
  return (
    <div className="py-12 px-4">
      <h2 className="text-4xl font-bold text-center mb-12">
        You Can Also Contact Us By
      </h2>
      
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Sales Column */}
        <div className="text-center">
          <h3 className="text-3xl font-semibold mb-6 text-left ml-5">Sales</h3>
          <div className="space-y-4 bg-white rounded-lg shadow-md p-5 h-30">
            <div className="flex items-center justify-start space-x-2">
              <svg className="w-5 h-5 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              <div className="text-left">
                <p className="text-black-700">IN: +91-942-970-9662</p>
                <p className="text-black-700">US: +1-754-258-7670</p>
              </div>
            </div>
            <div className="flex items-center justify-start space-x-2">
              <svg className="w-5 h-5 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              <p className="text-black-700">contact@sapphiresolutions.net</p>
            </div>
          </div>
        </div>

        {/* Careers Column */}
        <div className="text-center">
          <h3 className="text-3xl font-semibold mb-6 ml-5 text-left">Careers (Jobs)</h3>
          <div className="space-y-4 bg-white rounded-lg shadow-md p-5 h-30">
            <div className="flex items-center justify-start space-x-2">
              <svg className="w-5 h-5 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              <div className="text-left">
                <p className="text-black-700">IN: +91-909-997-6034</p>
                <p className="text-black-700">US: +1-754-258-7670</p>
              </div>
            </div>
            <div className="flex items-center justify-start space-x-2">
              <svg className="w-5 h-5 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              <p className="text-black-700">careers@sapphiresolutions.net</p>
            </div>
          </div>
        </div>

        {/* Product Column */}
        <div className="text-center">
          <h3 className="text-3xl font-semibold mb-6 text-left ml-5">Product</h3>
          <div className="space-y-4 bg-white rounded-lg shadow-md p-5 h-30">
            <div className="flex items-center justify-start space-x-2">
              <svg className="w-5 h-5 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
              </svg>
              <p className="text-black-700">www.vidyalayaschoolsoftware.com</p>
            </div>
            <div className="flex items-center justify-start space-x-2">
              <svg className="w-5 h-5 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
              </svg>
              <p className="text-black-700">www.occucare.co.in</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactSection;