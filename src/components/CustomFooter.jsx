const CustomFooter = () => {
  return (
    <footer className="bg-[#0874a7] text-white py-3 px-6">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center text-sm">
        <p className="mb-2 md:mb-0">
          © 2025 Sapphire Software Solutions. All rights reserved.
        </p>
        <div className="flex space-x-4">
          <a
            href="#"
            className="hover:underline"
          >
            Privacy Policy
          </a>
          <span>|</span>
          <a
            href="#"
            className="hover:underline"
          >
            Terms of Use
          </a>
        </div>
      </div>
    </footer>
  );
};

export default CustomFooter;
