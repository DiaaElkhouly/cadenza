import ProductCard from "../ProductCard/ProductCard";
import ImageSlider from "./imageSlider";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { categories } from "../../data/products";
import AutoAwesomeIcon from "@mui/icons-material/AutoAwesome";
import DiamondIcon from "@mui/icons-material/Diamond";

// Pre-defined floating particles with static values
const floatingParticles = [
  { id: 0, x: 5, y: 15, duration: 12, delay: 2 },
  { id: 1, x: 25, y: 35, duration: 18, delay: 4 },
  { id: 2, x: 45, y: 55, duration: 14, delay: 3 },
  { id: 3, x: 65, y: 75, duration: 16, delay: 5 },
  { id: 4, x: 85, y: 25, duration: 20, delay: 1 },
  { id: 5, x: 15, y: 65, duration: 15, delay: 6 },
  { id: 6, x: 55, y: 45, duration: 17, delay: 2 },
  { id: 7, x: 75, y: 85, duration: 13, delay: 4 },
  { id: 8, x: 35, y: 95, duration: 19, delay: 3 },
  { id: 9, x: 95, y: 55, duration: 11, delay: 5 },
];

export default function Body() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <div className="pt-20 pb-8 min-h-screen">
      {/* Hero Section - Pixel Perfect */}
      <motion.div
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="relative text-center px-2 py-5 md:py-20 lg:py-16 overflow-hidden bg-gradient-to-b from-emerald-950/30 to-transparent w-full box-border"
      >
        {/* Animated Background Particles */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {floatingParticles.map((particle) => (
            <motion.div
              key={particle.id}
              className="absolute w-1.5 h-1.5 rounded-full bg-emerald-400/40"
              initial={{
                x: `${particle.x}%`,
                y: `${particle.y}%`,
                opacity: 0,
              }}
              animate={{
                y: [null, "-120%"],
                opacity: [0, 0.5, 0],
              }}
              transition={{
                duration: particle.duration,
                repeat: Infinity,
                delay: particle.delay,
                ease: "linear",
              }}
            />
          ))}
        </div>

        {/* Hero Content - Pixel Perfect */}
        <div className="relative z-10 max-w-5xl mx-auto">
          {/* Badge */}
          <motion.div
            initial={{ scale: 0.8, opacity: 0, y: 20 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.5, ease: "easeOut" }}
            className="inline-flex items-center gap-2 px-5 mb-8 rounded-full bg-emerald-900/60 border border-emerald-700/60 backdrop-blur-md shadow-lg"
          >
            <DiamondIcon className="text-emerald-300" sx={{ fontSize: 18 }} />
            <span className="text-emerald-200 text-xs font-semibold tracking-wide uppercase">
              Premium Quality
            </span>
          </motion.div>

          {/* Main Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold mb-5 text-white tracking-tight"
          >
            "Everyone deserves its own Cadenza"
          </motion.h1>
          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.6 }}
            className="text-emerald-400/90 max-w-2xl mx-auto text-lg md:text-xl leading-relaxed  px-3"
          >
            Discover our premium collection of luxury fragrances and natural
            skincare products, crafted to elevate your everyday experience
          </motion.p>
        </div>

        {/* Decorative Blur Elements */}
        <div className="absolute top-10 left-[10%] w-48 h-48 md:w-64 md:h-64 bg-emerald-500/15 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-10 right-[10%] w-48 h-48 md:w-64 md:h-64 bg-emerald-400/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-48 md:w-[400px] md:h-[200px] bg-emerald-600/5 rounded-full blur-3xl pointer-events-none" />

        {/* Image Slider */}
        <div className="my-4 px-4">
          <ImageSlider />
        </div>
      </motion.div>

      {/* Products Section */}
      <div className="max-w-7xl mx-auto px-4">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {categories.map((category, catIndex) => (
            <motion.div
              key={category.slug}
              variants={itemVariants}
              className="mb-16"
            >
              {/* Enhanced Section Header */}
              <div className="flex items-center gap-6 mb-10">
                <div className="hidden md:block h-px flex-1 bg-gradient-to-r from-transparent via-emerald-600 to-transparent" />
                <div className="flex items-center gap-3">
                  {catIndex % 2 === 0 ? (
                    <AutoAwesomeIcon
                      className="text-emerald-400"
                      sx={{ fontSize: 32 }}
                    />
                  ) : (
                    <DiamondIcon
                      className="text-emerald-400"
                      sx={{ fontSize: 32 }}
                    />
                  )}
                  <h2 className="text-3xl md:text-4xl font-bold text-white text-center whitespace-nowrap">
                    {category.name}
                  </h2>
                  {catIndex % 2 === 0 ? (
                    <DiamondIcon
                      className="text-emerald-400"
                      sx={{ fontSize: 32 }}
                    />
                  ) : (
                    <AutoAwesomeIcon
                      className="text-emerald-400"
                      sx={{ fontSize: 32 }}
                    />
                  )}
                </div>
                <div className="hidden md:block h-px flex-1 bg-gradient-to-r from-transparent via-emerald-600 to-transparent" />
              </div>

              {/* Products Grid */}
              <div
                className={`grid gap-8 justify-items-center ${
                  category.products.length === 1
                    ? "grid-cols-1 max-w-md"
                    : "grid-cols-1 md:grid-cols-2 lg:grid-cols-3"
                }`}
              >
                {category.products.map((product, index) => (
                  <ProductCard
                    key={product.id}
                    product={product}
                    index={index}
                  />
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* CTA Section - Enhanced */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="relative mt-16 py-10 px-2"
      >
        {/* Background Decoration */}
        <div className="absolute inset-0 bg-gradient-to-r from-emerald-900/50 via-emerald-800/30 to-emerald-900/50" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-48 md:w-[400px] md:h-[200px] bg-emerald-500/10 rounded-full blur-3xl" />

        <div className="relative z-10 text-center">
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="inline-flex items-center gap-2 px-4 py-2 mb-6 rounded-full bg-emerald-900/50 border border-emerald-700/50"
          >
            <span className="text-emerald-400 text-sm font-medium">
              Our Team
            </span>
          </motion.div>

          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Meet the People Behind Cadenza
          </h2>
          <p className="text-emerald-300 max-w-xl mx-auto mb-8">
            Our talented team of professionals is dedicated to bringing you the
            finest fragrances and skincare products
          </p>
          <Link
            to="/ourMembers"
            className="relative inline-block px-10 py-4 bg-gradient-to-r from-emerald-500 to-emerald-600 hover:from-emerald-400 hover:to-emerald-500 text-white text-lg font-semibold rounded-full transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl group"
          >
            <span className="relative z-10">Meet Our Team</span>
            {/* Glow Effect */}
            <div className="absolute inset-0 rounded-full bg-emerald-400 blur-lg opacity-0 group-hover:opacity-50 transition-opacity duration-300" />
          </Link>
        </div>
      </motion.div>
    </div>
  );
}
