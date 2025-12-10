import TiltedCard from "../body/TiltedCard";

export default function Baccaraat() {
  const items = [
    { title: "Distilled Water ", use: "The main base of the formula." },
    {
      title: "Ethyl Alcohol (96%) ",
      use: "Acts as a solvent for the fragrance, provides a refreshing cooling effect, and offers mild preservation.",
    },
    {
      title: "Cremophor ",
      use: "Works as a solubilizer that helps blend the fragrance with water and prevents separation.",
    },
    { title: "Fragrance ", use: "The main scent component : Baccarat Rouge " },
  ];

  const benefits = [
    "Luxurious Baccarat Rouge scent",
    "Long-lasting fragrance",
    "Alcohol-based for quick drying",
    "Perfect for special occasions",
    "Sophisticated and elegant aroma",
  ];

  const howToUse = [
    "Shake well before use",
    "Spray onto clean, dry skin",
    "Apply to pulse points for best results",
    "Use as desired throughout the day",
    "Store in a cool, dry place",
  ];

  return (
    <>
      {/* Hero Section */}
      <div className=" text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-4">
              Baccarat Rouge
            </h1>
            <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
              Experience the warmth and elegance of our Baccarat Rouge Body
              Splash. Perfect for any occasion!
            </p>
          </div>
        </div>
      </div>
      <div className="min-h-screen bg-gradient-to-br from-emerald-50 to-white">
        {/* Product Image and Overview */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="flex justify-center">
              <TiltedCard
                imageSrc="./images/Baccaraat-rouge-mockups.jpg"
                altText="Baccarat Rouge Body Splash Product"
                captionText="Body Splash"
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
                    Baccaraat
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
            <h2 className="text-3xl font-bold mb-4">
              Ready to Experience Luxury?
            </h2>
            <p className="text-xl mb-8">
              Indulge in the sophisticated elegance of our Baccarat Rouge Body
              Splash.
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
