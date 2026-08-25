// name is split for sorting and personalization.
// phone is a string not a number -- formatting, leading digits, and no arithmetic makes sense on it.
export interface Insured {
  firstName: string;
  lastName: string;
  phone: string;
}
