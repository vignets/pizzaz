import { pizzasAtom } from "@/store";
import { Button } from "@mantine/core";
import { useAtom } from "jotai";
import React from "react";
import { ArrowRightIcon } from "@heroicons/react/outline";

export default function OrderSummary() {
  const [pizzas, setPizzas] = useAtom(pizzasAtom);
  const orderedItems = pizzas.filter((item) => item.quantity > 0);
  if (orderedItems.length === 0) return null;
  const total = pizzas.reduce(function (previousValue, currentValue) {
    return previousValue + currentValue.quantity * currentValue.price;
  }, 0);

  return (
    <div className="fixed left-1/2 -translate-x-1/2 bottom-0 w-full max-w-4xl ">
      <div className="bg-indigo-600 text-white h-full mx-4 sm:mx-6 lg:mx-8 rounded-t-2xl px-6 py-4">
        <div>
          <h2 className=" font-bold text-2xl">Order Summary</h2>
          <div className="flex justify-between items-end">
            <div className="flex items-baseline space-x-2">
              <p className="text-sm font-semibold">Total:</p>
              <p className="text-2xl font-extrabold ">
                <span className="font-medium">$</span>
                {total.toFixed()}
                <span className="text-lg">
                  {"."}
                  {total.toFixed(2).split(".")[1]}
                </span>
              </p>
            </div>
            <Button variant="default" className="text-gray-800">
              Place Order <ArrowRightIcon className="w-5 h-5 ml-1" />
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
