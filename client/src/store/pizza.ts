import { API_URL } from "@/config/env-vars";
import { Pizza } from "@/types";
import { atom } from "jotai";

export const prepareData = async () => {
  const response = await fetch(`${API_URL}/pizzas.json`);
  const data = (await response.json()) as Pizza[];
  return data.map((user) => ({ ...user, quantity: 0 }));
};

export const pizzasAtom = atom<Pizza[]>([]);
