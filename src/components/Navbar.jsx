
import { useEffect, useState } from "react";

export default function Navbar() {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    let lastScrollY = window.scrollY;

    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY < 20) {
        setVisible(true);
      } else if (currentScrollY > lastScrollY + 3) {
        setVisible(false);
      } else if (currentScrollY < lastScrollY - 3) {
        setVisible(true);
      }

      lastScrollY = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll, {
      passive: true,
    });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const links = ["Home", "About", "Skills", "Experience", "Contact"];

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-transform duration-500 ease-in-out ${
        visible ? "translate-y-0" : "-translate-y-full"
      }`}
    >
      <nav className="mx-auto flex h-[80px] max-w-[1440px] items-center justify-between bg-[#FBF9F3] px-6 sm:px-10 lg:px-20">
        {/* Logo */}
        <a
          href="#home"
          className="logo shrink-0 text-4xl  text-[#286F6C]"
        >
          Manish
        </a>

        {/* Navigation links */}
        <div className="hidden items-center gap-8 md:flex lg:gap-11">
          {links.map((link) => (
            <a
              key={link}
              href={`#${link.toLowerCase()}`}
              className={`relative whitespace-nowrap text-[16px] font-medium  hover:underline  tracking-wide  hover:text-[#286F6C] text-[#3d3f3e]`}
            >
              {link}
            </a>
          ))}
        </div>

        {/* Contact */}
        <a
          href="tel:+919834195914"
          className="flex shrink-0 items-center gap-4 text-[#292d2b]"
        >


           <span className="flex h-10 w-10 items-center justify-center rounded-full bg-white text-[#286F6C] shadow-sm transition-transform hover:scale-105">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="17"
              height="17"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.8"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              <path d="M22 16.92v3a2 2 0 0 1-2.18 2A19.79 19.79 0 0 1 11.19 18a19.5 19.5 0 0 1-6-6A19.79 19.79 0 0 1 2.09 3.18 2 2 0 0 1 4.08 1h3a2 2 0 0 1 2 1.72c.12.96.36 1.9.7 2.8a2 2 0 0 1-.45 2.11L8.06 8.94a16 16 0 0 0 6 6l1.31-1.27a2 2 0 0 1 2.11-.45c.9.34 1.84.58 2.8.7A2 2 0 0 1 22 16.92z" />
            </svg>
          </span>

          <span className="mo_number hidden text-[16px] font-medium text-[#286F6C] tracking-wide lg:block">
            +91 9834195914
          </span>

         
        </a>
      </nav>
    </header>
  );
}
