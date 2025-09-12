import indiaFlag from "../assets/images/india.png"; 
import usaFlag from "../assets/images/usa.png"; 
import gmailIcon from "../assets/images/gmail.png"; 
import teamsIcon from "../assets/images/teams.png"; 
import scheduleIcon from "../assets/images/schedule.png"; 

const Header = () => {
  return (
    <header className="border-b border-gray-200 bg-[#f0f8ff]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
      
            <div className="flex items-center space-x-2 cursor-pointer">
              <span className="w-5">  <img src={usaFlag} alt="usa Flag" /></span>
              <span className="text-xs text-black-600">For Sales: +1-754-258-7670</span>
            </div>
            <div className="flex items-center space-x-2 cursor-pointer">
              <span className="w-5">  <img src={indiaFlag} alt="India Flag" /></span>
              <span className="text-xs text-black-600">For Sales: +91-942-970-9662</span>
            </div>
      
          <div className="flex items-center space-x-2 cursor-pointer">
            <span className="w-5">  <img src={teamsIcon} alt="teams icon" /></span>
            <span className="text-xs text-black-600">Sapphire Software Solutions</span>
          </div>
   
            <div className="flex items-center space-x-2 cursor-pointer">
             <span className="w-5">  <img src={gmailIcon} alt="gmail icon" /></span>
              <a href="mailto:contact@sapphiresolutions.net" className="text-xs text-black-600" >
                contact@sapphiresolutions.net
              </a>
            </div>
            <div className="flex items-center space-x-2 cursor-pointer">
              <span className="w-5">  <img src={scheduleIcon} alt="schedule a meeting" /></span>
              <button className="text-xs text-black-600 ">
                Schedule a Meeting
              </button>
            </div>
      
        </div>
      </div>
    </header>
  );
};

export default Header;