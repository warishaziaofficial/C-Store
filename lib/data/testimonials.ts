import { Testimonial } from "@/lib/types";
import { unsplash, photos } from "@/lib/data/images";

export const testimonials: Testimonial[] = [
  {
    id: "t1",
    name: "Marcus Johnson",
    role: "Daily Commuter",
    content:
      "C-Store is my go-to stop every morning. Fresh coffee, quick checkout, and the staff always greets me by name. Best convenience store in the city!",
    rating: 5,
    avatar: unsplash(photos.avatar1, 100, 100),
  },
  {
    id: "t2",
    name: "Sarah Chen",
    role: "College Student",
    content:
      "The 24-hour location near campus is a lifesaver during finals week. Great snack selection and the loyalty rewards actually save me real money.",
    rating: 5,
    avatar: unsplash(photos.avatar2, 100, 100),
  },
  {
    id: "t3",
    name: "David Martinez",
    role: "Truck Driver",
    content:
      "Clean stores, fair prices, and I can always find what I need on the road. The hot food section is surprisingly good for a convenience store.",
    rating: 4,
    avatar: unsplash(photos.avatar3, 100, 100),
  },
  {
    id: "t4",
    name: "Emily Thompson",
    role: "Working Mom",
    content:
      "When I forget something for dinner, C-Store has me covered. The grocery aisle has all the essentials and the bakery section is fantastic.",
    rating: 5,
    avatar: unsplash(photos.avatar4, 100, 100),
  },
];
