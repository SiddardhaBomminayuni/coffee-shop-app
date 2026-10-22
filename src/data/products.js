import caffeMocha from "../assets/images/caffe-mocha.jpg";
import caffeMochaLarge from "../assets/images/caffe-mocha-large.jpg";
import flatWhite from "../assets/images/flat-white.jpg";
import caffeLatte from "../assets/images/caffe-latte.jpg";
import americano from "../assets/images/americano.jpg";

export const categories = ["All Coffee", "Machiato", "Latte", "Americano"];

export const sizes = ["S", "M", "L"];

export const products = [
  {
    id: "caffe-mocha",
    name: "Caffe Mocha",
    type: "Deep Foam",
    serve: "Ice/Hot",
    category: "Machiato",
    price: 4.53,
    rating: 4.8,
    reviews: 230,
    image: caffeMocha,
    cover: caffeMochaLarge,
    description:
      "A cappuccino is an approximately 150 ml (5 oz) beverage, with 25 ml of espresso coffee and 85ml of fresh milk the foam on top keeps it rich, smooth and warm till the last sip.",
  },
  {
    id: "flat-white",
    name: "Flat White",
    type: "Espresso",
    serve: "Ice/Hot",
    category: "Latte",
    price: 3.53,
    rating: 4.8,
    reviews: 186,
    image: flatWhite,
    cover: flatWhite,
    description:
      "A flat white is a double shot of espresso topped with a thin layer of velvety steamed milk, giving a stronger coffee taste than a latte with a silky finish.",
  },
  {
    id: "caffe-latte",
    name: "Caffe Latte",
    type: "Steamed Milk",
    serve: "Ice/Hot",
    category: "Latte",
    price: 4.2,
    rating: 4.8,
    reviews: 142,
    image: caffeLatte,
    cover: caffeLatte,
    description:
      "A caffe latte is made with a shot of espresso and plenty of steamed milk, finished with a light layer of foam for a mild and creamy cup.",
  },
  {
    id: "americano",
    name: "Americano",
    type: "Dark Roast",
    serve: "Ice/Hot",
    category: "Americano",
    price: 3.1,
    rating: 4.8,
    reviews: 98,
    image: americano,
    cover: americano,
    description:
      "An americano is espresso diluted with hot water, keeping the bold flavour of the beans while giving a longer and smoother drink.",
  },
];

export const getProduct = (id) => products.find((item) => item.id === id);

// matches the design: "$ 4.53", "$ 2.0"
export const formatPrice = (value) => {
  const rounded = Math.round(value * 100) / 100;
  return `$ ${Number.isInteger(rounded) ? rounded.toFixed(1) : rounded}`;
};
