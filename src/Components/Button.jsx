const Button = ({ children, onClick, category }) => {
  return (
    <button data-category={category} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
