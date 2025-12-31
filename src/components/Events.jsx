import React, { useState, useRef } from "react";

const BentoTilt = ({ children, className = "" }) => {
  const [transformStyle, setTransformStyle] = useState();
  const itemRef = useRef();

  // Only enable tilt on devices that support hover with a fine pointer
  const isHoverable =
    typeof window !== "undefined" &&
    window.matchMedia &&
    window.matchMedia("(hover: hover) and (pointer: fine)").matches;

  const handleMouseMove = (e) => {
    if (!itemRef.current || !isHoverable) return;
    const rect = itemRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left - itemRef.current.clientWidth / 2;
    const y = e.clientY - rect.top - itemRef.current.clientHeight / 2;
    setTransformStyle({
      transform: `perspective(1000px) rotateX(${y / 20}deg) rotateY(${x / 20}deg)`,
      transition: "transform 0.1s ease-out",
      willChange: "transform",
    });
  };

  const handleMouseLeave = () => {
    setTransformStyle(undefined);
  };

  // Ensure the wrapper is positioned (so inner content doesn't escape layout)
  const outerClass = `${className} relative`;

  return (
    <div
      className={outerClass}
      ref={itemRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={transformStyle}
    >
      <div className="w-full h-full transform transition-transform duration-500 hover:scale-105">
        {children}
      </div>
    </div>
  );
};

const EventCard = ({ date, title, location, prize, image, video }) => {
  return (
    <div className="relative overflow-hidden rounded-lg bg-gradient-to-br from-blue-900/50 to-purple-900/50 border border-blue-500/30">
      <div className="aspect-video overflow-hidden">
        <img
          src={image}
          alt={title}
            onError={(e) => (e.currentTarget.src = "/img/thumbnail.png")}
            className="w-full h-full object-cover transform transition-transform duration-500 hover:scale-110"
        />
      </div>
      <div className="p-4">
        <div className="text-sm text-blue-400 font-bold mb-2">{date}</div>
        <h3 className="text-xl font-bold text-white mb-2 special-font">{title}</h3>
        <div className="flex items-center gap-4 text-sm text-gray-300">
          <span>📍 {location}</span>
          <span>💰 {prize}</span>
          {video && (
            <a
              href={video}
              target="_blank"
              rel="noreferrer"
              className="ml-auto text-blue-300 underline text-sm"
            >
              ▶ Watch
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

const SkinCard = ({ name, role, image }) => {
  return (
    <div className="relative overflow-hidden rounded-lg bg-gradient-to-br from-gray-900/40 to-zinc-900/30 border border-zinc-700/20">
      <div className="aspect-square overflow-hidden">
        <img
            src={image}
            alt={name}
            onError={(e) => (e.currentTarget.src = "/img/thumbnail.png")}
            className="w-full h-full object-cover transform transition-transform duration-500 hover:scale-105"
        />
      </div>
      <div className="p-3">
        <h4 className="text-lg font-semibold text-white truncate">{name}</h4>
        <div className="text-sm text-gray-300">Role: {role}</div>
      </div>
    </div>
  );
};

const StoryCard = ({ title, excerpt, author, date, image, link }) => {
  const card = (
    <div className="relative overflow-hidden rounded-lg bg-gradient-to-br from-gray-900/30 to-zinc-900/20 border border-zinc-700/10 hover:shadow-lg transition-shadow duration-200">
      <div className="aspect-video overflow-hidden">
        <img src={image} alt={title} onError={(e) => (e.currentTarget.src = "/img/thumbnail.png")} className="w-full h-full object-cover" />
      </div>
      <div className="p-4">
        <h4 className="text-lg font-semibold text-white mb-1 truncate">{title}</h4>
        <p className="text-sm text-gray-300 mb-2">{excerpt}</p>
        <div className="text-xs text-blue-400">{author} · {date}</div>
      </div>
    </div>
  );

  if (link) {
    return (
      <a href={link} target="_blank" rel="noreferrer" className="block">
        {card}
      </a>
    );
  }

  return card;
};

const Events = () => {
  const events = [
    {
      date: "TBA",
      title: "FREE 5 LIMITED SKIN, GOLDEN MONTH EVENT, M1 M2 M3 SKIN PRICES..",
      location: "YouTube",
      prize: "TBA",
      image: "https://i.ytimg.com/vi/udJdXNzX3Fg/maxresdefault.jpg",
      video: "https://www.youtube.com/watch?v=udJdXNzX3Fg"
    },
    {
      date: "TBA",
      title: "ALL 9 KOF RESALE IN 1 EVENT | REVIEW KOF BINGO & KOF '97 EVENT..",
      location: "YouTube",
      prize: "TBA",
      image: "https://i.ytimg.com/vi/LE7qpo5yi4Y/maxresdefault.jpg",
      video: "https://www.youtube.com/watch?v=LE7qpo5yi4Y"
    },
    {
      date: "TBA",
      title: "ALL SKINS & EVENT IN DECEMBER - SNEEK PEEK JANUARY |..",
      location: "YouTube",
      prize: "TBA",
      image: "https://i.ytimg.com/vi/dImJU6lLzWw/maxresdefault.jpg",
      video: "https://www.youtube.com/watch?v=dImJU6lLzWw"
    },
    {
      date: "TBA",
      title: "UPCOMING EVENT: JUJUTSU 2.0 RESALE CONFIRMED |..",
      location: "YouTube",
      prize: "TBA",
      image: "https://i.ytimg.com/vi/n-yHaDVrIlA/maxresdefault.jpg",
      video: "https://www.youtube.com/watch?v=n-yHaDVrIlA"
    },
    {
      date: "TBA",
      title: "January StarLight Perks | Harley \"Dreaming Koi\" | Mobile Legends:",
      location: "YouTube",
      prize: "TBA",
      image: "https://i.ytimg.com/vi/gayo4fui1M0/maxresdefault.jpg",
      video: "https://www.youtube.com/watch?v=gayo4fui1M0"
    },
    {
      date: "TBA",
      title: "ALUCARD MIYA LESLEY LEGEND LEGEND UPDATE | ALL..",
      location: "YouTube",
      prize: "TBA",
      image: "https://i.ytimg.com/vi/NfpGE8u1ibY/maxresdefault.jpg",
      video: "https://www.youtube.com/watch?v=NfpGE8u1ibY"
    }
  ];

  // Use the separate images provided by the user for skins
  const skins = [
    { name: "DYRROTH", role: "JUGLUR", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT4bW2S-xxa56IUlCfbKSM6PXAOEQPXTiKmoA&s" },
    { name: "FANNY", role: "Assassin.", image: "https://w0.peakpx.com/wallpaper/440/46/HD-wallpaper-fanny-mlbb-epic-hero-legend-legends-ml-moba-mobile-skin-skylark-woman-thumbnail.jpg" },
    { name: "LAYLA", role: "Marksman", image: "https://i.pinimg.com/474x/4e/9c/78/4e9c78d2792798cd9db19074f13a0608.jpg" },
    { name: "NANA", role: "MAGE", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRPLUeELBE5M4HGL0wh6y_8gParTZZlMN06Ig&s" },
    { name: "CHANGE", role: "MAGE", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTiEq6mxVe1py5SDeaE5NsjBK7hm9mVCG69iQ&s" },
    { name: "Kung Fu Panda", role: "TANK", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR6Yx2Oz1kOqSttvDvjK0dTm1t3Qss7bfDTsw&s" }
  ];

  const stories = [
    {
      title: "Obsidia — Sovereign of Dark's End",
      excerpt: "A deep dive into Obsidia's lore, skins, and in-game impact.",
      author: "Esports Insider",
      date: "Mar 1, 2025",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR2MA7dV1IBC7Vnn8GKZAqDAVsJazMm3MxZuw&s",
      link: "https://mobile-legends.fandom.com/wiki/Obsidia"
    },
    {
      title: "Carmilla Shadow of Twilight",
      excerpt: "A Blood Demon who can pass the damage to multiple enemies via the link of curse..",
      author: "Pro Insights",
      date: "May 30, 2025",
      image: "https://i.ytimg.com/vi/xA34o3meQD4/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLCuPc7LaUDyR-OPRuxQ04lpAX-MGg",
      link: "https://mobile-legends.fandom.com/wiki/Carmilla"
    }
    ,
    {
      title: "Aamon — Duke of Shards",
      excerpt: "The aloof Duke of Castle Aberlee",
      author: "Lore Archive",
      date: "Dec 31, 2025",
      image: "https://i.ytimg.com/vi/4zPML59Vesk/sddefault.jpg",
      link: "https://mobile-legends.fandom.com/wiki/Aamon"
    }
  ];

  return (
    <>
  <section id="events" className="bg-black pb-52 pt-10 md:pt-20">
      <div className="container mx-auto px-3 md:px-10">
        <div className="flex flex-col md:flex-row items-start gap-8 px-5 py-10 md:py-16">
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
              src="https://en.moonton.com/upload/image/20250223/d31c7a935279f73d3f014ab274885b56.png"
              alt="MLBB Championship"
              className="max-w-full h-auto rounded-lg shadow-lg"
            />
            <div className="flex flex-row gap-2 w-full">
              <img 
                src="https://esportsinsider.com/wp-content/uploads/2025/12/M7-Carnival-Jakarta-2026-large.jpg"
                alt="MSC Tournament"
                className="w-1/2 h-auto rounded-lg shadow-lg"
              />
              <img 
                src="https://thegame-onemega.com/wp-content/uploads/2025/02/The-Game-February-2025-Article-Banner-WIDE_MLBB.jpg"
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

  {/* Inline skins grid (no separate section heading) */}
  <div id="skins" className="mt-8 px-5">
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
            {skins.map((skin, i) => (
              <div key={i} className="w-full">
                <SkinCard {...skin} />
              </div>
            ))}
          </div>
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

  {/* Stories section - separate block below Events */}
  <section id="stories" className="bg-neutral-900 py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-white special-font mb-6 text-center">STORIES</h2>
        <p className="max-w-2xl mx-auto text-center text-blue-50 opacity-60 mb-8">Latest articles and features from the MLBB scene.</p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {stories.map((s, i) => (
            <div key={i}>
              <StoryCard {...s} />
            </div>
          ))}
        </div>
      </div>
    </section>
    </>
  );
};

export default Events;

