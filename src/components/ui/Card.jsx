import { useState } from 'react';
import PropTypes from 'prop-types';
import dummyImage from '../../assets/img/dummy-image.png';

const Card = ({ image = dummyImage, title = "Default Title", text = "Default text content." }) => {
    const [isExpanded, setIsExpanded] = useState(false);

    const handleReadMore = () => {
        setIsExpanded(!isExpanded);
    };

    return (
        // row card
        <div className="flex flex-wrap justify-center items-center ">
            <div className="m-auto mt-5 sm:mt-5 sm:h-5/6 sm:w-[90%] mb-11">
                <div className="flex flex-col border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden sm:flex-row p-4 shadow-sm bg-white">
                    <img className="w-full sm:rounded-l-md rounded-t-md sm:rounded-r-none sm:w-2/5 sm:h-80 h-48 object-cover object-center" src={image} alt="blog" />
                    <div className="sm:px-6 sm:w-2/3 flex flex-col justify-center">
                        <h1 className="title-font text-2xl sm:text-4xl font-bold text-gray-700 mb-2">{title}</h1>
                        <p className={`leading-relaxed mb-3 text-gray-600 text-base sm:text-lg text-justify ${isExpanded ? '' : 'line-clamp-3'}`}>
                            {text}
                        </p>
                        <div className="flex items-center flex-wrap">
                            <button onClick={handleReadMore} className="text-indigo-500 inline-flex items-center md:mb-2 lg:mb-0">
                                {isExpanded ? 'Show Less' : 'Read More'}
                                <svg className="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                    <path d="M5 12h14"></path>
                                    <path d="M12 5l7 7-7 7"></path>
                                </svg>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

Card.propTypes = {
    image: PropTypes.string,
    title: PropTypes.string,
    text: PropTypes.string,
};

export default Card;