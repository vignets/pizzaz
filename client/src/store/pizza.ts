// @index("./*", f => `export * from "${f.path}";`)

import { API_URL } from "@/config/env-vars";
import { Pizza } from "@/types";
import { atom } from "jotai";
import { atomWithDefault } from "jotai/utils";

/** Read only atom, fetches from api */
export const pizzasApi = atom(async () => {
  const response = await fetch(`${API_URL}/pizzas.json`);
  const data = (await response.json()) as Pizza[];
  return data.map((user) => ({ ...user, quantity: 0 }));
});

/** Read write atom */
export const pizzasAtom = atomWithDefault((get) => get(pizzasApi));
