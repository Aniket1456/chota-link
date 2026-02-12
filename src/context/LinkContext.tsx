import React, { useState, useEffect, useMemo, useCallback } from "react";
import type { ShortLink } from "../types/shortLink";
import { getLinks, saveLinks } from "../utils/storage";
import { LinkContext } from "./LinkContextShared";

export const LinkProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  // Initialize state directly from storage to prevent wiping data on mount
  const [links, setLinks] = useState<ShortLink[]>(() => getLinks());

  // Save links to storage whenever they change
  useEffect(() => {
    saveLinks(links);
  }, [links]);

  const addLink = useCallback((link: ShortLink) => {
    setLinks(prev => [...prev, link]);
  }, []);

  const incrementClick = useCallback((shortCode: string) => {
    setLinks(prev =>
      prev.map(link =>
        link.shortCode === shortCode
          ? { ...link, clicks: link.clicks + 1 }
          : link
      )
    );
  }, []);

  const deleteLink = useCallback((id: string) => {
    setLinks(prev => prev.filter(link => link.id !== id));
  }, []);

  const value = useMemo(() => ({ 
    links, 
    addLink, 
    incrementClick, 
    deleteLink 
  }), [links, addLink, incrementClick, deleteLink]);

  return (
    <LinkContext.Provider value={value}>
      {children}
    </LinkContext.Provider>
  );
};
