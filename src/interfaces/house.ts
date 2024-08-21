// interface APIResponse {
//   total: number;
//   filtered: number;
//   data: Data;
// }
interface Property {
  neighborhood: string;
  currency_id: string;
  price: number;
  pricePerSquareMeter: number;
  coveredArea: number;
  totalArea: number;
  rooms: number;
  propertyType: string;
  title: string;
  permalink: string;
  thumbnail: string;
}

interface Properties {
  propertyType: string;
  categoryID: string;
  results: Property[];
  amount: number;
}

interface APIResponse {
  site_id: string;
  paging: Paging;
  results: PropertyDTO[];
  available_sorts: SortOption[];
  filters: Filter[];
  available_filters: AvailableFilter[];
  currency: Currency;
  available_currencies: AvailableCurrencies;
  pdp_tracking: PDPTracking;
  user_context: any;
}

interface Paging {
  total: number;
  primary_results: number;
  offset: number;
  limit: number;
}

interface PropertyDTO {
  // pricePerSquareMeter: number;
  id: string;
  title: string;
  condition: string;
  thumbnail_id: string;
  catalog_product_id: string | null;
  listing_type_id: string;
  sanitized_title: string;
  permalink: string;
  buying_mode: string;
  site_id: string;
  category_id: string;
  domain_id: string;
  thumbnail: string;
  currency_id: string;
  order_backend: number;
  price: number;
  original_price: number | null;
  sale_price: SalePrice;
  available_quantity: number;
  official_store_id: number | null;
  use_thumbnail_id: boolean;
  accepts_mercadopago: boolean;
  shipping: Shipping;
  stop_time: string;
  seller: Seller;
  attributes: Attribute[];
  location: Locacion;
  seller_contact: SellerContact;
  installments: any | null;
  winner_item_id: string | null;
  catalog_listing: boolean;
  discounts: any | null;
  promotions: any[];
  inventory_id: string | null;
}

interface SalePrice {
  price_id: string;
  amount: number;
  conditions: PriceConditions;
  currency_id: string;
  exchange_rate: any | null;
  payment_method_prices: any[];
  payment_method_type: string;
  regular_amount: number | null;
  type: string;
  metadata: any;
}

interface PriceConditions {
  eligible: boolean;
  context_restrictions: any[];
  start_time: string | null;
  end_time: string | null;
}

interface Shipping {
  store_pick_up: boolean;
  free_shipping: boolean;
  logistic_type: string | null;
  mode: string;
  tags: any[];
  benefits: any | null;
  promise: any | null;
  shipping_score: number;
}

interface Seller {
  id: number;
  nickname: string;
}

interface Attribute {
  id: string;
  name: string;
  value_id: string | null;
  value_name: string;
  attribute_group_id: string;
  attribute_group_name: string;
  value_struct: ValueStruct | null;
  values: AttributeValue[];
  source: number;
  value_type: string;
}

interface ValueStruct {
  number: number;
  unit: string;
}

interface AttributeValue {
  id: string | null;
  name: string;
  struct: ValueStruct | null;
  source: number;
}

interface Locacion {
  address_line: string;
  zip_code: string;
  subneighborhood: any | null;
  neighborhood: IdNamePair;
  city: IdNamePair;
  state: IdNamePair;
  country: IdNamePair;
  latitude: number;
  longitude: number;
}

interface IdNamePair {
  id: string;
  name: string;
}

interface SellerContact {
  contact: string;
  other_info: string;
  webpage: string;
  area_code: string;
  phone: string;
  area_code2: string;
  phone2: string;
  email: string;
}

interface SortOption {
  id: string;
  name: string;
}

interface Filter {
  id: string;
  name: string;
  type: string;
  values: FilterValue[];
}

interface FilterValue {
  id: string;
  name: string;
  results?: number;
  path_from_root?: PathFromRoot[];
}

interface PathFromRoot {
  id: string;
  name: string;
}

interface AvailableFilter {
  id: string;
  name: string;
  type: string;
  values: FilterValue[];
}

interface Currency {
  id: string;
  symbol: string;
}

interface AvailableCurrencies {
  currencies: Currency[];
  conversions: {
    [key: string]: number;
  };
}

interface PDPTracking {
  group: boolean;
  product_info: any[];
}
