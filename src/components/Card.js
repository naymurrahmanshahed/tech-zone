import { useNavigate } from "react-router-dom";
import { currencyFormatter } from "../utilities/currencyFormatter";

const Card = ({ item }) => {
  const navigate = useNavigate();
  const addToCart = (item) => {
    navigate("/cart");
  };
  return (
    <div className="product flex flex-col gap-2 bg-white rounded-xl shadow-md overflow-hidden hover:shadow-2xl duration-300  ">
      <div className="product-img ">
        <img src={item.image} alt={item.name} />
      </div>
      <div className="product-texts flex flex-col px-5 pb-5">
        <span className="category-tag uppercase text-xs font-semibold tracking-widest text-sky-500">
          {item.category}
        </span>
        <h3 className="title text-xl font-medium h-[5.25rem] ">{item.name}</h3>

        <p className="description text-gray-500 h-[6rem]">{item.description}</p>
        <div className="flex justify-between items-center">
          <span className="price text-xl font-medium text-rose-500">
            {currencyFormatter(item.price)}
          </span>
          <button
            onClick={() => addToCart(item)}
            className="uppercase bg-violet-500 text-violet-50 font-medium py-3 px-6 rounded-md hover:bg-red-500 hover:text-red-50 duration-300"
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default Card;
