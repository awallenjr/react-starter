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
