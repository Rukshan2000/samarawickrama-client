import React, { useState, useEffect } from "react";

const About = () => {
  const [gradientClass, setGradientClass] = useState("");
  const [isSmallScreen, setIsSmallScreen] = useState(false);
  const [showPopup, setShowPopup] = useState(false);
  const [clickedButton, setClickedButton] = useState("");

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setGradientClass("bg-gradient-to-t");
        setIsSmallScreen(true);
      } else if (window.innerWidth >= 768 && window.innerWidth < 1024) {
        setGradientClass("bg-gradient-to-r");
        setIsSmallScreen(false);
      } else {
        setGradientClass("bg-gradient-to-r");
        setIsSmallScreen(false);
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const handleButtonClick = (buttonName) => {
    setShowPopup(true);
    setClickedButton(buttonName);
  };

  const handleClosePopup = () => {
    // Hide the popup by updating the state
    setShowPopup(false);
    // Clear the clickedButton state
    setClickedButton("");
  };
  
  

  return (
    <div className={`grid grid-cols-1 gap-5 p-9 md:grid-cols-2 ${gradientClass} from-green-300 via-white to-white sm:grid-cols-1 md:grid-cols-2`}>
<div >
  <div>
    <h2 className="mb-4 text-3xl font-bold">About Me</h2>
    <p className={`text-xl text-justify ${isSmallScreen ? '' : 'mr-20'}`}>
      My name is Samarawicrama, and I am a dedicated agriculture consultant with extensive experience in sustainable farming practices and agricultural development. My journey in the field of agriculture began with my graduation from Hardy Ampara, where I gained a solid foundation in agricultural science and technology.
    </p>
    <p className={`mt-4 text-xl text-justify ${isSmallScreen ? '' : 'mr-20'}`}>
      Further advancing my expertise, I graduated from the University of Ruhuna, where I specialized in innovative farming techniques and resource management. My education and hands-on experience have equipped me with the skills to provide effective consultancy services, helping farmers and agricultural businesses optimize their operations and achieve sustainable growth.
    </p>
    <p className={`mt-4 text-xl text-justify ${isSmallScreen ? '' : 'mr-20'}`}>
      I am passionate about contributing to the agricultural sector by sharing my knowledge and implementing strategies that promote environmental sustainability and economic viability. I look forward to collaborating with clients and organizations dedicated to advancing agricultural practices and achieving long-term success.
    </p>
  </div>
</div>


      <div className="flex flex-wrap gap-4 mt-10 ml-0">


      <button className="flex items-center justify-center p-2 transition duration-300 rounded-lg md:p-3 max-h-12 hover:bg-green-600 ring ring-orange-100 ring-offset-1 ring-offset-gray-500 ring-blur-xs" onClick={() => handleButtonClick("Precision Agriculture is a farming management concept that uses technology to monitor and optimize agricultural production processes.")}>
      <h3 className="text-lg font-semibold">Precision Agriculture</h3>
    </button>
    <button className="flex items-center justify-center p-2 transition duration-300 rounded-lg md:p-3 max-h-12 hover:bg-green-600 ring ring-orange-100 ring-offset-1 ring-offset-gray-500 ring-blur-xs" onClick={() => handleButtonClick("Drones are used in agriculture for monitoring crop health, surveying fields, and applying pesticides or fertilizers efficiently.")}>
      <h3 className="text-lg font-semibold">Drones in Agriculture</h3>
    </button>
    <button className="flex items-center justify-center p-2 transition duration-300 rounded-lg md:p-3 max-h-12 hover:bg-green-600 ring ring-orange-100 ring-offset-1 ring-offset-gray-500 ring-blur-xs" onClick={() => handleButtonClick("Hydroponics is a method of growing plants without soil, using nutrient-rich water solutions to deliver essential nutrients to the plants.")}>
      <h3 className="text-lg font-semibold">Hydroponics</h3>
    </button>
    <button className="flex items-center justify-center p-2 transition duration-300 rounded-lg md:p-3 max-h-12 hover:bg-green-600 ring ring-orange-100 ring-offset-1 ring-offset-gray-500 ring-blur-xs" onClick={() => handleButtonClick("IoT in Agriculture involves the use of Internet of Things technology to collect data on soil moisture, weather conditions, and crop health to improve farm management.")}>
      <h3 className="text-lg font-semibold">IoT in Agriculture</h3>
    </button>
    <button className="flex items-center justify-center p-2 transition duration-300 rounded-lg md:p-3 max-h-12 hover:bg-green-600 ring ring-orange-100 ring-offset-1 ring-offset-gray-500 ring-blur-xs" onClick={() => handleButtonClick("Vertical Farming is a method of growing crops in vertically stacked layers, often using controlled-environment agriculture techniques to optimize plant growth.")}>
      <h3 className="text-lg font-semibold">Vertical Farming</h3>
    </button>
    <button className="flex items-center justify-center p-2 transition duration-300 rounded-lg md:p-3 max-h-12 hover:bg-green-600 ring ring-orange-100 ring-offset-1 ring-offset-gray-500 ring-blur-xs" onClick={() => handleButtonClick("Blockchain in Agriculture can be used to improve traceability and transparency in the supply chain, ensuring food safety and quality control.")}>
      <h3 className="text-lg font-semibold">Blockchain in Agriculture</h3>
    </button>
    <button className="flex items-center justify-center p-2 transition duration-300 rounded-lg md:p-3 max-h-12 hover:bg-green-600 ring ring-orange-100 ring-offset-1 ring-offset-gray-500 ring-blur-xs" onClick={() => handleButtonClick("Smart Irrigation systems use sensors and weather data to optimize water usage for crops, reducing waste and improving efficiency.")}>
      <h3 className="text-lg font-semibold">Smart Irrigation</h3>
    </button>
    <button className="flex items-center justify-center p-2 transition duration-300 rounded-lg md:p-3 max-h-12 hover:bg-green-600 ring ring-orange-100 ring-offset-1 ring-offset-gray-500 ring-blur-xs" onClick={() => handleButtonClick("Biotechnology in Agriculture includes the use of genetic engineering, molecular markers, and tissue culture to enhance crop yield and resistance to pests and diseases.")}>
      <h3 className="text-lg font-semibold">Biotechnology</h3>
    </button>
      </div>
      
      <div className="mt-8 mb-52">
  <h2 className="mb-4 text-2xl font-bold">My Skills</h2>
  <div className="flex flex-col space-y-2">
    <div className="flex items-center">
      <div className="w-1/4 font-semibold">Crop Management:</div>
      <div className="relative flex-grow h-8 bg-blue-100 rounded-lg">
        <div className="absolute top-0 left-0 h-full bg-green-500 rounded-lg" style={{ width: '80%' }}></div>
      </div>
    </div>
    <div className="flex items-center">
      <div className="w-1/4 font-semibold">Soil Science:</div>
      <div className="relative flex-grow h-8 bg-blue-100 rounded-lg">
        <div className="absolute top-0 left-0 h-full bg-red-800 rounded-lg" style={{ width: '70%' }}></div>
      </div>
    </div>
    <div className="flex items-center">
      <div className="w-1/4 font-semibold ">Irrigation Systems:</div>
      <div className="relative flex-grow h-8 bg-blue-100 rounded-lg">
        <div className="absolute top-0 left-0 h-full bg-blue-500 rounded-lg" style={{ width: '75%' }}></div>
      </div>
    </div>
    <div className="flex items-center">
      <div className="w-1/4 font-semibold">Agricultural Technology:</div>
      <div className="relative flex-grow h-8 bg-blue-100 rounded-lg">
        <div className="absolute top-0 left-0 h-full bg-yellow-500 rounded-lg" style={{ width: '85%' }}></div>
      </div>
    </div>
    <div className="flex items-center">
      <div className="w-1/4 font-semibold">Pest Management:</div>
      <div className="relative flex-grow h-8 bg-blue-100 rounded-lg">
        <div className="absolute top-0 left-0 h-full bg-red-500 rounded-lg" style={{ width: '65%' }}></div>
      </div>
    </div>
  </div>
</div>







{/* Pop-up message box */}{showPopup && (
  <div id="popup" className="fixed top-0 left-0 flex items-center justify-center w-full h-full bg-black bg-opacity-50">
  <div className="p-6 bg-white rounded-lg" style={{ maxWidth: "500px" }}>
    <p className="text-xl font-semibold">{clickedButton}</p>
    {/* Close button */}
    <button className="mt-4 font-semibold text-blue-500" onClick={handleClosePopup}>
      Close
    </button>
  </div>
</div>
)}



    </div>
  );
};

export default About;