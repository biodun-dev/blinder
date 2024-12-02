import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import Brand from "../Brand";
import NavLink from "../NavLink";

const Navbar = () => {
  const [state, setState] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const router = useRouter();

  const navigation = [
    { title: "About Us", path: "/about" },
    { title: "Our Services", path: "#services" },
    { title: "Success Stories", path: "#testimonials" },
    { title: "Insights & Trends", path: "#insights" },
  ];

  useEffect(() => {
    const handleState = () => {
      document.body.classList.remove("overflow-hidden");
      setState(false);
    };

    router.events.on("routeChangeStart", handleState);
    router.events.on("hashChangeStart", handleState);


    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      router.events.off("routeChangeStart", handleState);
      router.events.off("hashChangeStart", handleState);
      window.removeEventListener("scroll", handleScroll);
    };
  }, [router.events]);

  const handleNavMenu = () => {
    setState(!state);
    document.body.classList.toggle("overflow-hidden");
  };

  const handleNavigation = (path) => {
    if (path.startsWith("#")) {
      const sectionId = path.slice(1); // Remove the `#` to get the id

      if (router.pathname === "/") {
        // If already on the home page, scroll to the section
        const targetElement = document.getElementById(sectionId);
        if (targetElement) {
          targetElement.scrollIntoView({ behavior: "smooth" });
        }
      } else {
        // Redirect to the home page, then scroll
        router.push(`/#${sectionId}`);
      }
    } else {
      // Navigate to other pages
      router.push(path);
    }
  };

  return (
    <header>
      <nav
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
          isScrolled
            ? "bg-white bg-opacity-50 backdrop-blur-lg shadow-md"
            : "bg-white"
        }`}
      >
        <div className="custom-screen items-center mx-auto md:flex">
          <div className="flex items-center justify-between py-3 md:py-5 md:block">
            <Brand />
            <div className="md:hidden">
              <button
                role="button"
                aria-label="Open the menu"
                className="text-blue-800 hover:text-blue-900"
                onClick={handleNavMenu}
              >
                {state ? (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    />
                  </svg>
                ) : (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-6 h-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                    />
                  </svg>
                )}
              </button>
            </div>
          </div>
          <div
            className={`flex-1 pb-3 mt-8 md:pb-0 md:mt-0 md:block ${
              state ? "" : "hidden"
            }`}
          >
            <ul className="justify-end items-center space-y-6 md:flex md:space-x-6 md:space-y-0 md:font-medium">
              {navigation.map((item, idx) => (
                <li
                  key={idx}
                  className="duration-150 text-gray-800 hover:text-gray-500 font-normal"
                >
                  <button
                    onClick={() => handleNavigation(item.path)}
                    className="block"
                  >
                    {item.title}
                  </button>
                </li>
              ))}
              <li>
                <NavLink
                  href="/get-started"
                  className="block font-medium text-sm text-white bg-blue-600 hover:bg-black px-5 py-2 rounded-lg md:inline transition duration-300 ease-in-out transform hover:scale-105 shadow-lg no-underline"
                >
                  Contact Us
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
