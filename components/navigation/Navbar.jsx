import React from 'react';

/**
 * DermaStart Navbar component
 * Fixed top bar: white bg, blush border-bottom, 72px height.
 * Adds shadow-nav on scroll. Logo left, links center, CTA right.
 */
export function Navbar({
  currentPage = '',
  links = [
    { label: 'Home', href: 'index.html' },
    { label: 'Packages', href: 'packages.html' },
    { label: 'Services', href: 'services.html' },
    { label: 'How It Works', href: 'how-it-works.html' },
    { label: 'About', href: 'about.html' },
  ],
  ctaLabel = 'Book Free Consultation',
  ctaHref = '#cta',
  logoSrc = 'assets/logo-dermasetup.png',
}) {
  const [scrolled, setScrolled] = React.useState(false);

  React.useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', handler, { passive: true });
    return () => window.removeEventListener('scroll', handler);
  }, []);

  const navStyle = {
    position: 'fixed',
    top: 0, left: 0, right: 0,
    zIndex: 100,
    background: '#FFFFFF',
    borderBottom: '1px solid #E8D5C4',
    height: '72px',
    transition: 'box-shadow 200ms ease',
    boxShadow: scrolled ? '0 2px 16px rgba(44,58,58,0.08)' : 'none',
  };

  const innerStyle = {
    maxWidth: '1200px',
    margin: '0 auto',
    padding: '0 24px',
    height: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    gap: '32px',
  };

  const logoStyle = {
    display: 'flex',
    alignItems: 'center',
    textDecoration: 'none',
    flexShrink: 0,
  };
  const logoImgStyle = {
    height: '52px',
    width: 'auto',
    display: 'block',
  };

  const linksStyle = {
    display: 'flex',
    alignItems: 'center',
    gap: '48px',
    listStyle: 'none',
    margin: 0, padding: 0,
  };

  const ctaStyle = {
    display: 'inline-block',
    background: '#C9A882',
    color: '#FFFFFF',
    fontFamily: "'DM Sans', system-ui, sans-serif",
    fontSize: '14px',
    fontWeight: 600,
    letterSpacing: '0.06em',
    textTransform: 'uppercase',
    padding: '10px 24px',
    border: 'none',
    borderRadius: '2px',
    cursor: 'pointer',
    textDecoration: 'none',
    flexShrink: 0,
    transition: 'background 200ms ease',
  };

  return React.createElement('nav', { style: navStyle },
    React.createElement('div', { style: innerStyle }, [
      React.createElement('a', { key: 'logo', href: 'index.html', style: logoStyle },
        logoSrc
          ? React.createElement('img', { src: logoSrc, alt: 'DermaSetup', style: logoImgStyle })
          : ['Derm', React.createElement('span', { key: 'span', style: { color: '#C9A882' } }, 'Start')]
      ),
      React.createElement('ul', { key: 'links', style: linksStyle },
        links.map((link) =>
          React.createElement('li', { key: link.href },
            React.createElement('a', {
              href: link.href,
              style: {
                fontFamily: "'DM Sans', system-ui, sans-serif",
                fontSize: '15px',
                fontWeight: currentPage === link.label ? 500 : 400,
                color: '#2C3A3A',
                textDecoration: currentPage === link.label ? 'underline' : 'none',
                textDecorationColor: '#C9A882',
                textUnderlineOffset: '4px',
                textDecorationThickness: '2px',
                transition: 'color 200ms ease',
              },
              onMouseEnter: (e) => { e.currentTarget.style.color = '#C9A882'; },
              onMouseLeave: (e) => { e.currentTarget.style.color = '#2C3A3A'; },
            }, link.label)
          )
        )
      ),
      React.createElement('a', {
        key: 'cta',
        href: ctaHref,
        style: ctaStyle,
        onMouseEnter: (e) => { e.currentTarget.style.background = '#B5935F'; },
        onMouseLeave: (e) => { e.currentTarget.style.background = '#C9A882'; },
      }, ctaLabel),
    ])
  );
}
