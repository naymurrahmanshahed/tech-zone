import { Link } from "react-router-dom";
import { currencyFormatter } from "../utilities/currencyFormatter";

const data = [
  {
    id: 1,
    name: "Blink Mini – Compact indoor plug-in smart security camera",
    description:
      "Monitor the inside of your home day and night with our 1080P HD indoor plug-in smart security camera",
    price: 64.99,
    image:
      "https://res.cloudinary.com/dy28teazb/image/upload/v1668172648/React%20Shopping/Products/81-585-013-01_a04wkd.jpg",
    category: "Camera",
  },
  {
    id: 2,
    name: "Vlogging Camera, 4K Digital Camera for YouTube with WiFi",
    description:
      "It's super suitable for the 'happy snapper' who just hope to point and shoot to take good quality images",
    price: 109.99,
    image:
      "https://res.cloudinary.com/dy28teazb/image/upload/v1668172649/React%20Shopping/Products/81pgsjFGpmL_qundpd.jpg",
    category: "Camera",
  },
];
const Cart = () => {
  return (
    <div className="cart-section container mx-auto py-10 px-10">
      <h2 className="section-title uppercase font-bold space-font  text-2xl mt-10 mb-10 text-center tracking-wider ">
        Your Cart
      </h2>
      <div className="cart-container">
        <div className="product-headline grid grid-cols-5 gap-10 border-b uppercase font-medium">
          <div className="col-product col-span-2">Product</div>
          <div className="col-unit-price">Unit Price</div>
          <div className="col-quantity">Quantity</div>
          <div className="col-total-price text-end">Total Price</div>
        </div>
        <div className="products flex flex-col">
          {data.map((product) => (
            <div
              key={product.id}
              className="product grid grid-cols-5 gap-10  mt-5 border-b pb-5"
            >
              <div className="product-left col-span-2 flex gap-5">
                <img
                  src={product.image}
                  alt={product.name}
                  className="h-32 w-32 object-cover"
                />
                <div className="product-details flex flex-col items-start gap-3">
                  <span> {product.name}</span>
                  <button className="uppercase text-gray-400 hover:text-rose-400">
                    Remove
                  </button>
                </div>
              </div>
              <div className="unit-price">
                {currencyFormatter(product.price)}
              </div>
              <div className="counter flex">
                <button className="h-10 w-10 bg-gray-100 border border-gray-300 active:bg-gray-700 active:text-gray-50">
                  -
                </button>
                <span className="h-10 w-10 bg-gray-100 flex justify-center items-center border border-gray-300">
                  1
                </span>
                <button className="h-10 w-10 bg-gray-100 border border-gray-300 active:bg-gray-700 active:text-gray-50">
                  +
                </button>
              </div>
              <div className="total-price">
                <div className="total-price text-end">
                  {currencyFormatter(product.price)}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="cart-lower flex justify-between items-start py-10">
        <button className="clear-btn uppercase border py-3 px-8 hover:bg-rose-200 hover:text-rose-600 font-medium duration-300 hover: border-rose-200">
          Clear Cart
        </button>
        <div className="flex flex-col items-start gap-2">
          <div className="top flex justify-between w-full text-2xl font-medium ">
            <span className="text-sky-500">Subtotal</span>
            <span className="text-rose-500">200$</span>
          </div>
          <p className="text-gray-400">
            Taxes and shipping costs are calculated at the checkout
          </p>
          <button className="checkout bg-sky-500 py-3 uppercase font-medium text-sky-50 tracking-widest w-full hover:bg-sky-600 duration-300 ">
            Checkout
          </button>
          <Link
            to={"/products"}
            className="continue uppercase text-sky-500 font-medium "
          >
            Continue Shopping
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Cart;