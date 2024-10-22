const Button = ({ children, onClick, page }) => {
  return (
    <button data-page={page} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
