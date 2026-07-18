export type MaterialType = 
  | "Steel" 
  | "Iron" 
  | "Copper" 
  | "Aluminum" 
  | "Wood" 
  | "Bricks" 
  | "Concrete" 
  | "Wires" 
  | "Tiles" 
  | "Plastic";

export type ConditionType = "New" | "Used" | "Mixed";
export type UnitType = "kg" | "ton" | "piece" | "lot";
export type PriceUnitType = "per kg" | "per ton" | "fixed";
export type ListingStatus = "active" | "sold" | "paused";

export interface Listing {
  id: string;
  title: string;
  material: MaterialType;
  condition: ConditionType;
  quantity: number;
  unit: UnitType;
  price: number;
  priceUnit: PriceUnitType;
  district: string;
  city: string;
  pincode: string;
  description: string;
  photos: string[];
  sellerName: string;
  sellerPhone: string;
  sellerRating: number;
  postedAt: number;
  status: ListingStatus;
}

export interface User {
  name: string;
  district: string;
  phone: string;
  isAuthenticated: boolean;
}
