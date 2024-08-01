import { products } from "./data/data";
import { ProductCard } from "./components/ProductCard";
import { Header } from "./components/header";
import { useSelector } from "react-redux";
import { Card } from "./components/Card";

function App() {
  const { productList, totalPrice } = useSelector((state) => state.product);

  return (
    <>
      <div className="mx-auto w-[1400px]">
        <Header />
        <div className="flex">
          <div className="flex w-full flex-wrap gap-3">
            {products.map((item) => (
              <ProductCard key={item.id} {...item} />
            ))}
          </div>
          <div className="bg-silver h-[700px] w-[350px] overflow-y-auto rounded-xl border-[2px] border-white p-5">
            <h2 className="text-center text-xl text-white">Shopping Cart</h2>
            {productList.length > 0 ? (
              <>
                {productList.map((item) => (
                  <Card key={item.id} {...item} />
                ))}
                <div className="mt-4 text-center text-white">
                  <p>
                    Total Price: <strong>{totalPrice}</strong> $
                  </p>
                </div>
              </>
            ) : (
              <p className="text-center text-white">Your cart is empty</p>
            )}
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
