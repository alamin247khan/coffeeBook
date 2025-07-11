
const Heading = ({ title, subtitle, className = '' }) => {
  return (
    <div className={`text-center ${className}`}>
      <h1 className="text-4xl font-bold mb-2">{title}</h1>
      {subtitle && <p className="text-lg text-gray-600">{subtitle}</p>}
    </div>
  );
};

export default Heading;
