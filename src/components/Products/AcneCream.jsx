import TiltedCard from "../body/TiltedCard";

export default function AcneCream() {
  const OilPhase = [
    {
      title: "Crodafos",
      use: "Base of the cream, provides a smooth and stable texture.",
    },
    {
      title: "GMS",
      use: "Base of the cream, provides a smooth and stable texture.",
    },
    {
      title: "Cetostearyl alcohol",
      use: "Base of the cream, provides a smooth and stable texture.",
    },
    {
      title: "Cremophore",
      use: "Base of the cream, provides a smooth and stable texture.",
    },
    { title: "Tea tree oil", use: "Antibacterial and soothes inflammation." },
    {
      title: "Vitamin E",
      use: "Antioxidant that protects and nourishes the skin.",
    },
  ];

  const CoolPhase = [
    {
      title: "Niacinamide",
      use: "Strengthens the skin barrier and increases natural ceramide production.",
    },
    {
      title: "Ginkgo biloba extract",
      use: "Antioxidant that protects the skin from oxidative stress.",
    },
    {
      title: "Salicylic acid",
      use: "Cleanses pores and treats acne.",
    },
    {
      title: "Citric acid",
      use: "Adjusts the skin's pH.",
    },
    {
      title: "Phenoxyethanol",
      use: "Preservative that maintains the stability of the cream.",
    },
  ];

  const benefits = [
    "Reduces acne and blemishes",
    "Soothes irritated skin",
    "Strengthens skin barrier",
    "Provides antioxidant protection",
    "Non-comedogenic formula",
  ];

  const howToUse = [
    "Cleanse your face thoroughly",
    "Apply a small amount to affected areas",
    "Massage gently until absorbed",
    "Use twice daily, morning and evening",
    "Follow with sunscreen during the day",
  ];

  return (
    <>
      {/* Hero Section */}
      <div className="bg text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-4">Acne Cream</h1>
            <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
              Advanced formula designed to combat acne, reduce inflammation, and
              promote clear, healthy skin.
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
                imageSrc="./images/Acne-cream-circular.png"
                altText="Acne Cream Product"
                captionText="Acne Treatment Cream"
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
                    Acne Cream
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

          {/* Oil Phase */}
          <div className="mb-12">
            <h3 className="text-2xl font-semibold text-emerald-800 mb-6">
              Oil Phase Ingredients
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {OilPhase.map((item, index) => (
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

          {/* Water Phase */}
          <div className="mb-12">
            <h3 className="text-2xl font-semibold text-emerald-800 mb-6">
              Water Phase
            </h3>
            <div className="bg-white rounded-lg shadow-md p-6">
              <h4 className="text-lg font-semibold text-emerald-900 mb-2">
                Distilled Water
              </h4>
              <p className="text-gray-600">
                The main base of the formula, providing hydration and serving as
                a solvent for water-soluble ingredients.
              </p>
            </div>
          </div>

          {/* Cool Phase */}
          <div>
            <h3 className="text-2xl font-semibold text-emerald-800 mb-6">
              Cool Phase Ingredients
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {CoolPhase.map((item, index) => (
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
        </div>

        {/* Call to Action */}
        <div className="bg-emerald-900/90 text-white py-10 mb-6">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold mb-4">
              Ready to Transform Your Skin?
            </h2>
            <p className="text-xl mb-8">
              Experience the power of our advanced acne treatment formula.
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
