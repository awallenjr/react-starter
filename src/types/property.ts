// address is split for sorting and filtering.
// string because some zip codes start with 0 and number type silently drops the leading zero.
export interface Property {
  street: string;
  city: string;
  state: string;
  zip: string;
}
