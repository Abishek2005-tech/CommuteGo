import React, { useContext } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHandHoldingMedical, faRoute, faHeadset } from '@fortawesome/free-solid-svg-icons';
import img from '/cartoon.jpg';
import { ThemeContext } from '../context/ThemeContext';
import { Globe } from "../components/magicui/globe";

const ShowCase = () => {
  const { darkMode } = useContext(ThemeContext); // get darkMode state

  return (
    <div className={`h-full md:h-screen flex w-full sm:flex-row flex-col ${darkMode ? 'bg-black' : 'bg-gradient-to-b from-white to-cyan-100'}`}>
      <div data-aos-delay="100" className='w-full sm:w-2/4 h-full flex justify-center items-center flex-col mb-10 md:mb-0'>
        <h1 className={`text-4xl font-semibold pt-5 pl-5 text-center mt-10 md:mt-0 mb-4 text-cyan-400`}>
          Why Should You Choose Us
        </h1>
        <h2 data-aos="fade-up" className={`text-xl opacity-90 pl-4 text-center ${darkMode ? 'text-gray-300' : 'text-black'}`}>
          We have extensive knowledge and experience in the travel industry.
        </h2>
        <div data-aos="fade-up" className='w-9/12 mt-10 flex justify-center items-center'>
          <FontAwesomeIcon icon={faHandHoldingMedical} className={`text-5xl ${darkMode ? 'text-cyan-400' : 'text-cyan-500'}`} />
          <div className='pl-6'>
            <h1 className={`text-xl font-semibold ${darkMode ? 'text-gray-100' : 'text-black'}`}>Safety and support</h1>
            <p className={`opacity-70 ${darkMode ? 'text-gray-400' : 'text-black'}`}>
              Our top priority is the safety and well-being of our clients. We maintain high safety standards and have emergency support.
            </p>
          </div>
        </div>
        <div data-aos="fade-up" className='w-9/12 mt-6 flex justify-center items-center'>
          <FontAwesomeIcon icon={faRoute} className={`text-5xl ${darkMode ? 'text-cyan-400' : 'text-cyan-500'}`} />
          <div className='pl-6'>
            <h1 className={`text-xl font-semibold ${darkMode ? 'text-gray-100' : 'text-black'}`}>Diverse Range of Destinations</h1>
            <p className={`opacity-70 ${darkMode ? 'text-gray-400' : 'text-black'}`}>
              Whether it's a domestic tour or an international adventure, we cover a wide range of destinations to cater to different interests and preferences.
            </p>
          </div>
        </div>
        <div data-aos="fade-up" className='w-9/12 mt-6 flex justify-center items-center'>
          <FontAwesomeIcon icon={faHeadset} className={`text-5xl ${darkMode ? 'text-cyan-400' : 'text-cyan-500'}`} />
          <div className='pl-6'>
            <h1 className={`text-xl font-semibold ${darkMode ? 'text-gray-100' : 'text-black'}`}>24/7 Customer Support</h1>
            <p className={`opacity-70 ${darkMode ? 'text-gray-400' : 'text-black'}`}>
              Our dedicated customer support team is available round the clock to address any queries or concerns before, during, and after the journey.
            </p>
          </div>
        </div>
      </div>
      <div data-aos="fade-up" data-aos-delay="200" className='w-full sm:w-2/4 md:h-full h-[50vh] flex justify-center items-center dark:bg-white'>
        <div className="relative flex size-full max-w-lg items-center justify-center overflow-hidden rounded-lg md:px-40 px-10 md:pt-8 pt-4">
          <Globe className="md:top-56 top-4" />
          <div className="pointer-events-none absolute inset-0 h-full " />
        </div>
      </div>
    </div>
  );
};

export default ShowCase;
