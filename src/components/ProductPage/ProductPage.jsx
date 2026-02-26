import TiltedCard from "../body/TiltedCard";
import { motion } from "framer-motion";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import VerifiedIcon from "@mui/icons-material/Verified";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import SpaIcon from "@mui/icons-material/Spa";
import { Link } from "react-router-dom";

const iconMap = {
  verified: VerifiedIcon,
  shipping: LocalShippingIcon,
  spa: SpaIcon,
};

export default function ProductPage({ product }) {
  if (!product) {
    return (
      <div className="min-h-screen pt-20 flex items-center justify-center">
        <div className="text-white text-xl">Product not found</div>
      </div>
    );
  }

  const handleOrder = () => {
    const message = `مرحبا بك أريد ${product.name.toLowerCase()}`;
    window.location.href = `https://wa.me/201201449924?text=${encodeURIComponent(message)}`;
  };

  const FeatureIcon = ({ type }) => {
    const Icon = iconMap[type] || VerifiedIcon;
    return <Icon />;
  };

  return (
    <div className="min-h-screen pt-20">
      {/* Breadcrumb */}
      <div className="bg-emerald-900/50 py-3 px-4">
        <div className="max-w-7xl mx-auto text-emerald-300 text-sm">
          Home / Products / {product.category} /{" "}
          <span className="text-white">{product.name}</span>
        </div>
      </div>

      {/* Hero Section */}
      <div className="bg-gradient-to-br from-emerald-950 via-emerald-900 to-emerald-800 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Product Image */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="flex justify-center"
            >
              <div className="relative">
                <div className="absolute inset-0 bg-emerald-400/20 rounded-full blur-3xl"></div>
                <TiltedCard
                  imageSrc={product.image}
                  altText={product.name}
                  captionText="Premium Quality"
                  containerHeight="20rem"
                  containerWidth="20rem"
                  imageHeight="20rem"
                  imageWidth="20rem"
                  rotateAmplitude={15}
                  scaleOnHover={1.1}
                  showMobileWarning={false}
                  showTooltip={true}
                  displayOverlayContent={true}
                  overlayContent={
                    <p className="tilted-card-demo-text text-2xl font-bold text-emerald-950"></p>
                  }
                />
              </div>
            </motion.div>

            {/* Product Info */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <span className="inline-block bg-emerald-500/20 text-emerald-300 px-4 py-1 rounded-full text-sm font-medium mb-4">
                {product.category}
              </span>
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
                {product.name}
              </h1>

              <p className="text-xl text-emerald-100 mb-6">
                {product.description}
              </p>

              {/* Price - Clean design without discount */}
              {/* <div className="mb-6">
                <span className="text-4xl font-bold text-emerald-400">
                  {product.price} EGP
                </span>
              </div> */}

              {/* Features */}
              <div className="flex flex-wrap gap-4 mb-6">
                {product.features.map((feature, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-2 text-emerald-200"
                  >
                    <span className="text-emerald-400">
                      <FeatureIcon type={feature.icon} />
                    </span>
                    <span>{feature.key}</span>
                  </div>
                ))}
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4">
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={handleOrder}
                  className="flex items-center justify-center gap-2 bg-emerald-500 hover:bg-emerald-400 text-emerald-950 px-8 py-4 rounded-full font-bold text-lg transition-colors"
                >
                  <WhatsAppIcon />
                  Order via WhatsApp
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="border-2 border-emerald-500 text-emerald-400 hover:bg-emerald-500/20 px-8 py-4 rounded-full font-bold text-lg transition-colors"
                >
                  Add to Cart
                </motion.button>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Key Benefits */}
      <div className="bg-emerald-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-emerald-900 mb-12">
            Key Benefits
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {product.benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-xl shadow-lg p-6 border-l-4 border-emerald-500"
              >
                <div className="flex items-start gap-3">
                  <span className="text-emerald-500 text-2xl">✓</span>
                  <p className="text-gray-700 text-lg">{benefit}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* How to Use */}
      <div className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-emerald-900 mb-12">
            How to Use
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
            {product.howToUse.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.1 }}
                className="bg-gradient-to-br from-emerald-50 to-emerald-100 rounded-xl p-6 text-center"
              >
                <div className="w-12 h-12 bg-emerald-500 text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-3">
                  {index + 1}
                </div>
                <p className="text-emerald-900 font-medium">{step}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Ingredients Section */}
      <div className="bg-emerald-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-emerald-900 mb-12">
            Ingredients & Their Benefits
          </h2>

          {/* Standard Ingredients */}
          {product.ingredients && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {product.ingredients.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.05 }}
                  className="bg-white rounded-xl shadow-md p-6 flex items-start gap-4"
                >
                  <div className="w-3 h-3 bg-emerald-500 rounded-full mt-2"></div>
                  <div>
                    <h4 className="text-lg font-semibold text-emerald-900 mb-1">
                      {item.title}
                    </h4>
                    <p className="text-gray-600">{item.use}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          )}

          {/* Oil Phase (for Acne Cream) */}
          {product.oilPhase && (
            <div className="mb-12">
              <h3 className="text-2xl font-semibold text-emerald-700 mb-6">
                Oil Phase Ingredients
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {product.oilPhase.map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ delay: index * 0.05 }}
                    className="bg-white rounded-xl shadow-md p-6 flex items-start gap-4"
                  >
                    <div className="w-3 h-3 bg-emerald-500 rounded-full mt-2"></div>
                    <div>
                      <h4 className="text-lg font-semibold text-emerald-900 mb-1">
                        {item.title}
                      </h4>
                      <p className="text-gray-600">{item.use}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          )}

          {/* Water Phase (for Acne Cream) */}
          {product.waterPhase && (
            <div className="mb-12">
              <h3 className="text-2xl font-semibold text-emerald-700 mb-6">
                Water Phase
              </h3>
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                className="bg-white rounded-xl shadow-md p-6 flex items-start gap-4"
              >
                <div className="w-3 h-3 bg-emerald-500 rounded-full mt-2"></div>
                <div>
                  <h4 className="text-lg font-semibold text-emerald-900 mb-1">
                    {product.waterPhase.title}
                  </h4>
                  <p className="text-gray-600">{product.waterPhase.use}</p>
                </div>
              </motion.div>
            </div>
          )}

          {/* Cool Phase (for Acne Cream) */}
          {product.coolPhase && (
            <div>
              <h3 className="text-2xl font-semibold text-emerald-700 mb-6">
                Cool Phase Ingredients
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {product.coolPhase.map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ delay: index * 0.05 }}
                    className="bg-white rounded-xl shadow-md p-6 flex items-start gap-4"
                  >
                    <div className="w-3 h-3 bg-emerald-500 rounded-full mt-2"></div>
                    <div>
                      <h4 className="text-lg font-semibold text-emerald-900 mb-1">
                        {item.title}
                      </h4>
                      <p className="text-gray-600">{item.use}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Call to Action */}
      <div className="bg-emerald-900 py-16">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Ready to Experience Luxury?
          </h2>
          <p className="text-xl text-emerald-200 mb-8">
            Order now and discover the amazing benefits of {product.name}.
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={handleOrder}
            className="bg-emerald-500 hover:bg-emerald-400 text-emerald-950 px-12 py-4 rounded-full font-bold text-xl transition-colors"
          >
            Order Now
          </motion.button>
        </div>
      </div>
    </div>
  );
}
