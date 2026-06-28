export interface InputProps {
  /** Input label text */
  label?: string;
  /** HTML id — links label to input */
  id?: string;
  /** Input type */
  type?: 'text' | 'email' | 'tel' | 'password' | 'number' | 'search';
  /** Placeholder text (DM Sans 400, Stone color) */
  placeholder?: string;
  /** Controlled value */
  value?: string;
  /** Change handler */
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  /** Error message — triggers red border and shows below input */
  error?: string;
  /** Helper text — shown below input when no error */
  helper?: string;
  /** Disables the input */
  disabled?: boolean;
  /** Shows required asterisk on label */
  required?: boolean;
}
