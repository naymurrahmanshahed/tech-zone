import { useSelector } from "react-redux";
import { FiLoader } from "react-icons/fi";
import Card from "../components/Card";

const Products = () => {
  const { items: data, status } = useSelector((state) => state.products);
  return (
    <div className="product-section container mx-auto px-10 py-10 ">
      <h2 className="section-title uppercase font-bold space-font  text-2xl mb-10 text-center tracking-wider ">
        Browse All Products
      </h2>
      <div className="products-wrapper grid grid-cols-1 md:grid-cols-2  xl:grid-cols-3 2xl:grid-cols-4  gap-10">
        {status && (
          <span className="loader text-center col-span-full">
            <FiLoader className="inline-block animate-spin" />
          </span>
        )}

        {data?.map((product) => (
          <Card product={product} key={product.id} />
        ))}
      </div>
    </div>
  );
};

export default Products;
