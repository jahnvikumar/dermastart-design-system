export interface CardProps {
  /** Card visual style */
  variant?: 'standard' | 'feature' | 'stat' | 'inverse';
  /** Internal padding size */
  padding?: 'sm' | 'md' | 'lg';
  /** Enable hover lift + shadow effect */
  hover?: boolean;
  /** Click handler */
  onClick?: () => void;
  /** Render as anchor tag */
  href?: string;
  /** Card content */
  children: React.ReactNode;
  /** Additional inline style overrides */
  style?: React.CSSProperties;
}
