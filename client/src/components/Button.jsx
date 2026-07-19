function Button({ children, href, variant = 'primary', className = '', ...props }) {
  const base =
    'inline-flex items-center justify-center gap-2 rounded-sm px-5 py-2.5 ' +
    'font-mono text-sm uppercase tracking-wide transition-colors ' +
    'focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-redline';

  const variants = {
    primary: 'bg-redline text-paper hover:bg-redline/90',
    secondary: 'border border-ink text-ink hover:bg-ink hover:text-paper',
    ghost: 'text-ink-soft hover:text-ink',
  };

  const classes = `${base} ${variants[variant]} ${className}`;

  if (href) {
    return (
      <a href={href} className={classes} {...props}>
        {children}
      </a>
    );
  }

  return (
    <button className={classes} {...props}>
      {children}
    </button>
  );
}

export default Button;
