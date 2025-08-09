
const LocalSpinner = ({ size = 24, className = "" }) => {
  return (
    <div
      className={`inline-block animate-spin rounded-full border-4 border-blue-500 border-t-transparent ${className}`}
      style={{ width: size, height: size }}
    />
  );
};

export default LocalSpinner;
