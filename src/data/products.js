import { IMAGE_PATHS, PRICES } from "../config/constants";

export const products = [
  {
    id: "vanilla",
    name: "Vanilla",
    slug: "vanilla",
    category: "Body Splash",
    categorySlug: "body-splash",
    image: IMAGE_PATHS.VANILLA,
    price: PRICES.vanilla,
    originalPrice: 399,
    discount: 25,
    description:
      "Experience the warmth and elegance of our premium Vanilla Body Splash. A luxurious fragrance that lasts all day.",
    shortDescription: "Warm and elegant vanilla scent",
    benefits: [
      "Refreshing vanilla scent",
      "Long-lasting fragrance",
      "Alcohol-based for quick drying",
      "Perfect for daily use",
      "Elegant and sophisticated aroma",
    ],
    howToUse: [
      "Shake well before use",
      "Spray onto clean, dry skin",
      "Apply to pulse points",
      "Use as desired",
      "Store in cool place",
    ],
    ingredients: [
      { title: "Distilled Water", use: "The main base of the formula." },
      {
        title: "Ethyl Alcohol (96%)",
        use: "Acts as a solvent for the fragrance, provides a refreshing cooling effect.",
      },
      {
        title: "Cremophor",
        use: "Works as a solubilizer that helps blend the fragrance with water.",
      },
      { title: "Fragrance", use: "The main scent component: Vanilla" },
    ],
    features: [
      { key: "100% Authentic", icon: "verified" },
      { key: "Fast Delivery", icon: "shipping" },
      { key: "Natural Ingredients", icon: "spa" },
    ],
    reviews: 125,
  },
  {
    id: "baccaraat",
    name: "Baccarat Rouge",
    slug: "baccaraat",
    category: "Body Splash",
    categorySlug: "body-splash",
    image: IMAGE_PATHS.BACCARAAT,
    price: PRICES.baccaraat,
    originalPrice: 449,
    discount: 22,
    description:
      "Experience the luxurious elegance of our Baccarat Rouge Body Splash. A sophisticated fragrance perfect for special occasions.",
    shortDescription: "Luxurious and sophisticated fragrance",
    benefits: [
      "Luxurious Baccarat Rouge scent",
      "Long-lasting fragrance",
      "Alcohol-based for quick drying",
      "Perfect for special occasions",
      "Sophisticated and elegant aroma",
    ],
    howToUse: [
      "Shake well before use",
      "Spray onto clean, dry skin",
      "Apply to pulse points",
      "Use as desired",
      "Store in cool place",
    ],
    ingredients: [
      { title: "Distilled Water", use: "The main base of the formula." },
      {
        title: "Ethyl Alcohol (96%)",
        use: "Acts as a solvent for the fragrance, provides a refreshing cooling effect.",
      },
      {
        title: "Cremophor",
        use: "Works as a solubilizer that helps blend the fragrance with water.",
      },
      { title: "Fragrance", use: "The main scent component: Baccarat Rouge" },
    ],
    features: [
      { key: "100% Authentic", icon: "verified" },
      { key: "Fast Delivery", icon: "shipping" },
      { key: "Natural Ingredients", icon: "spa" },
    ],
    reviews: 98,
  },
  {
    id: "monosparkle",
    name: "Mono Sparkle",
    slug: "monosparkle",
    category: "Body Splash",
    categorySlug: "body-splash",
    image: IMAGE_PATHS.MONOSPARKLE,
    price: PRICES.monosparkle,
    originalPrice: 429,
    discount: 23,
    description:
      "Experience the vibrant elegance of our Mono Sparkle Body Splash. A refreshing fragrance that shines all day long.",
    shortDescription: "Sparkling and vibrant aroma",
    benefits: [
      "Sparkling Mono scent",
      "Long-lasting fragrance",
      "Alcohol-based for quick drying",
      "Perfect for everyday elegance",
      "Refreshing and vibrant aroma",
    ],
    howToUse: [
      "Shake well before use",
      "Spray onto clean, dry skin",
      "Apply to pulse points",
      "Use as desired",
      "Store in cool place",
    ],
    ingredients: [
      { title: "Distilled Water", use: "The main base of the formula." },
      {
        title: "Ethyl Alcohol (96%)",
        use: "Acts as a solvent for the fragrance, provides a refreshing cooling effect.",
      },
      {
        title: "Cremophor",
        use: "Works as a solubilizer that helps blend the fragrance with water.",
      },
      { title: "Fragrance", use: "The main scent component: Mono Sparkle" },
    ],
    features: [
      { key: "100% Authentic", icon: "verified" },
      { key: "Fast Delivery", icon: "shipping" },
      { key: "Natural Ingredients", icon: "spa" },
    ],
    reviews: 87,
  },
  {
    id: "deodorant",
    name: "Natural Deodorant",
    slug: "deodorant",
    category: "Deodorant",
    categorySlug: "deodorant",
    image: IMAGE_PATHS.DEODORANT,
    price: PRICES.deodorant,
    originalPrice: 349,
    discount: 29,
    description:
      "A natural deodorant that protects against unpleasant odor while moisturizing the skin and leaving a refreshing feel throughout the day.",
    shortDescription: "All-day freshness & protection",
    benefits: [
      "Natural odor protection",
      "Moisturizes and softens skin",
      "Long-lasting freshness",
      "Antibacterial properties",
      "Absorbs sweat effectively",
    ],
    howToUse: [
      "Apply to clean, dry underarms",
      "Use a small amount and spread evenly",
      "Allow to absorb for a few minutes",
      "Use daily or as needed",
      "Store in a cool, dry place",
    ],
    ingredients: [
      {
        title: "Bees Wax",
        use: "Provides structure and allows smooth application.",
      },
      {
        title: "Coconut Butter",
        use: "Moisturizes the skin and keeps it soft.",
      },
      { title: "Coconut Oil", use: "Moisturizes the skin and keeps it soft." },
      { title: "Jojoba Oil", use: "Lightweight and effective hydration." },
      {
        title: "Rose Oil",
        use: "Natural fragrance, antioxidant, and helps even skin tone.",
      },
      {
        title: "Zinc Oxide",
        use: "Prevents odor by inhibiting bacterial growth and absorbs moisture.",
      },
      {
        title: "Kaolin Clay",
        use: "Absorbs sweat and gives a dry, fresh feel.",
      },
      { title: "Corn Starch", use: "Absorbs excess sweat." },
      { title: "Phenoxyethanol", use: "Preservative." },
      { title: "Vitamin E", use: "Antioxidant that protects the skin." },
      {
        title: "Peppermint Essential Oil",
        use: "Cooling effect, refreshing scent, and antibacterial properties.",
      },
      {
        title: "Tea Tree Essential Oil",
        use: "Cooling effect, refreshing scent, and antibacterial properties.",
      },
    ],
    features: [
      { key: "100% Natural", icon: "verified" },
      { key: "Fast Delivery", icon: "shipping" },
      { key: "Cruelty Free", icon: "spa" },
    ],
    reviews: 156,
  },
  {
    id: "acneCream",
    name: "Acne Cream",
    slug: "acneCream",
    category: "Skincare",
    categorySlug: "skincare",
    image: IMAGE_PATHS.ACNE_CREAM,
    price: PRICES.acneCream,
    originalPrice: 299,
    discount: 33,
    description:
      "Advanced formula designed to combat acne, reduce inflammation, and promote clear, healthy skin.",
    shortDescription: "Clear skin solution",
    benefits: [
      "Reduces acne and blemishes",
      "Soothes irritated skin",
      "Strengthens skin barrier",
      "Provides antioxidant protection",
      "Non-comedogenic formula",
    ],
    howToUse: [
      "Cleanse your face thoroughly",
      "Apply a small amount to affected areas",
      "Massage gently until absorbed",
      "Use twice daily",
      "Follow with sunscreen",
    ],
    oilPhase: [
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
    ],
    coolPhase: [
      {
        title: "Niacinamide",
        use: "Strengthens the skin barrier and increases natural ceramide production.",
      },
      {
        title: "Ginkgo biloba extract",
        use: "Antioxidant that protects the skin from oxidative stress.",
      },
      { title: "Salicylic acid", use: "Cleanses pores and treats acne." },
      { title: "Citric acid", use: "Adjusts the skin's pH." },
      {
        title: "Phenoxyethanol",
        use: "Preservative that maintains the stability of the cream.",
      },
    ],
    waterPhase: {
      title: "Distilled Water",
      use: "The main base of the formula, providing hydration and serving as a solvent for water-soluble ingredients.",
    },
    features: [
      { key: "Dermatologist Tested", icon: "verified" },
      { key: "Fast Delivery", icon: "shipping" },
      { key: "Natural Ingredients", icon: "spa" },
    ],
    reviews: 203,
  },
];

export const getProductById = (id) => products.find((p) => p.id === id);
export const getProductBySlug = (slug) => products.find((p) => p.slug === slug);
export const getProductsByCategory = (categorySlug) =>
  products.filter((p) => p.categorySlug === categorySlug);

export const categories = [
  {
    slug: "body-splash",
    name: "Body Splash",
    products: products.filter((p) => p.categorySlug === "body-splash"),
  },
  {
    slug: "deodorant",
    name: "Deodorant",
    products: products.filter((p) => p.categorySlug === "deodorant"),
  },
  {
    slug: "skincare",
    name: "Skincare",
    products: products.filter((p) => p.categorySlug === "skincare"),
  },
];
