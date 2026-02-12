export  interface ShortLink {
  id: string;
  originalUrl: string;
  shortCode: string;
  customAlias?: string;
  expiryDate?: string;
  clicks: number;
  createdAt: string;
}
