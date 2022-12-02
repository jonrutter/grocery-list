export const Button: React.FC<React.ComponentPropsWithoutRef<'button'>> = ({
  children,
  ...rest
}) => (
  <button
    {...rest}
    className="bg-emerald-700 hover:bg-emerald-600 py-2 px-4 text-white rounded-md leading-none transition-all disabled:opacity-60 disabled:hover:bg-emerald-700"
  >
    {children}
  </button>
);
