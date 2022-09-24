function Button({ type, variant, isDisabled, children }) {
  return (
    <button type={type} className={`btn btn-${variant}`} disabled={isDisabled}>
      {children}
    </button>
  );
}

Button.defaultProps = {
  type: 'button',
  variant: 'primary',
  isDisabled: false,
};

export default Button;
