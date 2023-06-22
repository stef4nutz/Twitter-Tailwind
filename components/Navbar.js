import { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faEnvelope, faBell, faGlobeAmericas, faSearch, faPlusSquare } from '@fortawesome/free-solid-svg-icons';
import { faTwitter } from '@fortawesome/free-brands-svg-icons';

const Sidebar = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    handleResize();

    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <>
    <div className={`navbar ${isMobile ? 'top-0 p-5 left-0 right-0 bg-zinc-900 shadow' : 'hidden'}`}>
        {isMobile ? (
            <div className="flex items-center justify-between">
                <a href="#" className="flex items-center justify-center text-xl text-white ">
                    <img src="/user-avatar.png" alt="User Avatar" className="w-6 h-6 rounded-full" />
                </a>
                <a href="#" className="flex items-center justify-center text-xl text-white">
                    <FontAwesomeIcon icon={faTwitter} />
                </a>
                <a href="#" className="flex items-center justify-center text-xl text-white">
                    <FontAwesomeIcon icon={faPlusSquare} />
                </a>
            </div>
        ) : (
            <div className=''></div>
        )}
    </div>
    <div className={`sidebar ${isMobile ? 'fixed bottom-0 p-5 left-0 right-0 bg-zinc-900 shadow' : 'fixed left-0 top-0 bg-zinc-900 h-full w-64 py-4 px-6'}`}>
      {isMobile ? (
        <div className="flex items-center justify-around">
          <a href="#" className="flex items-center justify-center text-xl text-white">
            <FontAwesomeIcon icon={faHome} />
          </a>
          <a href="#" className="flex items-center justify-center text-xl text-white">
            <FontAwesomeIcon icon={faSearch} />
          </a>
          <a href="#" className="flex items-center justify-center text-xl text-white">
            <FontAwesomeIcon icon={faBell} />
          </a>
          <a href="#" className="flex items-center justify-center text-xl text-white">
            <FontAwesomeIcon icon={faEnvelope} />
          </a>
        </div>
      ) : (
        <div className="flex flex-col h-full">
          <div className="flex items-center ml-3 mb-4">
            <FontAwesomeIcon icon={faTwitter} className="w-6 h-6 px-3 hover:bg-zinc-700/50 rounded-lg transition duration-300 text-white text-5xl" />
          </div>
          <ul className="space-y-2 flex-grow">
            <li>
              <a href="#" className="flex items-center py-2 px-5 hover:bg-zinc-700/50 rounded-full transition duration-300 mb-3">
                <FontAwesomeIcon icon={faHome} className="mr-3 text-22px font-semibold text-white" />
                <span className="text-xl font-semibold text-white">Home</span>
              </a>
            </li>
            <li>
              <a href="#" className="flex items-center py-2 px-5 hover:bg-zinc-700/50 rounded-full transition duration-300 mb-3">
                <FontAwesomeIcon icon={faGlobeAmericas} className="mr-3 text-xl font-semibold text-white" />
                <span className="text-xl font-semibold text-white">Explore</span>
              </a>
            </li>
            <li>
              <a href="#" className="flex items-center py-2 px-5 hover:bg-zinc-700/50 rounded-full transition duration-300 mb-3">
                <FontAwesomeIcon icon={faBell} className="mr-3 text-xl font-semibold text-white" />
                <span className="text-xl font-semibold text-white">Notifications</span>
              </a>
            </li>
            <li>
              <a href="#" className="flex items-center py-2 px-5 hover:bg-zinc-700/50 rounded-full transition duration-300 mb-3">
                <FontAwesomeIcon icon={faEnvelope} className="mr-3 text-xl font-semibold text-white" />
                <span className="text-xl font-semibold text-white">Messages</span>
              </a>
            </li>
            {/* Add more sidebar items as needed */}
          </ul>
          <div className="flex items-center py-2 px-5 hover:bg-zinc-700/50 rounded-full transition duration-300 mb-3">
            <img src="/user-avatar.png" alt="User Avatar" className="w-6 h-6 rounded-full mr-2" />
            <span className="text-xl font-semibold text-white">Stefan</span>
          </div>
        </div>
      )}
    </div>
    </>
  );
};

export default Sidebar;