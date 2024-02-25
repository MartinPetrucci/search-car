export interface Car {
  id: string;
  title: string;
  kms: number;
  price: number;
  power: number;
  year: number;
  link: string;
  currency_id: string;
  relation: number;
  thumbnail: string;
}

export interface SearchResponse {
  paging: {
    total: number;
    offset: number;
    limit: number;
  };
  results: CarResult[];
  available_filters: AvFilter[];
}

export interface AvFilter {
  name: string;
  id: string;
  values: { id: string; name: string; results: number }[];
}

export interface CarResult {
  id: string;
  title: string;
  condition: string;
  thumbnail_id: string;
  catalog_product_id: string;
  listing_type_id: string;
  permalink: string;
  buying_mode: string;
  site_id: string;
  category_id: string;
  domain_id: string;
  thumbnail: string;
  currency_id: string;
  order_backend: number;
  price: number;
  original_price: null;
  sale_price: null;
  sold_quantity: number;
  available_quantity: number;
  official_store_id: null;
  use_thumbnail_id: boolean;
  accepts_mercadopago: boolean;
  tags: any[];
  shipping: Shipping;
  stop_time: Date;
  seller: Seller;
  seller_address: SellerAddress;
  address: Address;
  attributes: Attribute[];
  location: Location;
  seller_contact: SellerContact;
  installments: null;
  winner_item_id: null;
  discounts: null;
  promotions: any[];
  inventory_id: null;
}

export interface Address {
  state_id: string;
  state_name: string;
  city_id: string;
  city_name: string;
}

export interface Attribute {
  id: string;
  name: string;
  value_id: null | string;
  value_name: string;
  attribute_group_id: string;
  attribute_group_name: string;
  value_struct: Struct | null;
  values: Value[];
  source: number;
  value_type: string;
}

export interface Struct {
  number: number;
  unit: string;
}

export interface Value {
  id: null | string;
  name: string;
  struct: Struct | null;
  source: number;
}

export interface Location {
  address_line: string;
  zip_code: string;
  subneighborhood: null;
  neighborhood: City;
  city: City;
  state: City;
  country: City;
  latitude: number;
  longitude: number;
}

export interface City {
  id: null | string;
  name: string;
}

export interface Seller {
  id: number;
  nickname: string;
  car_dealer: boolean;
  real_estate_agency: boolean;
  _: boolean;
  registration_date: Date;
  tags: string[];
  car_dealer_logo: string;
  permalink: string;
  seller_reputation: SellerReputation;
}

export interface SellerReputation {
  level_id: null;
  power_seller_status: null;
  transactions: Transactions;
  metrics: Metrics;
}

export interface Metrics {
  sales: Sales;
  claims: Cancellations;
  delayed_handling_time: Cancellations;
  cancellations: Cancellations;
}

export interface Cancellations {
  period: string;
  rate: number;
  value: number;
}

export interface Sales {
  period: string;
  completed: number;
}

export interface Transactions {
  canceled: number;
  completed: number;
  period: string;
  ratings: Ratings;
  total: number;
}

export interface Ratings {
  negative: number;
  neutral: number;
  positive: number;
}

export interface SellerAddress {
  comment: string;
  address_line: string;
  id: null;
  latitude: null;
  longitude: null;
  country: City;
  state: City;
  city: City;
}

export interface SellerContact {
  contact: string;
  other_info: string;
  webpage: string;
  area_code: string;
  phone: string;
  area_code2: string;
  phone2: string;
  email: string;
}

export interface Shipping {
  store_pick_up: boolean;
  free_shipping: boolean;
  logistic_type: string;
  mode: string;
  tags: any[];
  promise: null;
}
