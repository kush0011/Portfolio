import { MaterialType } from "./types";
import { 
  Construction, 
  Layers, 
  Pipette, 
  Box, 
  Trees, 
  BrickWall, 
  Mountain, 
  Cable, 
  Grid3X3, 
  Recycle 
} from "lucide-react";

export const MATERIALS: { type: MaterialType; icon: any; color: string }[] = [
  { type: "Steel", icon: Construction, color: "#94a3b8" },
  { type: "Iron", icon: Layers, color: "#64748b" },
  { type: "Copper", icon: Pipette, color: "#b45309" },
  { type: "Aluminum", icon: Box, color: "#cbd5e1" },
  { type: "Wood", icon: Trees, color: "#78350f" },
  { type: "Bricks", icon: BrickWall, color: "#991b1b" },
  { type: "Concrete", icon: Mountain, color: "#4b5563" },
  { type: "Wires", icon: Cable, color: "#1e40af" },
  { type: "Tiles", icon: Grid3X3, color: "#065f46" },
  { type: "Plastic", icon: Recycle, color: "#166534" },
];

export const DISTRICTS = [
  "Delhi Central", "Mumbai Suburban", "Bangalore Urban", "Chennai", "Kolkata",
  "Pune", "Hyderabad", "Ahmedabad", "Jaipur", "Lucknow", "Chandigarh", "Indore"
];

export const MOCK_LISTINGS: any[] = [
  {
    id: "1",
    title: "TMT Steel Rods - 12mm",
    material: "Steel",
    condition: "New",
    quantity: 500,
    unit: "kg",
    price: 45,
    priceUnit: "per kg",
    district: "Delhi Central",
    city: "Paharganj",
    pincode: "110055",
    description: "High quality TMT rods left over from a residential project. Rust-free.",
    photos: ["https://picsum.photos/seed/steel/800/600"],
    sellerName: "Rajesh Kumar",
    sellerPhone: "9876543210",
    sellerRating: 4.8,
    postedAt: Date.now() - 3600000 * 2,
    status: "active"
  },
  {
    id: "2",
    title: "Old Teak Wood Door Frames",
    material: "Wood",
    condition: "Used",
    quantity: 10,
    unit: "piece",
    price: 1200,
    priceUnit: "fixed",
    district: "Mumbai Suburban",
    city: "Andheri West",
    pincode: "400053",
    description: "Solid teak wood frames from a renovation. Very sturdy.",
    photos: ["https://picsum.photos/seed/wood/800/600"],
    sellerName: "Amit Shah",
    sellerPhone: "9123456789",
    sellerRating: 4.5,
    postedAt: Date.now() - 3600000 * 5,
    status: "active"
  },
  {
    id: "3",
    title: "Copper Wires - Mixed Gauges",
    material: "Wires",
    condition: "Mixed",
    quantity: 25,
    unit: "kg",
    price: 650,
    priceUnit: "per kg",
    district: "Bangalore Urban",
    city: "Whitefield",
    pincode: "560066",
    description: "Scrap copper wires from electrical work. Stripped and ready.",
    photos: ["https://picsum.photos/seed/copper/800/600"],
    sellerName: "Suresh V",
    sellerPhone: "9988776655",
    sellerRating: 4.9,
    postedAt: Date.now() - 3600000 * 12,
    status: "active"
  }
];
