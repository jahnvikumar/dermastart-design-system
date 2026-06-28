export interface BadgeProps {
  /** Visual style */
  variant?: 'default' | 'trust' | 'featured' | 'error' | 'success';
  /** Badge text */
  children: React.ReactNode;
  /** Optional icon element (placed before text, except trust variant which auto-adds a checkmark) */
  icon?: React.ReactNode;
}
