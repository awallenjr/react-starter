// The lifecycle states a claim moves through.
// A string-literal union (not `string`) so TypeScript rejects invalid statuses at compile time
// and the editor autocompletes valid ones.
export type ClaimStatus =
  | 'submitted'
  | 'under_review'
  | 'appraisal'
  | 'public_adjuster'
  | 'partially_approved'
  | 'approved'
  | 'denied'
  | 'closed';

export interface Coverage {
  // type plain string since this value varies widely between carries and policies.
  type: string;
  // money in cents rather than floats this avoids floating-point rounding errors once
  // you start summing line items.
  deductibleCents: number;
  policyLimitCents: number;
}
