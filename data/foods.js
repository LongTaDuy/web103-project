// List of Vietnamese meals for college students.
// Each food has the same set of attributes (a "shared schema").

const foods = [
  {
    id: "banh-mi",
    name: "Banh Mi",
    image: "/images/banh-mi.jpg",
    price: "$3",
    difficulty: "Easy",
    description:
      "A crusty Vietnamese sandwich filled with protein, pickled veggies, and fresh herbs. Quick, cheap, and filling.",
    ingredients: [
      "Baguette",
      "Mayonnaise or pate",
      "Cold cuts, grilled pork, or fried egg",
      "Pickled carrots and daikon",
      "Cucumber, cilantro, jalapeno"
    ],
    prepTime: "15 minutes",
    studentTip:
      "A fried-egg banh mi costs almost nothing and takes 5 minutes to make in a dorm."
  },
  {
    id: "pho",
    name: "Pho",
    image: "/images/pho.jpg",
    price: "$5",
    difficulty: "Medium",
    description:
      "A warm bowl of rice noodles in a savory broth, topped with herbs and lime. Comfort food after a long study day.",
    ingredients: [
      "Rice noodles",
      "Beef or chicken",
      "Onion and ginger",
      "Star anise and cinnamon",
      "Cilantro, green onion, lime"
    ],
    prepTime: "45 minutes",
    studentTip:
      "Use store-bought broth and rotisserie chicken to make a quick version on a budget."
  },
  {
    id: "com-tam",
    name: "Com Tam",
    image: "/images/com-tam.png",
    price: "$5",
    difficulty: "Medium",
    description:
      "Grilled marinated pork over rice with a fried egg. A hearty plate that keeps you full through classes.",
    ingredients: [
      "Rice",
      "Pork chops",
      "Garlic, sugar, fish sauce",
      "Fried egg",
      "Cucumber and tomato"
    ],
    prepTime: "30 minutes",
    studentTip:
      "Marinate a batch of pork and freeze it, then pan-fry one piece whenever you need dinner."
  },
  {
    id: "goi-cuon",
    name: "Goi Cuon",
    image: "/images/goi-cuon.jpg",
    price: "$4",
    difficulty: "Easy",
    description:
      "Fresh spring rolls packed with shrimp, noodles, and herbs. No cooking required and very refreshing.",
    ingredients: [
      "Rice paper",
      "Shrimp or tofu",
      "Vermicelli noodles",
      "Lettuce and mint",
      "Peanut hoisin dipping sauce"
    ],
    prepTime: "20 minutes",
    studentTip:
      "No stove needed. Just dip the rice paper in warm water and roll. Great for hot days."
  },
  {
    id: "mi-xao",
    name: "Mi Xao",
    image: "/images/mi-xao.jpg",
    price: "$4",
    difficulty: "Easy",
    description:
      "Stir-fried noodles with veggies and a simple savory sauce. Fast, cheap, and easy to customize.",
    ingredients: [
      "Egg noodles",
      "Mixed vegetables",
      "Soy sauce and oyster sauce",
      "Garlic",
      "Chicken, shrimp, or tofu"
    ],
    prepTime: "20 minutes",
    studentTip:
      "Use whatever veggies are about to go bad in your fridge. Almost anything works."
  }
];

module.exports = foods;
