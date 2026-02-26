import React, { useEffect, useState } from "react";
import { useSwipeable } from "react-swipeable";
import { sliderImages } from "../../data/sliderImages";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";

const ImageSlider = () => {
  const CollectionSize = sliderImages.length;
  const [index, setActiveStep] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  // Function to go to the next picture
  const goToNextPicture = () => {
    setActiveStep((prevActiveStep) => (prevActiveStep + 1) % CollectionSize);
  };

  // Function to go to the previous picture
  const goToPreviousPicture = () => {
    setActiveStep((prevActiveStep) =>
      prevActiveStep === 0 ? CollectionSize - 1 : prevActiveStep - 1,
    );
  };

  // Swipe handlers
  const swipeHandlers = useSwipeable({
    onSwipedLeft: goToNextPicture,
    onSwipedRight: goToPreviousPicture,
    preventScrollOnSwipe: true,
    trackMouse: true,
  });

  // Auto-slide every 7 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      goToNextPicture();
    }, 7000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div
      {...swipeHandlers}
      className="relative w-full max-w-4xl mx-auto px-4"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Main Slider Container */}
      <div className="relative overflow-hidden rounded-3xl shadow-2xl">
        {/* Image Container with Ken Burns Effect */}
        <div className="relative h-[400px] md:h-[450px] overflow-hidden">
          <AnimatePresence mode="wait">
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 1.1 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="absolute inset-0"
            >
              <motion.img
                src={sliderImages[index].imgPath}
                alt={sliderImages[index].label}
                className="w-full h-full object-cover"
                initial={{ scale: 1.15 }}
                animate={{ scale: 1 }}
                transition={{ duration: 7, ease: "linear" }}
              />
            </motion.div>
          </AnimatePresence>

          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />

          {/* Label with Glassmorphism */}
          <motion.div
            key={`label-${index}`}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.5 }}
            className="absolute bottom-0 left-0 right-0 p-6 md:p-8"
          >
            <div className="inline-block px-6 py-3 rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 shadow-lg">
              <p className="text-3xl md:text-4xl font-bold text-white text-center">
                {sliderImages[index].label}
              </p>
            </div>
          </motion.div>
        </div>

        {/* Navigation Arrows */}
        <motion.button
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: isHovered ? 1 : 0, x: 0 }}
          onClick={goToPreviousPicture}
          className="absolute left-4 top-1/2 -translate-y-1/2 z-20 w-14 h-14 rounded-full bg-white/10 backdrop-blur-md border border-white/20 hover:bg-white/20 transition-all flex items-center justify-center cursor-pointer"
        >
          <KeyboardArrowLeftIcon className="text-white text-4xl" />
        </motion.button>

        <motion.button
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: isHovered ? 1 : 0, x: 0 }}
          onClick={goToNextPicture}
          className="absolute right-4 top-1/2 -translate-y-1/2 z-20 w-14 h-14 rounded-full bg-white/10 backdrop-blur-md border border-white/20 hover:bg-white/20 transition-all flex items-center justify-center cursor-pointer"
        >
          <KeyboardArrowRightIcon className="text-white text-4xl" />
        </motion.button>

        {/* Link Overlay for Entire Slide */}
        <Link to={sliderImages[index].link} className="absolute inset-0 z-10">
          <span className="sr-only">View {sliderImages[index].label}</span>
        </Link>
      </div>

      {/* Navigation Dots */}
      <div className="flex justify-center gap-3 mt-6">
        {sliderImages.map((_, i) => (
          <motion.button
            key={i}
            onClick={() => setActiveStep(i)}
            className={`relative rounded-full transition-all duration-300 ${
              i === index ? "w-12 h-3" : "w-3 h-3"
            }`}
          >
            <div
              className={`absolute inset-0 rounded-full ${
                i === index
                  ? "bg-emerald-400"
                  : "bg-emerald-700/50 hover:bg-emerald-500"
              }`}
            />
            {i === index && (
              <motion.div
                layoutId="activeDot"
                className="absolute inset-0 rounded-full bg-emerald-400"
                transition={{ type: "spring", stiffness: 300, damping: 30 }}
              />
            )}
          </motion.button>
        ))}
      </div>
    </div>
  );
};

export default ImageSlider;
