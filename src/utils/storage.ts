import type { ShortLink } from "../types/shortLink";

const KEY = "chotalink_data";

export const getLinks = (): ShortLink[] => {
  const data = localStorage.getItem(KEY);
  return data ? JSON.parse(data) : [];
};

export const saveLinks = (links: ShortLink[]) => {
  localStorage.setItem(KEY, JSON.stringify(links));
};
