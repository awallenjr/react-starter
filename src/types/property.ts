export interface Property {
  // address is split for sorting and filtering
  street: string;
  city: string;
  state: string;
  // string because some zip codes start with 0 and number type silently drops the leading zero
  zip: string;
}
