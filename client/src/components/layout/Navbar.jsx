import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Container from '../ui/Container';
import { siteConfig } from '../../constants/siteConfig';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  // Close the mobile menu on Escape, from anywhere on the page.
  useEffect(() => {
    function handleEscape(event) {
      if (event.key === 'Escape') setIsOpen(false);
    }
    document.addEventListener('keydown', handleEscape);
    return () => document.removeEventListener('keydown', handleEscape);
  }, []);

  return (
    <header className="sticky top-0 z-50 border-b border-line bg-paper/95 backdrop-blur-sm">
      <Container as="nav" aria-label="Primary" className="flex h-16 items-center justify-between">
        <Link to="/" className="font-display text-lg font-bold text-ink">
          {siteConfig.name}
        </Link>

        {/* Desktop links */}
        <ul className="hidden items-center gap-8 md:flex">
          {siteConfig.nav.map((item) => (
            <li key={item.href}>
              <a
                href={item.href}
                className="font-mono text-sm uppercase tracking-wide text-ink-soft transition-colors hover:text-redline"
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>

        {/* Mobile menu toggle */}
        <button
          type="button"
          aria-expanded={isOpen}
          aria-controls="mobile-menu"
          aria-label={isOpen ? 'Close menu' : 'Open menu'}
          onClick={() => setIsOpen((open) => !open)}
          className="flex flex-col gap-1.5 md:hidden"
        >
          <span className={`block h-0.5 w-6 bg-ink transition-transform ${isOpen ? 'translate-y-2 rotate-45' : ''}`} />
          <span className={`block h-0.5 w-6 bg-ink transition-opacity ${isOpen ? 'opacity-0' : ''}`} />
          <span className={`block h-0.5 w-6 bg-ink transition-transform ${isOpen ? '-translate-y-2 -rotate-45' : ''}`} />
        </button>
      </Container>

      {/* Mobile menu panel */}
      {isOpen && (
        <ul id="mobile-menu" className="flex flex-col gap-1 border-t border-line px-6 pb-4 md:hidden">
          {siteConfig.nav.map((item) => (
            <li key={item.href}>
              <a
                href={item.href}
                onClick={() => setIsOpen(false)}
                className="block py-3 font-mono text-sm uppercase tracking-wide text-ink-soft hover:text-redline"
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>
      )}
    </header>
  );
}

export default Navbar;
