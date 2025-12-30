import React, { useState, useRef } from "react";

const BentoTilt = ({ children, className = "" }) => {
  const [transformStyle, setTransformStyle] = useState();
  const itemRef = useRef();
  const handleMouseMove = (e) => {
    if (!itemRef.current) return;
    setTransformStyle({
      transform: `perspective(1000px) rotateX(${
        (e.clientY -
          itemRef.current.getBoundingClientRect().top -
          itemRef.current.clientHeight / 2) /
        20
      }deg) rotateY(${
        (e.clientX -
          itemRef.current.getBoundingClientRect().left -
          itemRef.current.clientWidth / 2) /
        20
      }deg)`,
      transition: "transform 0.1s ease-out",
    });
  };
  const handleMouseLeave = () => {
    setTransformStyle(undefined);
  };
  return (
    <div
      className={className}
      ref={itemRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={transformStyle}
    >
      <div className="absolute inset-0 transform transition-transform duration-500 hover:scale-105">
        {children}
      </div>
    </div>
  );
};

const EventCard = ({ date, title, location, prize, image }) => {
  return (
    <div className="relative overflow-hidden rounded-lg bg-gradient-to-br from-blue-900/50 to-purple-900/50 border border-blue-500/30">
      <div className="aspect-video overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover transform transition-transform duration-500 hover:scale-110"
        />
      </div>
      <div className="p-4 relative z-10">
        <div className="text-sm text-blue-400 font-bold mb-2">{date}</div>
        <h3 className="text-xl font-bold text-white mb-2 special-font">{title}</h3>
        <div className="flex items-center gap-4 text-sm text-gray-300">
          <span>📍 {location}</span>
          <span>💰 {prize}</span>
        </div>
      </div>
    </div>
  );
};

const Events = () => {
  const events = [
    {
      date: "MARCH 15-17, 2025",
      title: "M4 World Championship",
      location: "Philippines",
      prize: "$1,000,000",
      image: "https://i.ytimg.com/vi/k4xLhSMcYJQ/maxresdefault.jpg"
    },
    {
      date: "APRIL 5-7, 2025",
      title: "MSC 2025",
      location: "Indonesia",
      prize: "$300,000",
      image: "https://i.ytimg.com/vi/M6tAhm2k3kQ/maxresdefault.jpg"
    },
    {
      date: "MAY 20-25, 2025",
      title: "MLBB Southeast Asia Cup",
      location: "Thailand",
      prize: "$200,000",
      image: "https://i.ytimg.com/vi/Ri76piR9ueg/maxresdefault.jpg"
    },
    {
      date: "JUNE 10-12, 2025",
      title: "MLBB Professional League",
      location: "Online",
      prize: "$150,000",
      image: "https://i.ytimg.com/vi/4szhxh980h771.jpg"
    },
    {
      date: "JULY 1-5, 2025",
      title: "MLBB All-Star",
      location: "Singapore",
      prize: "$100,000",
      image: "https://digital-trans.asia/storage/app/uploads/public/664/2b2/dda/6642b2ddaa9ed511100738.jpg"
    },
    {
      date: "AUGUST 15-18, 2025",
      title: "MLBB Continental Championship",
      location: "Vietnam",
      prize: "$250,000",
      image: "https://i.ytimg.com/vi/L9K8X4Qk2wA/maxresdefault.jpg"
    }
  ];

  return (
    <section className="bg-black pb-52 pt-20 relative z-10">
      <div className="container mx-auto px-3 md:px-10">
        <div className="flex flex-col md:flex-row items-start gap-8 px-5 py-16">
          <div className="flex-1">
            <h1 className="special-font hero-heading text-blue-100">
              EVENTS
            </h1>
            <p className="font-circular-web text-lg text-blue-50">
              Major MLBB Tournaments
            </p>
            <p className="max-w-md font-circular-web text-lg text-blue-50 opacity-50 mt-4">
              Stay updated with the biggest Mobile Legends: Bang Bang esports events around the world. From world championships to regional cups, witness the action unfold on the grandest stages.
            </p>
          </div>
          <div className="flex-1 flex flex-col justify-center items-center gap-4">
            <img 
              src="https://i.ytimg.com/vi/k4xLhSMcYJQ/maxresdefault.jpg"
              alt="MLBB Championship"
              className="max-w-full h-auto rounded-lg shadow-lg"
            />
            <div className="flex flex-row gap-2 w-full">
              <img 
                src="https://i.ytimg.com/vi/M6tAhm2k3kQ/maxresdefault.jpg"
                alt="MSC Tournament"
                className="w-1/2 h-auto rounded-lg shadow-lg"
              />
              <img 
                src="https://i.ytimg.com/vi/L9K8X4Qk2wA/maxresdefault.jpg"
                alt="MLBB Event"
                className="w-1/2 h-auto rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7 px-5 mt-8">
          {events.map((event, index) => (
            <BentoTilt key={index} className="h-96">
              <EventCard {...event} />
            </BentoTilt>
          ))}
        </div>

        <div className="mt-16 px-5 text-center">
          <div className="inline-block p-8 rounded-lg bg-gradient-to-r from-blue-900/50 to-purple-900/50 border border-blue-500/30">
            <h2 className="text-3xl font-bold text-white special-font mb-4">
              M<b>o</b>re E<b>v</b>ents C<b>o</b>ming S<b>o</b>on
            </h2>
            <p className="text-gray-300">
              Stay tuned for more exciting MLBB tournaments and events!
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Events;

