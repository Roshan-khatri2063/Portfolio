function Container({ as: Tag = 'div', className = '', children, ...props }) {
  return (
    <Tag className={`mx-auto w-full max-w-5xl px-6 md:px-8 ${className}`} {...props}>
      {children}
    </Tag>
  );
}

export default Container;
