export interface NavbarProps {
  /** Current page label — highlights matching nav link */
  currentPage?: string;
  /** Navigation links array */
  links?: Array<{ label: string; href: string }>;
  /** CTA button label */
  ctaLabel?: string;
  /** CTA button href */
  ctaHref?: string;
  /** Logo image src; falls back to the DermaSetup wordmark when empty */
  logoSrc?: string;
}
