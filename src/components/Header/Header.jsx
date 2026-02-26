import { useState } from "react";
import ShinyText from "./shinyText";
import { Link } from "react-router-dom";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import HomeIcon from "@mui/icons-material/Home";
import InfoIcon from "@mui/icons-material/Info";
import GroupIcon from "@mui/icons-material/Group";
import ShoppingBagIcon from "@mui/icons-material/ShoppingBag";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { name: "Home", path: "/", icon: <HomeIcon /> },
    { name: "About", path: "/aboutNefer", icon: <InfoIcon /> },
    { name: "Members", path: "/ourMembers", icon: <GroupIcon /> },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 w-full z-50 bg-emerald-950/95 backdrop-blur-sm shadow-lg box-border overflow-x-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full box-border">
        <div className="flex justify-between items-center h-16">
          {/* Logo Section */}
          <div className="flex items-center gap-3">
            <img
              className="w-10 h-10 rounded-full border-2 border-emerald-400"
              src="./images/logo.png"
              alt="CADENZA Logo"
            />
            <ShinyText
              text="CADENZA®"
              disabled={false}
              speed={3}
              className="text-white text-xl sm:text-2xl font-bold"
            />
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className="px-4 py-2 rounded-lg text-emerald-200 hover:text-white hover:bg-emerald-800 transition-all duration-300 font-medium flex items-center gap-2"
              >
                {link.icon}
                {link.name}
              </Link>
            ))}
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 rounded-lg text-emerald-200 hover:text-white hover:bg-emerald-800 transition-colors"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <CloseIcon /> : <MenuIcon />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-emerald-800">
            <nav className="flex flex-col gap-2">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  onClick={() => setIsMenuOpen(false)}
                  className="px-4 py-3 rounded-lg text-emerald-200 hover:text-white hover:bg-emerald-800 transition-all duration-300 font-medium flex items-center gap-3"
                >
                  {link.icon}
                  {link.name}
                </Link>
              ))}
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
