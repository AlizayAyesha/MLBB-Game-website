import { FaDiscord, FaTwitter, FaYoutube, FaMedium } from "react-icons/fa";

const socialLinks = [
  { href: "https://discord.com", icon: <FaDiscord /> },
  { href: "https://twitter.com", icon: <FaTwitter /> },
  { href: "https://youtube.com", icon: <FaYoutube /> },
  { href: "https://medium.com", icon: <FaMedium /> },
];

const Footer = () => {
  return (
    <footer className="w-screen relative overflow-hidden bg-gradient-to-r from-[#070617] via-[#0b0b1a] to-[#11101a] py-12 text-white">
      {/* decorative floating particles */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="footer-particles">
          {Array.from({ length: 12 }).map((_, i) => (
            <span key={i} className={`particle p-${i}`} />
          ))}
        </div>
      </div>

      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center gap-6 md:flex-row md:items-center md:justify-between">
          <div className="flex items-center gap-4">
            <img src="/img/logo.png" alt="logo" className="h-14 w-14 glow-logo" />
            <div>
              <div className="text-lg font-bold special-font">MLBB Arena</div>
              <div className="text-xs text-blue-300/60">Bringing the MLBB scene to life</div>
            </div>
          </div>

          <div className="flex items-center gap-6">
            <div className="flex gap-4 text-2xl social-icons">
              {socialLinks.map((link, index) => (
                <a
                  key={index}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transform transition-all duration-300 hover:scale-110 hover:text-yellow-300"
                  aria-label={`social-${index}`}
                >
                  {link.icon}
                </a>
              ))}
            </div>

            <a
              href="#privacy-policy"
              className="text-sm font-light px-3 py-2 rounded-md bg-white/5 hover:bg-white/10 transition-colors"
            >
              Privacy Policy
            </a>
          </div>
        </div>

        <div className="mt-8 text-center text-sm text-gray-400">© Alizay Ayesha 2026. All rights reserved</div>
      </div>
    </footer>
  );
};

export default Footer;
