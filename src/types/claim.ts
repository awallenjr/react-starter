import type { Insured } from './insured';
import type { Property } from './property';

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

// type plain string since this value varies widely between carriers and policies.
// money in cents rather than floats — this avoids floating-point rounding errors once
// you start summing line items.
export interface Coverage {
  type: string;
  deductibleCents: number;
  policyLimitCents: number;
}

// value-object-composition
// root entity consists of smaller independent types rather than a single flat
// interface.
// id added as surrogate since we can control that identifier and
// claimNumber is from an outside source and varies in format across carriers.
export interface Claim {
  id: string;
  claimNumber: string;
  status: ClaimStatus;
  typeOfLoss: 'hail' | 'wind' | 'water' | 'fire' | 'other';
  dateOfLoss: string;
  insureds: Insured[];
  property: Property;
  coverages: Coverage[];
}
