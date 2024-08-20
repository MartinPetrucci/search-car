// interface APIResponse {
//   total: number;
//   filtered: number;
//   data: Data;
// }

interface APIResponse {
  site_id: string;
  paging: Paging;
  results: Result[];
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

interface Result {
  pricePerSquareMeter: number;
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

// const responsee: APIResponse = {
//   site_id: "MLA",
//   paging: {
//     limit: 0,
//     offset: 0,
//     primary_results: 0,
//     total: 0,
//   },
//   results: [
//     {
//       id: "MLA1881861712",
//       title: "Departamento 2 Ambientes Excelente Estado Dueño Directo",
//       condition: "not_specified",
//       thumbnail_id: "872587-MLA78152384314_082024",
//       catalog_product_id: null,
//       listing_type_id: "gold_premium",
//       sanitized_title:
//         "departamento-2-ambientes-excelente-estado-dueno-directo",
//       permalink:
//         "https://departamento.mercadolibre.com.ar/MLA-1881861712-departamento-2-ambientes-excelente-estado-dueno-directo-_JM",
//       buying_mode: "classified",
//       site_id: "MLA",
//       category_id: "MLA1473",
//       domain_id: "MLA-APARTMENTS_FOR_RENT",
//       thumbnail:
//         "http://http2.mlstatic.com/D_872587-MLA78152384314_082024-I.jpg",
//       currency_id: "ARS",
//       order_backend: 1,
//       price: 500000,
//       original_price: null,
//       sale_price: {
//         price_id: "",
//         amount: 500000,
//         conditions: {
//           eligible: true,
//           context_restrictions: [],
//           start_time: null,
//           end_time: null,
//         },
//         currency_id: "ARS",
//         exchange_rate: null,
//         payment_method_prices: [],
//         payment_method_type: "TMP",
//         regular_amount: null,
//         type: "standard",
//         metadata: {},
//       },
//       available_quantity: 1,
//       official_store_id: null,
//       use_thumbnail_id: true,
//       accepts_mercadopago: false,
//       shipping: {
//         store_pick_up: false,
//         free_shipping: false,
//         logistic_type: null,
//         mode: "not_specified",
//         tags: [],
//         benefits: null,
//         promise: null,
//         shipping_score: -1,
//       },
//       stop_time: "2024-09-12T04:00:17.849Z",
//       seller: {
//         id: 38768022,
//         nickname: "PIMPU94",
//       },
//       attributes: [
//         {
//           id: "BEDROOMS",
//           name: "Dormitorios",
//           value_id: null,
//           value_name: "1",
//           attribute_group_id: "FIND",
//           attribute_group_name: "Ficha técnica",
//           value_struct: null,
//           values: [
//             {
//               id: null,
//               name: "1",
//               struct: null,
//               source: 1505,
//             },
//           ],
//           source: 1505,
//           value_type: "number",
//         },
//         {
//           id: "COVERED_AREA",
//           name: "Superficie cubierta",
//           value_id: null,
//           value_name: "42 m²",
//           attribute_group_id: "FIND",
//           attribute_group_name: "Ficha técnica",
//           value_struct: {
//             number: 42,
//             unit: "m²",
//           },
//           values: [
//             {
//               id: null,
//               name: "42 m²",
//               struct: {
//                 number: 42,
//                 unit: "m²",
//               },
//               source: 7092,
//             },
//           ],
//           source: 7092,
//           value_type: "number_unit",
//         },
//         {
//           id: "FULL_BATHROOMS",
//           name: "Baños",
//           value_id: null,
//           value_name: "1",
//           attribute_group_id: "FIND",
//           attribute_group_name: "Ficha técnica",
//           value_struct: null,
//           values: [
//             {
//               id: null,
//               name: "1",
//               struct: null,
//               source: 1505,
//             },
//           ],
//           source: 1505,
//           value_type: "number",
//         },
//         {
//           id: "ROOMS",
//           name: "Ambientes",
//           value_id: null,
//           value_name: "2",
//           attribute_group_id: "FIND",
//           attribute_group_name: "Ficha técnica",
//           value_struct: null,
//           values: [
//             {
//               id: null,
//               name: "2",
//               struct: null,
//               source: 1505,
//             },
//           ],
//           source: 1505,
//           value_type: "number",
//         },
//         {
//           id: "TOTAL_AREA",
//           name: "Superficie total",
//           value_id: null,
//           value_name: "40 m²",
//           attribute_group_id: "FIND",
//           attribute_group_name: "Ficha técnica",
//           value_struct: {
//             number: 40,
//             unit: "m²",
//           },
//           values: [
//             {
//               id: null,
//               name: "40 m²",
//               struct: {
//                 number: 40,
//                 unit: "m²",
//               },
//               source: 1505,
//             },
//           ],
//           source: 1505,
//           value_type: "number_unit",
//         },
//         {
//           id: "OPERATION",
//           name: "Operación",
//           value_id: "242073",
//           value_name: "Alquiler",
//           attribute_group_id: "MAIN",
//           attribute_group_name: "Principales",
//           value_struct: null,
//           values: [
//             {
//               id: "242073",
//               name: "Alquiler",
//               struct: null,
//               source: 1,
//             },
//           ],
//           source: 1,
//           value_type: "list",
//         },
//         {
//           id: "PROPERTY_TYPE",
//           name: "Inmueble",
//           value_id: "242062",
//           value_name: "Departamento",
//           attribute_group_id: "MAIN",
//           attribute_group_name: "Principales",
//           value_struct: null,
//           values: [
//             {
//               id: "242062",
//               name: "Departamento",
//               struct: null,
//               source: 1,
//             },
//           ],
//           source: 1,
//           value_type: "list",
//         },
//       ],
//       location: {
//         address_line: "Calle Pedro Moran 2453",
//         zip_code: "",
//         subneighborhood: null,
//         neighborhood: {
//           id: "TUxBQkFHUjk3NjJa",
//           name: "Agronomía",
//         },
//         city: {
//           id: "TUxBQ0NBUGZlZG1sYQ",
//           name: "Capital Federal",
//         },
//         state: {
//           id: "TUxBUENBUGw3M2E1",
//           name: "Capital Federal",
//         },
//         country: {
//           id: "AR",
//           name: "Argentina",
//         },
//         latitude: -34.589541,
//         longitude: -58.491371,
//       },
//       seller_contact: {
//         contact: "",
//         other_info: "",
//         webpage: "",
//         area_code: "",
//         phone: "",
//         area_code2: "",
//         phone2: "",
//         email: "",
//       },
//       installments: null,
//       winner_item_id: null,
//       catalog_listing: false,
//       discounts: null,
//       promotions: [],
//       inventory_id: null,
//     },
//     {
//       id: "MLA1444386169",
//       title: "2 Ambientes Balcón Terraza Sin Expensas",
//       condition: "not_specified",
//       thumbnail_id: "740530-MLA78278661256_082024",
//       catalog_product_id: null,
//       listing_type_id: "gold_premium",
//       sanitized_title: "2-ambientes-balcon-terraza-sin-expensas",
//       permalink:
//         "https://departamento.mercadolibre.com.ar/MLA-1444386169-2-ambientes-balcon-terraza-sin-expensas-_JM",
//       buying_mode: "classified",
//       site_id: "MLA",
//       category_id: "MLA1473",
//       domain_id: "MLA-APARTMENTS_FOR_RENT",
//       thumbnail:
//         "http://http2.mlstatic.com/D_740530-MLA78278661256_082024-I.jpg",
//       currency_id: "ARS",
//       order_backend: 2,
//       price: 480000,
//       original_price: null,
//       sale_price: {
//         price_id: "",
//         amount: 480000,
//         conditions: {
//           eligible: true,
//           context_restrictions: [],
//           start_time: null,
//           end_time: null,
//         },
//         currency_id: "ARS",
//         exchange_rate: null,
//         payment_method_prices: [],
//         payment_method_type: "TMP",
//         regular_amount: null,
//         type: "standard",
//         metadata: {},
//       },
//       available_quantity: 1,
//       official_store_id: null,
//       use_thumbnail_id: true,
//       accepts_mercadopago: false,
//       shipping: {
//         store_pick_up: false,
//         free_shipping: false,
//         logistic_type: null,
//         mode: "not_specified",
//         tags: [],
//         benefits: null,
//         promise: null,
//         shipping_score: -1,
//       },
//       stop_time: "2024-09-17T04:00:18.871Z",
//       seller: {
//         id: 265475589,
//         nickname: "LACPROP",
//       },
//       attributes: [
//         {
//           id: "BEDROOMS",
//           name: "Dormitorios",
//           value_id: null,
//           value_name: "1",
//           attribute_group_id: "FIND",
//           attribute_group_name: "Ficha técnica",
//           value_struct: null,
//           values: [
//             {
//               id: null,
//               name: "1",
//               struct: null,
//               source: 7092,
//             },
//           ],
//           source: 7092,
//           value_type: "number",
//         },
//         {
//           id: "COVERED_AREA",
//           name: "Superficie cubierta",
//           value_id: null,
//           value_name: "46 m²",
//           attribute_group_id: "FIND",
//           attribute_group_name: "Ficha técnica",
//           value_struct: {
//             number: 46,
//             unit: "m²",
//           },
//           values: [
//             {
//               id: null,
//               name: "46 m²",
//               struct: {
//                 number: 46,
//                 unit: "m²",
//               },
//               source: 7092,
//             },
//           ],
//           source: 7092,
//           value_type: "number_unit",
//         },
//         {
//           id: "FULL_BATHROOMS",
//           name: "Baños",
//           value_id: null,
//           value_name: "1",
//           attribute_group_id: "FIND",
//           attribute_group_name: "Ficha técnica",
//           value_struct: null,
//           values: [
//             {
//               id: null,
//               name: "1",
//               struct: null,
//               source: 7092,
//             },
//           ],
//           source: 7092,
//           value_type: "number",
//         },
//         {
//           id: "ROOMS",
//           name: "Ambientes",
//           value_id: null,
//           value_name: "2",
//           attribute_group_id: "FIND",
//           attribute_group_name: "Ficha técnica",
//           value_struct: null,
//           values: [
//             {
//               id: null,
//               name: "2",
//               struct: null,
//               source: 7092,
//             },
//           ],
//           source: 7092,
//           value_type: "number",
//         },
//         {
//           id: "TOTAL_AREA",
//           name: "Superficie total",
//           value_id: null,
//           value_name: "65 m²",
//           attribute_group_id: "FIND",
//           attribute_group_name: "Ficha técnica",
//           value_struct: {
//             number: 65,
//             unit: "m²",
//           },
//           values: [
//             {
//               id: null,
//               name: "65 m²",
//               struct: {
//                 number: 65,
//                 unit: "m²",
//               },
//               source: 7092,
//             },
//           ],
//           source: 7092,
//           value_type: "number_unit",
//         },
//         {
//           id: "OPERATION",
//           name: "Operación",
//           value_id: "242073",
//           value_name: "Alquiler",
//           attribute_group_id: "MAIN",
//           attribute_group_name: "Principales",
//           value_struct: null,
//           values: [
//             {
//               id: "242073",
//               name: "Alquiler",
//               struct: null,
//               source: 1,
//             },
//           ],
//           source: 1,
//           value_type: "list",
//         },
//         {
//           id: "PROPERTY_TYPE",
//           name: "Inmueble",
//           value_id: "242062",
//           value_name: "Departamento",
//           attribute_group_id: "MAIN",
//           attribute_group_name: "Principales",
//           value_struct: null,
//           values: [
//             {
//               id: "242062",
//               name: "Departamento",
//               struct: null,
//               source: 1,
//             },
//           ],
//           source: 1,
//           value_type: "list",
//         },
//       ],
//       location: {
//         address_line: "Camarones 2700",
//         zip_code: "",
//         subneighborhood: null,
//         neighborhood: {
//           id: "TUxBQlNBTjEyMjNa",
//           name: "Santa Rita",
//         },
//         city: {
//           id: "TUxBQ0NBUGZlZG1sYQ",
//           name: "Capital Federal",
//         },
//         state: {
//           id: "TUxBUENBUGw3M2E1",
//           name: "Capital Federal",
//         },
//         country: {
//           id: "AR",
//           name: "Argentina",
//         },
//         latitude: -34.6112341,
//         longitude: -58.4782998,
//       },
//       seller_contact: {
//         contact: "",
//         other_info: "",
//         webpage: "",
//         area_code: "",
//         phone: "",
//         area_code2: "",
//         phone2: "",
//         email: "",
//       },
//       installments: null,
//       winner_item_id: null,
//       catalog_listing: false,
//       discounts: null,
//       promotions: [],
//       inventory_id: null,
//     },
//   ],
//   available_sorts: [
//     {
//       id: "price_asc",
//       name: "Menor precio",
//     },
//     {
//       id: "price_desc",
//       name: "Mayor precio",
//     },
//   ],
//   filters: [
//     {
//       id: "category",
//       name: "Categorías",
//       type: "text",
//       values: [
//         {
//           id: "MLA1473",
//           name: "Alquiler",
//           path_from_root: [
//             {
//               id: "MLA1459",
//               name: "Inmuebles",
//             },
//             {
//               id: "MLA1472",
//               name: "Departamentos",
//             },
//             {
//               id: "MLA1473",
//               name: "Alquiler",
//             },
//           ],
//         },
//       ],
//     },
//     {
//       id: "item_location",
//       name: "Ubicación",
//       type: "text",
//       values: [
//         {
//           id: "lat:-34.61386385326509_-34.58144677298442,lon:-58.5251418750388_-58.47429658096765",
//           name: "Área del mapa seleccionada",
//         },
//       ],
//     },
//   ],
//   available_filters: [
//     {
//       id: "state",
//       name: "Ubicación",
//       type: "text",
//       values: [
//         {
//           id: "TUxBUENBUGw3M2E1",
//           name: "Capital Federal",
//           results: 277,
//         },
//         {
//           id: "TUxBUEdSQWVmNTVm",
//           name: "Bs.As. G.B.A. Oeste",
//           results: 4,
//         },
//         {
//           id: "TUxBUEdSQWU4ZDkz",
//           name: "Bs.As. G.B.A. Norte",
//           results: 1,
//         },
//       ],
//     },
//     {
//       id: "price",
//       name: "Precio",
//       type: "range",
//       values: [
//         {
//           id: "*-350000.0",
//           name: "Hasta $ 350.000",
//           results: 66,
//         },
//         {
//           id: "350000.0-500000.0",
//           name: "$350.000 a $500.000",
//           results: 121,
//         },
//         {
//           id: "500000.0-*",
//           name: "Más de $500.000",
//           results: 95,
//         },
//       ],
//     },
//     {
//       id: "power_seller",
//       name: "Filtro por calidad de vendedores",
//       type: "boolean",
//       values: [
//         {
//           id: "yes",
//           name: "Mejores vendedores",
//           results: 2,
//         },
//       ],
//     },
//     {
//       id: "since",
//       name: "Filtro por fecha de comienzo",
//       type: "text",
//       values: [
//         {
//           id: "today",
//           name: "Publicados hoy",
//           results: 11,
//         },
//       ],
//     },
//     {
//       id: "until",
//       name: "Filtro por fecha de finalización",
//       type: "text",
//       values: [
//         {
//           id: "today",
//           name: "Finalizan hoy",
//           results: 4,
//         },
//       ],
//     },
//     {
//       id: "has_video",
//       name: "Filtro por publicaciones con video",
//       type: "boolean",
//       values: [
//         {
//           id: "yes",
//           name: "Publicaciones con video",
//           results: 38,
//         },
//       ],
//     },
//     {
//       id: "has_pictures",
//       name: "Filtro por publicaciones con imágenes",
//       type: "boolean",
//       values: [
//         {
//           id: "yes",
//           name: "Con fotos",
//           results: 281,
//         },
//       ],
//     },
//     {
//       id: "seller_type",
//       name: "Publica",
//       type: "text",
//       values: [
//         {
//           id: "real_estate_agency",
//           name: "Inmobiliaria",
//           results: 203,
//         },
//         {
//           id: "private_seller",
//           name: "Dueño directo",
//           results: 79,
//         },
//       ],
//     },
//     {
//       id: "BEDROOMS",
//       name: "Dormitorios",
//       type: "range",
//       values: [
//         {
//           id: "[0-0]",
//           name: "Monoambiente",
//           results: 69,
//         },
//         {
//           id: "[1-1]",
//           name: "1 dormitorio",
//           results: 148,
//         },
//         {
//           id: "[2-2]",
//           name: "2 dormitorios",
//           results: 49,
//         },
//         {
//           id: "[3-3]",
//           name: "3 dormitorios",
//           results: 13,
//         },
//         {
//           id: "[4-*)",
//           name: "4 dormitorios o más",
//           results: 3,
//         },
//       ],
//     },
//     {
//       id: "COVERED_AREA",
//       name: "Superficie cubierta",
//       type: "range",
//       values: [
//         {
//           id: "(*-35m²]",
//           name: "35 m² cubiertos o menos",
//           results: 91,
//         },
//         {
//           id: "[35m²-40m²]",
//           name: "35 a 40 m² cubiertos",
//           results: 76,
//         },
//         {
//           id: "[40m²-50m²]",
//           name: "40 a 50 m² cubiertos",
//           results: 73,
//         },
//         {
//           id: "[50m²-*)",
//           name: "50 m² cubiertos o más",
//           results: 79,
//         },
//       ],
//     },
//     {
//       id: "FULL_BATHROOMS",
//       name: "Baños",
//       type: "range",
//       values: [
//         {
//           id: "[1-1]",
//           name: "1 baño",
//           results: 237,
//         },
//         {
//           id: "[2-2]",
//           name: "2 baños",
//           results: 30,
//         },
//         {
//           id: "[3-3]",
//           name: "3 baños",
//           results: 5,
//         },
//         {
//           id: "[4-4]",
//           name: "4 baños",
//           results: 1,
//         },
//       ],
//     },
//     {
//       id: "FURNISHED",
//       name: "Otras características",
//       type: "boolean",
//       values: [
//         {
//           id: "242085",
//           name: "Es amoblado",
//           results: 13,
//         },
//       ],
//     },
//     {
//       id: "HAS_AIR_CONDITIONING",
//       name: "Otras características",
//       type: "boolean",
//       values: [
//         {
//           id: "242085",
//           name: "Con aire acondicionado",
//           results: 72,
//         },
//       ],
//     },
//     {
//       id: "HAS_GARDEN",
//       name: "Otras características",
//       type: "boolean",
//       values: [
//         {
//           id: "242085",
//           name: "Con jardín",
//           results: 3,
//         },
//       ],
//     },
//     {
//       id: "HAS_GRILL",
//       name: "Otras características",
//       type: "boolean",
//       values: [
//         {
//           id: "242085",
//           name: "Con parrilla",
//           results: 35,
//         },
//       ],
//     },
//     {
//       id: "HAS_GYM",
//       name: "Otras características",
//       type: "boolean",
//       values: [
//         {
//           id: "242085",
//           name: "Con gimnasio",
//           results: 9,
//         },
//       ],
//     },
//     {
//       id: "HAS_HALF_BATH",
//       name: "Otras características",
//       type: "boolean",
//       values: [
//         {
//           id: "242085",
//           name: "Con toilette",
//           results: 38,
//         },
//       ],
//     },
//     {
//       id: "HAS_MULTIPURPOSE_ROOM",
//       name: "Otras características",
//       type: "boolean",
//       values: [
//         {
//           id: "242085",
//           name: "Con salón de usos múltiples",
//           results: 29,
//         },
//       ],
//     },
//     {
//       id: "HAS_SWIMMING_POOL",
//       name: "Otras características",
//       type: "boolean",
//       values: [
//         {
//           id: "242085",
//           name: "Con pileta",
//           results: 13,
//         },
//       ],
//     },
//     {
//       id: "ITEM_CONDITION",
//       name: "Condición",
//       type: "STRING",
//       values: [
//         {
//           id: "2230581",
//           name: "Usado",
//           results: 217,
//         },
//         {
//           id: "2230284",
//           name: "Nuevo",
//           results: 30,
//         },
//       ],
//     },
//     {
//       id: "MAINTENANCE_FEE",
//       name: "Expensas",
//       type: "range",
//       values: [
//         {
//           id: "(*-3000ARS)",
//           name: "3.000 ARS o menos",
//           results: 17,
//         },
//         {
//           id: "[3000ARS-7000ARS]",
//           name: "3.000 a 7.000 ARS",
//           results: 2,
//         },
//         {
//           id: "[7000ARS-10000ARS]",
//           name: "7.000 a 10.000 ARS",
//           results: 1,
//         },
//         {
//           id: "[10000ARS-*)",
//           name: "10.000 ARS o más",
//           results: 224,
//         },
//       ],
//     },
//     {
//       id: "OPERATION",
//       name: "Operación",
//       type: "STRING",
//       values: [
//         {
//           id: "242073",
//           name: "Alquiler",
//           results: 282,
//         },
//       ],
//     },
//     {
//       id: "OPERATION_SUBTYPE",
//       name: "Modalidad",
//       type: "STRING",
//       values: [
//         {
//           id: "244562",
//           name: "Propiedades individuales",
//           results: 85,
//         },
//       ],
//     },
//     {
//       id: "PARKING_LOTS",
//       name: "Cocheras",
//       type: "range",
//       values: [
//         {
//           id: "[0-0]",
//           name: "No tiene cocheras",
//           results: 240,
//         },
//         {
//           id: "[1-1]",
//           name: "1 cochera",
//           results: 40,
//         },
//         {
//           id: "[2-2]",
//           name: "2 cocheras",
//           results: 1,
//         },
//         {
//           id: "[3-3]",
//           name: "3 cocheras",
//           results: 1,
//         },
//       ],
//     },
//     {
//       id: "PROFESSIONAL_USE_ALLOWED",
//       name: "Otras características",
//       type: "boolean",
//       values: [
//         {
//           id: "242085",
//           name: "Apto profesional",
//           results: 44,
//         },
//       ],
//     },
//     {
//       id: "PROPERTY_AGE",
//       name: "Antigüedad",
//       type: "range",
//       values: [
//         {
//           id: "[0años-0años]",
//           name: "A estrenar",
//           results: 28,
//         },
//         {
//           id: "[1años-9años]",
//           name: "1 a 9 años",
//           results: 59,
//         },
//         {
//           id: "[9años-20años]",
//           name: "9 a 20 años",
//           results: 63,
//         },
//         {
//           id: "[20años-50años]",
//           name: "20 a 50 años",
//           results: 66,
//         },
//         {
//           id: "[50años-*)",
//           name: "50 años o más",
//           results: 9,
//         },
//       ],
//     },
//     {
//       id: "PROPERTY_TYPE",
//       name: "Inmueble",
//       type: "STRING",
//       values: [
//         {
//           id: "242062",
//           name: "Departamentos",
//           results: 282,
//         },
//       ],
//     },
//     {
//       id: "ROOMS",
//       name: "Ambientes",
//       type: "range",
//       values: [
//         {
//           id: "[1-1]",
//           name: "1 ambiente",
//           results: 86,
//         },
//         {
//           id: "[2-2]",
//           name: "2 ambientes",
//           results: 122,
//         },
//         {
//           id: "[3-3]",
//           name: "3 ambientes",
//           results: 48,
//         },
//         {
//           id: "[4-*)",
//           name: "4 ambientes o más",
//           results: 17,
//         },
//       ],
//     },
//     {
//       id: "TOTAL_AREA",
//       name: "Superficie total",
//       type: "range",
//       values: [
//         {
//           id: "(*-40m²]",
//           name: "40 m² totales o menos",
//           results: 116,
//         },
//         {
//           id: "[40m²-45m²]",
//           name: "40 a 45 m² totales",
//           results: 74,
//         },
//         {
//           id: "[45m²-60m²]",
//           name: "45 a 60 m² totales",
//           results: 70,
//         },
//         {
//           id: "[60m²-*)",
//           name: "60 m² totales o más",
//           results: 79,
//         },
//       ],
//     },
//     {
//       id: "official_store",
//       name: "Tiendas oficiales",
//       type: "text",
//       values: [
//         {
//           id: "all",
//           name: "Todas las tiendas oficiales",
//           results: 12,
//         },
//         {
//           id: "2622",
//           name: "Yacoub",
//           results: 2,
//         },
//         {
//           id: "54484",
//           name: "Insaurralde Brokers",
//           results: 2,
//         },
//         {
//           id: "2743",
//           name: "Sistema Coldwell Banker",
//           results: 3,
//         },
//         {
//           id: "2994",
//           name: "RCM Propiedades",
//           results: 2,
//         },
//       ],
//     },
//   ],
//   currency: {
//     id: "ARS",
//     symbol: "$",
//   },
//   available_currencies: {
//     currencies: [
//       {
//         id: "USD",
//         symbol: "US$",
//       },
//     ],
//     conversions: {
//       ars_usd: 0.00105932,
//       usd_ars: 944,
//     },
//   },
//   pdp_tracking: {
//     group: false,
//     product_info: [],
//   },
//   user_context: null,
// };
