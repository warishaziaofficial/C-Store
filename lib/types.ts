export interface Product {
  id: string;
  name: string;
  category: string;
  categorySlug: string;
  price: number;
  originalPrice?: number;
  discount?: number;
  rating: number;
  reviewCount: number;
  image: string;
  isNew?: boolean;
  isBestSeller?: boolean;
  isPromotion?: boolean;
}

export interface Category {
  id: string;
  name: string;
  slug: string;
  description: string;
  image: string;
  productCount: number;
}

export interface Store {
  id: string;
  name: string;
  address: string;
  city: string;
  state: string;
  zip: string;
  phone: string;
  hours: { day: string; open: string; close: string }[];
  image: string;
  lat: number;
  lng: number;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  content: string;
  rating: number;
  avatar: string;
}

export interface FAQ {
  id: string;
  question: string;
  answer: string;
  category: string;
}

export interface Promotion {
  id: string;
  title: string;
  description: string;
  discount: string;
  image: string;
  endDate: string;
  badge?: string;
}

export interface ContentArticle {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  body: string[];
  category: string;
  author: string;
  publishedAt: string;
  readTime: string;
  image: string;
  featured?: boolean;
  tags: string[];
}
