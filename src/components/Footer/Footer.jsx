import { Link } from "react-router-dom";
// links icons
import FacebookRoundedIcon from "@mui/icons-material/FacebookRounded";
import InstagramIcon from "@mui/icons-material/Instagram";
import GitHubIcon from "@mui/icons-material/GitHub";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";

// components/Footer.js
export default function Footer() {
  return (
    <footer className="bg-cadenzaBlack text-cloud py-5 border-gray-700 border-t mt-2">
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-5">
        {/* Logo & Brand */}
        <div>
          <h2 className="text-2xl font-heading text-baccarat">CADENZA®</h2>
          <p className="mt-2 text-sm text-gray-300">
            Luxury scents & natural care. A symphony of elegance in every
            product.
          </p>
        </div>
        <div className="flex justify-around">
          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold text-vanilla">Quick Links</h3>
            <ul className="mt-3 space-y-1 text-sm">
              <li>
                <Link to="/ourMembers" className="hover:text-sparkle">
                  Our Members
                </Link>
              </li>
              <li>
                <a href="" className="hover:text-sparkle">
                  About CADENZA
                </a>
              </li>
              <li>
                <a href="" className="hover:text-sparkle">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold text-vanilla">Get in Touch</h3>
            <p className="mt-3 text-sm text-gray-300">
              Email: info@cadenza.com
            </p>
            <p className="text-sm text-gray-300">Phone: +20 1153469099</p>
            <p className="text-sm text-gray-300">Location: Al Minya, Egypt</p>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="mt-5 border-t border-gray-700 pt-3 text-center  text-gray-400">
        © {new Date().getFullYear()}{" "}
        <span className="text-lg font-bold text-emerald-950">
          Diaa Elkhouly
        </span>
        - All rights reserved
      </div>
      <div className="flex justify-center gap-7 mt-1 ">
        <FacebookRoundedIcon
          style={{ fontSize: "30" }}
          onClick={() => {
            window.location.href = "https://www.facebook.com/diaa.elkhouly.3";
          }}
          className=" cursor-pointer text-gray-900"
        />
        <GitHubIcon
          style={{ fontSize: "30" }}
          className="cursor-pointer text-gray-900"
          onClick={() => {
            window.location.href = "https://github.com/DiaaElkhouly";
          }}
        />
        <InstagramIcon
          style={{ fontSize: "30" }}
          className="cursor-pointer text-gray-900"
          onClick={() => {
            window.location.href = "https://www.instagram.com/diaaelkhouly/";
          }}
        />
        <WhatsAppIcon
          style={{ fontSize: "30" }}
          className="cursor-pointer text-gray-900"
          onClick={() => {
            window.location.href = "https://wa.me/201201449924?text=مرحبا%20بك";
          }}
        />
      </div>
    </footer>
  );
}
