import Counter from "@/components/Counter";
import OrderSummary from "@/components/OrderSummary";
import { pizzasAtom } from "@/store";
import { useAtom } from "jotai";
import { withErrorBoundary } from "react-error-boundary";

function Page() {
  const [pizzas, setPizzas] = useAtom(pizzasAtom);

  return (
    <div className="pt-16 pb-28 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto space-y-5">
      <h1 className="font-black text-3xl text-gray-800">🍕 Pizzas!</h1>
      {pizzas.map((pizza, id) => (
        <div
          key={id}
          className="p-6 bg-gray-50 rounded-2xl border-2 border-gray-200 shadow-sm "
        >
          <div className="flex justify-between items-start space-x-2">
            <div>
              <h2 className="font-bold text-xl text-gray-800">{pizza.name}</h2>
              <p className="text-sm text-gray-700">
                {pizza.ingredients.join(", ")}
              </p>
            </div>
            <p className="text-2xl font-extrabold text-gray-800">
              <span className="font-medium">$</span>
              {pizza.price.toFixed()}
              <span className="text-lg">
                {"."}
                {pizza.price.toFixed(2).split(".")[1]}
              </span>
            </p>
          </div>
          <div className="flex justify-end mt-1 lg:-mt-3">
            <Counter
              value={pizza.quantity}
              onChange={(val) => {
                pizza.quantity = val;
                setPizzas([...pizzas]);
              }}
            />
          </div>
        </div>
      ))}
      <OrderSummary />
    </div>
  );
}

export default withErrorBoundary(Page, {
  FallbackComponent: ({ error }) => <div>{error.message}</div>,
  onError(error, info) {
    // Do something with the error
    console.log({ error, info });
  },
});
