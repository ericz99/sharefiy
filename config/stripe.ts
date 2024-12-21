export const PRICES = {
  free_plan: "price_1QV0MYLJBP9aw4ufmHeo7wtI",
  pro_plan: "price_1QV0MpLJBP9aw4ufSkM8tqlR",
};

export const SEED_PLANS = [
  {
    name: "Free Plan",
    id: "prod_RNluOeL17QvFCV",
    image: "https://placehold.co/600x400",
    description: "A free plan for curious users that wants to try our product.",
    active: true,
    metadata: {
      features: ["Advanced AI Model", "Limited features..."],
    },
    price: {
      id: "price_1QV0MYLJBP9aw4ufmHeo7wtI",
      active: true,
      unitAmount: 0,
      currency: "USD",
    },
  },

  {
    name: "Pro Plan",
    id: "prod_RNlu8M7iKAxnWq",
    image: "https://placehold.co/600x400",
    description:
      "A pro plan is ideal for candidate that need to prepare up to 8 interview session.",
    active: true,
    metadata: {
      features: [
        "250 credit / 1 month",
        "Advanced AI Model",
        "Unlimited Document Upload",
        "Unlimited Job Application Creator",
        "More features...",
      ],
    },
    price: {
      id: "price_1QV0MpLJBP9aw4ufSkM8tqlR",
      intervalCount: 1,
      active: true,
      unitAmount: 59.99,
      currency: "USD",
    },
  },
];

export const PLANS = [
  {
    name: "Free",
    slug: "free",
    price: {
      amount: 0,
      priceIds: {
        test: "price_1QV0MYLJBP9aw4ufmHeo7wtI",
        production: "",
      },
    },
  },
  {
    name: "Pro Plan",
    slug: "pro",
    price: {
      amount: 19,
      priceIds: {
        test: "price_1QV0MpLJBP9aw4ufSkM8tqlR",
        production: "",
      },
    },
  },
];
