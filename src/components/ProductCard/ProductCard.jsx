import TiltedCard from "../body/TiltedCard";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import AutoAwesomeIcon from "@mui/icons-material/AutoAwesome";

export default function ProductCard({ product, index = 0 }) {
  return (
    <Link to={`/${product.id}`}>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: index * 0.1 }}
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        className="group"
      >
        <div className="relative bg-gradient-to-br from-emerald-800/40 to-emerald-900/60 rounded-3xl p-6 backdrop-blur-sm border border-emerald-600/30 hover:border-emerald-400/50 transition-all duration-300 shadow-xl hover:shadow-2xl">
          {/* Card Header with Badge */}
          <div className="absolute -top-3 -right-3 z-10">
            <span className="bg-gradient-to-r from-emerald-500 to-emerald-600 text-white text-xs font-bold px-3 py-1 rounded-full shadow-lg">
              {product.category}
            </span>
          </div>

          {/* Product Image */}
          <div className="flex justify-center mb-4">
            <div className="relative">
              <div className="absolute inset-0 bg-emerald-400/10 rounded-full blur-2xl"></div>
              <TiltedCard
                imageSrc={product.image}
                altText={product.name}
                captionText={product.category}
                containerHeight="16rem"
                containerWidth="16rem"
                imageHeight="16rem"
                imageWidth="16rem"
                rotateAmplitude={12}
                scaleOnHover={1.1}
                showMobileWarning={false}
                showTooltip={true}
                displayOverlayContent={true}
                overlayContent={
                  <p className="tilted-card-demo-text text-xl font-bold text-emerald-950">
                    <AutoAwesomeIcon className="mr-1" />
                    View
                  </p>
                }
              />
            </div>
          </div>

          {/* Product Info - Clean Design */}
          <div className="text-center">
            <h3 className="text-xl font-bold text-white mb-2 group-hover:text-emerald-300 transition-colors">
              {product.name}
            </h3>
            <p className="text-emerald-300/80 text-sm mb-6 line-clamp-2">
              {product.shortDescription}
            </p>

            {/* View Button */}
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="w-full py-3 px-6 bg-gradient-to-r from-emerald-600 to-emerald-700 hover:from-emerald-500 hover:to-emerald-600 text-white font-semibold rounded-xl transition-all shadow-lg hover:shadow-emerald-500/30"
            >
              View Details
            </motion.button>
          </div>
        </div>
      </motion.div>
    </Link>
  );
}
