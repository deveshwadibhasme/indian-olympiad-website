import React, { useState, useEffect } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faNewspaper } from "@fortawesome/free-solid-svg-icons";

const NewsSection = () => {
  const localURL = "http://localhost:3000/api/get-data";
  const backendURL = "https://ios-server-azlc.onrender.com/api/get-data";
  const [news, setNews] = useState([]);

  useEffect(() => {
    const fetchNews = async () => {
      try {
        const response = await fetch(backendURL);
        const data = await response.json();
        setNews(data);
        if (data.length === 0) {
          setNews([
            { text: "Stay Tuned for new updates!!", date: new Date().toISOString()},
          ]);
          // console.log("object");
        }
      } catch (error) {
        console.error("Error fetching news:", error);
      }
    };

    fetchNews();
  }, []);

  const settings = {
    infinite: true,
    speed: 7000,
    autoplay: true,
    autoplaySpeed: 0,
    cssEase: "linear",
    slidesToShow: 1,
    slidesToScroll: 1,
    variableWidth: true, 
    arrows: false,
    dots: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <div className="container mx-auto px-4 py-8 my-2 w-full">
      <h2 className="text-4xl font-bold text-center mb-8 flex items-center justify-center">
        <FontAwesomeIcon icon={faNewspaper} className="mr-3 text-blue-600" />
        Updates
      </h2>
      <Slider {...settings}>
        {news.map((item, index) => (
          <div
            key={index}
            className="px-2 my-2 h-full max-w-sm w-full flex-1 flex-shrink-0"
          >
            <div className="bg-white border-2 border-gray-200 rounded-lg shadow-md px-6 py-6 flex flex-col h-full transition-transform duration-300 hover:scale-105 w-full">
              <p className="text-gray-800 flex-grow h-20 overflow-y-auto whitespace-normal break-words">
                {item.text}
              </p>
              <p className="text-sm mt-4 p-1 bg-blue-400 rounded-full text-white w-fit px-3 text-center self-start">
                {new Date(item.date).toLocaleDateString()}
              </p>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default NewsSection;
