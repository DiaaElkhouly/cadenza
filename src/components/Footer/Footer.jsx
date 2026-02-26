import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import FacebookRoundedIcon from "@mui/icons-material/FacebookRounded";
import InstagramIcon from "@mui/icons-material/Instagram";
import GitHubIcon from "@mui/icons-material/GitHub";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import EmailIcon from "@mui/icons-material/Email";
import PhoneIcon from "@mui/icons-material/Phone";
import SendIcon from "@mui/icons-material/Send";
import DiamondIcon from "@mui/icons-material/Diamond";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    {
      icon: FacebookRoundedIcon,
      href: "https://www.facebook.com/diaa.elkhouly.3",
      label: "Facebook",
    },
    {
      icon: InstagramIcon,
      href: "https://www.instagram.com/diaaelkhouly/",
      label: "Instagram",
    },
    {
      icon: GitHubIcon,
      href: "https://github.com/DiaaElkhouly",
      label: "GitHub",
    },
    {
      icon: WhatsAppIcon,
      href: "https://wa.me/201201449924?text=مرحبا%20بك",
      label: "WhatsApp",
    },
  ];

  return (
    <footer className="bg-gradient-to-b from-emerald-950 to-emerald-900 text-emerald-100 mt-auto box-border max-w-full">
      {/* Decorative Top Border */}
      <div className="h-1 bg-gradient-to-r from-transparent via-emerald-500 to-transparent " />

      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 box-border">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8 w-full box-border">
          {/* Brand Section */}
          <div className="lg:col-span-1">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="flex items-center gap-3 mb-5"
            >
              <div className="relative">
                <img
                  className="w-14 h-14 rounded-full border-2 border-emerald-400 shadow-lg shadow-emerald-500/20"
                  src="./images/logo.png"
                  alt="CADENZA Logo"
                />
                <div className="absolute -bottom-1 -right-1 w-5 h-5 bg-emerald-500 rounded-full flex items-center justify-center">
                  <DiamondIcon
                    className="text-emerald-950"
                    sx={{ fontSize: 12 }}
                  />
                </div>
              </div>
              <div>
                <h2 className="text-2xl font-bold text-emerald-400 tracking-wide">
                  CADENZA®
                </h2>
                <p className="text-xs text-emerald-500 tracking-widest uppercase">
                  Luxury & Care
                </p>
              </div>
            </motion.div>
            <p className="text-emerald-300/80 text-sm leading-relaxed mb-5">
              A symphony of elegance in every product, crafted with passion and
              precision for those who deserve to shine.
            </p>
            {/* Decorative Line */}
            <div className="w-16 h-0.5 bg-gradient-to-r from-emerald-500 to-transparent rounded-full" />
          </div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            <h3 className="text-lg font-semibold text-white mb-5 flex items-center gap-2">
              <span className="w-1 h-5 bg-emerald-400 rounded-full"></span>
              Quick Links
            </h3>
            <ul className="space-y-3.5">
              {[
                { to: "/", label: "Home" },
                { to: "/aboutNefer", label: "About Us" },
                { to: "/ourMembers", label: "Our Members" },
              ].map((link) => (
                <li key={link.to}>
                  <Link
                    to={link.to}
                    className="text-emerald-300/80 hover:text-white hover:translate-x-1.5 transition-all duration-300 flex items-center gap-2 group"
                  >
                    <span className="text-emerald-500 group-hover:text-emerald-400 transition-colors">
                      ▹
                    </span>
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Products */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <h3 className="text-lg font-semibold text-white mb-5 flex items-center gap-2">
              <span className="w-1 h-5 bg-emerald-400 rounded-full"></span>
              Our Products
            </h3>
            <ul className="space-y-3.5">
              {[
                { to: "/vanilla", label: "Vanilla Body Splash" },
                { to: "/baccaraat", label: "Baccaraat Rouge" },
                { to: "/monosparkle", label: "Mono Sparkle" },
                { to: "/deodorant", label: "Natural Deodorant" },
                { to: "/acneCream", label: "Acne Cream" },
              ].map((link) => (
                <li key={link.to}>
                  <Link
                    to={link.to}
                    className="text-emerald-300/80 hover:text-white hover:translate-x-1.5 transition-all duration-300 flex items-center gap-2 group"
                  >
                    <span className="text-emerald-500 group-hover:text-emerald-400 transition-colors">
                      ▹
                    </span>
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
          >
            <h3 className="text-lg font-semibold text-white mb-5 flex items-center gap-2">
              <span className="w-1 h-5 bg-emerald-400 rounded-full"></span>
              Contact Us
            </h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 text-emerald-300/80">
                <LocationOnIcon
                  className="text-emerald-400 mt-0.5"
                  sx={{ fontSize: 20 }}
                />
                <span>Al Minya, Egypt</span>
              </li>
              <li className="flex items-center gap-3 text-emerald-300/80">
                <PhoneIcon className="text-emerald-400" sx={{ fontSize: 20 }} />
                <a
                  href="tel:+201153469099"
                  className="hover:text-white transition-colors"
                >
                  +20 1201449924
                </a>
              </li>
              <li className="flex items-center gap-3 text-emerald-300/80">
                <EmailIcon className="text-emerald-400" sx={{ fontSize: 20 }} />
                <a
                  href="mailto:info@cadenza.com"
                  className="hover:text-white transition-colors"
                >
                  info@cadenza.com
                </a>
              </li>
            </ul>

            {/* Newsletter */}
            <div className="mt-6">
              <h4 className="text-sm font-semibold text-emerald-300 mb-3">
                Stay Updated
              </h4>
              <div className="flex shadow-lg rounded-xl overflow-hidden">
                <input
                  type="email"
                  placeholder="Your email"
                  className="flex-1 px-4 py-3 bg-emerald-900/50 border border-emerald-700/50 text-emerald-100 placeholder-emerald-500/60 focus:outline-none focus:border-emerald-500 focus:bg-emerald-900/70 transition-all"
                />
                <button className="px-5 py-3 bg-emerald-600 hover:bg-emerald-500 transition-colors flex items-center justify-center">
                  <SendIcon className="text-white" sx={{ fontSize: 20 }} />
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-emerald-800/50 bg-emerald-950/50 w-full box-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 w-full box-border">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 w-full">
            <p className="text-emerald-400/80 text-sm">
              © {currentYear}{" "}
              <span className="text-emerald-300 font-semibold">CADENZA®</span> —
              All rights reserved
            </p>

            <div className="flex flex-col items-center gap-4">
              <p className="text-emerald-500 text-xs text-center">
                Designed & Developed by{" "}
                <span className="text-emerald-300 font-semibold">
                  Diaa Elkhouly
                </span>
              </p>

              {/* Social Media Links */}
              <div className="flex gap-3">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    whileHover={{ scale: 1.1, y: -2 }}
                    className="p-2.5 rounded-full bg-emerald-800/40 hover:bg-emerald-600 transition-all duration-300 shadow-md hover:shadow-emerald-500/20"
                    aria-label={social.label}
                  >
                    <social.icon
                      className="text-emerald-300"
                      sx={{ fontSize: 20 }}
                    />
                  </motion.a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
