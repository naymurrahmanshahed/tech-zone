import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import {
  addtoCart,
  decreaseCart,
  getSubtotal,
  removeAllFromCart,
  removeFromCart,
} from "../features/products/cartSlice";
import { currencyFormatter } from "../utilities/currencyFormatter";

const Cart = () => {
  const dispatch = useDispatch();
  const { cartItems: data, cartTotalAmount } = useSelector(
    (state) => state.carts
  );

  useEffect(() => {
    dispatch(getSubtotal());
  }, [data, dispatch]);

  const removeHandler = (product) => {
    dispatch(removeFromCart(product));
  };

  const removeAllProductsHandler = () => {
    dispatch(removeAllFromCart());
  };
  const handleDecrease = (product) => {
    dispatch(decreaseCart(product));
  };

  const handleIncrease = (product) => {
    dispatch(addtoCart(product));
  };
  return (
    <div className="cart-section container mx-auto py-10 px-10">
      <h2 className="section-title uppercase font-bold space-font  text-2xl mt-10 mb-10 text-center tracking-wider ">
        {data.length === 0 ? " Your Cart is Empty " : " Your Cart "}
      </h2>

      {data?.length === 0 ? (
        <div className="text-center">
          <Link
            to={"/products"}
            className=" uppercase text-sky-500 font-medium inline-block  "
          >
            start Shopping
          </Link>
        </div>
      ) : (
        <>
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
                      <button
                        onClick={() => removeHandler(product)}
                        className="uppercase text-gray-400 hover:text-rose-400"
                      >
                        Remove
                      </button>
                    </div>
                  </div>
                  <div className="unit-price">
                    {currencyFormatter(product.price)}
                  </div>
                  <div className="counter flex">
                    <button
                      onClick={() => handleDecrease(product)}
                      className="h-10 w-10 bg-gray-100 border border-gray-300 active:bg-gray-700 active:text-gray-50"
                    >
                      -
                    </button>
                    <span className="h-10 w-10 bg-gray-100 flex justify-center items-center border border-gray-300">
                      {product.cartQuantity}
                    </span>
                    <button
                      onClick={() => handleIncrease(product)}
                      className="h-10 w-10 bg-gray-100 border border-gray-300 active:bg-gray-700 active:text-gray-50"
                    >
                      +
                    </button>
                  </div>
                  <div className="total-price">
                    <div className="total-price text-end">
                      {currencyFormatter(product.price * product.cartQuantity)}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="cart-lower flex justify-between items-start py-10">
            <button
              onClick={() => removeAllProductsHandler()}
              className="clear-btn uppercase border py-3 px-8 hover:bg-rose-200 hover:text-rose-600 font-medium duration-300 hover: border-rose-200"
            >
              Clear Cart
            </button>
            <div className="flex flex-col items-start gap-2">
              <div className="top flex justify-between w-full text-2xl font-medium ">
                <span className="text-sky-500">Subtotal</span>
                <span className="text-rose-500">
                  {currencyFormatter(cartTotalAmount)}
                </span>
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
        </>
      )}
    </div>
  );
};

export default Cart;
