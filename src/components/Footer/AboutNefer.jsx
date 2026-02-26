import { motion } from "framer-motion";

export default function AboutNefer() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-950 to-emerald-900 text-emerald-100 pt-20 w-full overflow-x-hidden">
      {/* Hero Section */}
      <div className="py-16 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <img
            src="./images/logo.png"
            alt="CADENZA Logo"
            className="w-40 h-40 mx-auto rounded-full border-4 border-emerald-400 shadow-lg"
          />
          <h1 className="text-5xl font-bold mt-6 text-emerald-400">CADENZA</h1>
          <p className="text-xl mt-2 text-emerald-200 italic">
            "Everyone deserves its own Cadenza - a moment to shine"
          </p>
        </motion.div>
      </div>

      {/* Decorative element */}
      <div className="flex justify-center my-8">
        <div className="w-64 h-1 bg-gradient-to-r from-transparent via-emerald-400 to-transparent"></div>
      </div>

      {/* Story Section */}
      <div className="max-w-4xl mx-auto px-4 py-12">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="bg-emerald-800/50 rounded-2xl p-8 shadow-xl border border-emerald-700"
        >
          <h2 className="text-3xl font-bold mb-6 text-emerald-400 text-center">
            Our Story
          </h2>
          <p className="text-lg leading-relaxed text-emerald-100">
            CADENZA was born from a passion for creating unique fragrances and
            natural skincare products that make everyone feel special. Like a
            musical cadenza - a moment of artistic expression - we believe every
            person deserves their own moment to shine.
          </p>
          <p className="text-lg leading-relaxed text-emerald-100 mt-4">
            Our journey began with a simple mission: to craft luxurious scents
            and effective natural care products that inspire confidence and
            elegance. From our workshop in Al Minya, Egypt, we bring you
            carefully formulated products made with love and precision.
          </p>
        </motion.div>
      </div>

      {/* Values Section */}
      <div className="max-w-4xl mx-auto px-4 py-12">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="grid md:grid-cols-3 gap-6"
        >
          {/* Quality Ingredients */}
          <div className="bg-emerald-800/50 rounded-xl p-6 text-center border border-emerald-700 hover:border-emerald-400 transition-colors">
            <div className="text-4xl mb-4">✨</div>
            <h3 className="text-xl font-bold mb-2 text-emerald-400">
              Premium Quality
            </h3>
            <p className="text-emerald-200">
              Only the finest ingredients go into every product we create.
            </p>
          </div>

          {/* Natural Formula */}
          <div className="bg-emerald-800/50 rounded-xl p-6 text-center border border-emerald-700 hover:border-emerald-400 transition-colors">
            <div className="text-4xl mb-4">🌿</div>
            <h3 className="text-xl font-bold mb-2 text-emerald-400">
              Natural Formula
            </h3>
            <p className="text-emerald-200">
              Gentle, effective formulas made with natural ingredients.
            </p>
          </div>

          {/* Craftsmanship */}
          <div className="bg-emerald-800/50 rounded-xl p-6 text-center border border-emerald-700 hover:border-emerald-400 transition-colors">
            <div className="text-4xl mb-4">🎨</div>
            <h3 className="text-xl font-bold mb-2 text-emerald-400">
              Craftsmanship
            </h3>
            <p className="text-emerald-200">
              Every product is carefully crafted with attention to detail.
            </p>
          </div>
        </motion.div>
      </div>

      {/* Products Section */}
      <div className="max-w-4xl mx-auto px-4 py-12">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.7, duration: 0.8 }}
          className="bg-emerald-800/50 rounded-2xl p-8 shadow-xl border border-emerald-700"
        >
          <h2 className="text-3xl font-bold mb-6 text-emerald-400 text-center">
            Our Products
          </h2>
          <p className="text-lg leading-relaxed text-emerald-100">
            From luxurious body splashes with captivating fragrances to natural
            deodorants and effective acne treatments, CADENZA offers a range of
            products designed to make you feel confident and beautiful.
          </p>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mt-6">
            {[
              "Vanilla",
              "Baccaraat Rouge",
              "Mono Sparkle",
              "Natural Deodorant",
              "Acne Cream",
            ].map((product) => (
              <div
                key={product}
                className="bg-emerald-900/50 rounded-lg p-3 text-center text-emerald-200"
              >
                {product}
              </div>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Decorative element */}
      <div className="flex justify-center py-8">
        <div className="text-emerald-400 text-2xl">✦ ✦ ✦ ✦ ✦ ✦ ✦</div>
      </div>
    </div>
  );
}
