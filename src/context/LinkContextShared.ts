import { createContext, useContext } from "react";
import type { ShortLink } from "../types/shortLink";

export interface LinkContextType {
  links: ShortLink[];
  addLink: (link: ShortLink) => void;
  incrementClick: (shortCode: string) => void;
  deleteLink: (id: string) => void;
}

export const LinkContext = createContext<LinkContextType | null>(null);

export const useLinks = () => {
  const context = useContext(LinkContext);
  if (!context) throw new Error("useLinks must be used inside LinkProvider");
  return context;
};
