import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart, faShare, faComment } from '@fortawesome/free-solid-svg-icons';

const Tweet = () => {
  return (
    <>
    <h2 className="text-2xl font-bold text-white mb-4">What's happening</h2>
    <div className="bg-zinc-900 p-4 rounded-lg tweets">
      <div className="flex items-start">
        <img
          src="user-avatar.png"
          alt="User Avatar"
          className="w-12 h-12 rounded-full mr-4"
        />
        <div>
          <div className="flex items-center">
            <h2 className="text-lg text-white font-bold">Stefan</h2>
            <span className="text-gray-600 ml-2">@stefan</span>
          </div>
          <p className="text-white text-sm">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce hendrerit justo et massa condimentum, in lobortis elit finibus.</p>
          <div className="flex items-center mt-4">
            <FontAwesomeIcon icon={faHeart} className="text-blue-500 mr-2" />
            <span className="text-gray-400 text-sm mr-7">2.1k</span>

            <FontAwesomeIcon icon={faComment} className="text-gray-400 mr-2" />
            <span className="text-gray-400 text-sm mr-7">200</span>

            <FontAwesomeIcon icon={faShare} className="text-gray-400 mr-2" />
            <span className="text-gray-400 text-sm mr-7">150</span>
          </div>
        </div>
      </div>
    </div>

    <div className="bg-zinc-900 p-4 rounded-lg tweets">
      <div className="flex items-start">
        <img
          src="elon.png"
          alt="User Avatar"
          className="w-12 h-12 rounded-full mr-4"
        />
        <div>
          <div className="flex items-center">
            <h2 className="text-lg text-white font-bold">Elon Musk</h2>
            <span className="text-gray-600 ml-2">@elonmusk</span>
          </div>
          <p className="text-white text-sm">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce hendrerit justo et massa condimentum, in lobortis elit finibus.</p>
          <div className="flex items-center mt-4">
            <FontAwesomeIcon icon={faHeart} className="text-blue-500 mr-2" />
            <span className="text-gray-400 text-sm mr-7">2.1k</span>

            <FontAwesomeIcon icon={faComment} className="text-gray-400 mr-2" />
            <span className="text-gray-400 text-sm mr-7">200</span>

            <FontAwesomeIcon icon={faShare} className="text-gray-400 mr-2" />
            <span className="text-gray-400 text-sm mr-7">150</span>
          </div>
        </div>
      </div>
    </div>

    <div className="bg-zinc-900 p-4 rounded-lg tweets">
      <div className="flex items-start">
        <img
          src="obama.png"
          alt="User Avatar"
          className="w-12 h-12 rounded-full mr-4"
        />
        <div>
          <div className="flex items-center">
            <h2 className="text-lg text-white font-bold">Barack Obama</h2>
            <span className="text-gray-600 ml-2">@BarackObama</span>
          </div>
          <p className="text-white text-sm">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce hendrerit justo et massa condimentum, in lobortis elit finibus.</p>
          <div className="flex items-center mt-4">
            <FontAwesomeIcon icon={faHeart} className="text-blue-500 mr-2" />
            <span className="text-gray-400 text-sm mr-7">2.1k</span>

            <FontAwesomeIcon icon={faComment} className="text-gray-400 mr-2" />
            <span className="text-gray-400 text-sm mr-7">200</span>

            <FontAwesomeIcon icon={faShare} className="text-gray-400 mr-2" />
            <span className="text-gray-400 text-sm mr-7">150</span>
          </div>
        </div>
      </div>
    </div>

    <div className="bg-zinc-900 p-4 rounded-lg tweets">
      <div className="flex items-start">
        <img
          src="trump.png"
          alt="User Avatar"
          className="w-12 h-12 rounded-full mr-4"
        />
        <div>
          <div className="flex items-center">
            <h2 className="text-lg text-white font-bold">Donald J. Trump</h2>
            <span className="text-gray-600 ml-2">@realDonaldTrump</span>
          </div>
          <p className="text-white text-sm">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce hendrerit justo et massa condimentum, in lobortis elit finibus.</p>
          <div className="flex items-center mt-4">
            <FontAwesomeIcon icon={faHeart} className="text-blue-500 mr-2" />
            <span className="text-gray-400 text-sm mr-7">2.1k</span>

            <FontAwesomeIcon icon={faComment} className="text-gray-400 mr-2" />
            <span className="text-gray-400 text-sm mr-7">200</span>

            <FontAwesomeIcon icon={faShare} className="text-gray-400 mr-2" />
            <span className="text-gray-400 text-sm mr-7">150</span>
          </div>
        </div>
      </div>
    </div>

    <div className="bg-zinc-900 p-4 rounded-lg tweets">
      <div className="flex items-start">
        <img
          src="biden.png"
          alt="User Avatar"
          className="w-12 h-12 rounded-full mr-4"
        />
        <div>
          <div className="flex items-center">
            <h2 className="text-lg text-white font-bold">Joe Biden</h2>
            <span className="text-gray-600 ml-2">@JoeBiden</span>
          </div>
          <p className="text-white text-sm">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce hendrerit justo et massa condimentum, in lobortis elit finibus.</p>
          <div className="flex items-center mt-4">
            <FontAwesomeIcon icon={faHeart} className="text-blue-500 mr-2" />
            <span className="text-gray-400 text-sm mr-7">2.1k</span>

            <FontAwesomeIcon icon={faComment} className="text-gray-400 mr-2" />
            <span className="text-gray-400 text-sm mr-7">200</span>

            <FontAwesomeIcon icon={faShare} className="text-gray-400 mr-2" />
            <span className="text-gray-400 text-sm mr-7">150</span>
          </div>
        </div>
      </div>
    </div>

    <div className="bg-zinc-900 p-4 rounded-lg tweets">
      <div className="flex items-start">
        <img
          src="bill.png"
          alt="User Avatar"
          className="w-12 h-12 rounded-full mr-4"
        />
        <div>
          <div className="flex items-center">
            <h2 className="text-lg text-white font-bold">Bill Gates</h2>
            <span className="text-gray-600 ml-2">@BillGates</span>
          </div>
          <p className="text-white text-sm">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce hendrerit justo et massa condimentum, in lobortis elit finibus.</p>
          <div className="flex items-center mt-4">
            <FontAwesomeIcon icon={faHeart} className="text-blue-500 mr-2" />
            <span className="text-gray-400 text-sm mr-7">2.1k</span>

            <FontAwesomeIcon icon={faComment} className="text-gray-400 mr-2" />
            <span className="text-gray-400 text-sm mr-7">200</span>

            <FontAwesomeIcon icon={faShare} className="text-gray-400 mr-2" />
            <span className="text-gray-400 text-sm mr-7">150</span>
          </div>
        </div>
      </div>
    </div>

    </>
  );
};

export default Tweet;