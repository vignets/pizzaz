import { API_URL } from "@/config/env-vars";
import { rest } from "msw";

export const handlers = [
  rest.get(`${API_URL}/pizzas.json`, (req, res, ctx) => {
    return res(
      ctx.json([
        {
          name: "Margherita",
          price: 5,
          ingredients: ["tomato"],
        },
        {
          name: "Bufala",
          price: 6,
          ingredients: ["tomato"],
        },
      ]),
    );
  }),

  rest.get(`${API_URL}/order.json`, (req, res, ctx) => {
    return res(
      ctx.json({
        success: true,
        deliveryTime: 2100000,
      }),
    );
  }),
];
