import TiltedCard from "../body/TiltedCard";

export default function Deodorant() {
  const items = [
    {
      title: "Bees Wax",
      use: "Provides structure and allows smooth application.",
    },
    {
      title: "Coconut Butter",
      use: "Moisturizes the skin and keeps it soft",
    },
    {
      title: "Coconut Oil",
      use: "Moisturizes the skin and keeps it soft",
    },
    {
      title: "Jojoba Oil",
      use: "Lightweight and effective hydration.",
    },
    {
      title: "Rose Oil",
      use: "Natural fragrance, antioxidant, and helps even skin tone with long-term use ",
    },
    {
      title: "Zinc Oxide",
      use: "Prevents odor by inhibiting bacterial growth and absorbs moisture. ",
    },
    {
      title: "Kaolin Clay",
      use: "Absorbs sweat and gives a dry, fresh feel. ",
    },
    {
      title: "Corn Starch ",
      use: " Absorbs excess sweat. ",
    },
    {
      title: "Phenoxyethanol",
      use: "Preservative.",
    },
    { title: "Vitamin E", use: "Antioxidant that protects the skin. " },
    {
      title: "Peppermint Essential Oil",
      use: "Cooling effect, refreshing scent, and antibacterial properties. ",
    },
    {
      title: "Tea Tree Essential Oil",
      use: "Cooling effect, refreshing scent, and antibacterial properties. ",
    },
  ];

  const benefits = [
    "Natural odor protection",
    "Moisturizes and softens skin",
    "Long-lasting freshness",
    "Antibacterial properties",
    "Absorbs sweat effectively",
  ];

  const howToUse = [
    "Apply to clean, dry underarms",
    "Use a small amount and spread evenly",
    "Allow to absorb for a few minutes",
    "Use daily or as needed",
    "Store in a cool, dry place",
  ];

  return (
    <>
      {/* Hero Section */}
      <div className=" text-white py-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-4">
              Deodorant Stick
            </h1>
            <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
              A natural deodorant that protects against unpleasant odor while
              moisturizing the skin and leaving a refreshing feel throughout the
              day.
            </p>
          </div>
        </div>
      </div>
      <div className="min-h-screen bg-gradient-to-br from-emerald-50 to-white">
        {/* Product Image and Overview */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
            <div className="flex justify-center">
              <TiltedCard
                imageSrc="./images/deodorant.png"
                altText="Deodorant Stick Product"
                captionText="Natural Deodorant"
                containerHeight="16rem"
                containerWidth="16rem"
                imageHeight="16rem"
                imageWidth="16rem"
                rotateAmplitude={12}
                scaleOnHover={1.2}
                showMobileWarning={false}
                showTooltip={true}
                displayOverlayContent={true}
                overlayContent={
                  <p className="tilted-card-demo-text text-2xl font-bold p-2 text-white">
                    Deodorant
                  </p>
                }
              />
            </div>
            <div>
              <h2 className="text-3xl font-bold text-emerald-900 mb-6">
                Key Benefits
              </h2>
              <ul className="space-y-3">
                {benefits.map((benefit, index) => (
                  <li key={index} className="flex items-start">
                    <span className="text-emerald-600 mr-3">✓</span>
                    <span className="text-lg text-gray-700">{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* How to Use */}
        <div className="bg-emerald-50 py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-center text-emerald-900 mb-12">
              How to Use
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {howToUse.map((step, index) => (
                <div key={index} className="bg-white rounded-lg shadow-md p-6">
                  <div className="text-2xl font-bold text-emerald-600 mb-3">
                    {index + 1}
                  </div>
                  <p className="text-gray-700">{step}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Ingredients Section */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <h2 className="text-3xl font-bold text-center text-emerald-900 mb-12">
            Ingredients & Their Benefits
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {items.map((item, index) => (
              <div
                key={index}
                className="bg-white rounded-lg shadow-md p-6 border-l-4 border-emerald-500"
              >
                <h4 className="text-lg font-semibold text-emerald-900 mb-2">
                  {item.title}
                </h4>
                <p className="text-gray-600">{item.use}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="bg-emerald-900 text-white py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold mb-4">Stay Fresh Naturally</h2>
            <p className="text-xl mb-8">
              Experience the power of our natural deodorant formula for all-day
              protection.
            </p>
            <button className="bg-white text-emerald-900 px-8 py-3 rounded-full font-semibold hover:bg-emerald-100 transition duration-300">
              Shop Now
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
