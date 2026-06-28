/**
 * @startingPoint section="Components" subtitle="Primary, secondary, ghost buttons with hover states" viewport="700x180"
 */
export interface ButtonProps {
  /** Visual style of the button */
  variant?: 'primary' | 'secondary' | 'ghost';
  /** Size variant */
  size?: 'sm' | 'md' | 'lg';
  /** Disable interaction */
  disabled?: boolean;
  /** Stretch to full container width */
  fullWidth?: boolean;
  /** Button label */
  children: React.ReactNode;
  /** Click handler (for button element) */
  onClick?: () => void;
  /** When provided, renders as an <a> tag */
  href?: string;
  /** HTML button type */
  type?: 'button' | 'submit' | 'reset';
}
