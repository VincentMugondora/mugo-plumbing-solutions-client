import { Link } from "react-router-dom";

const Button = ({ bgColor, to, text, icon }) => {
  return (
    <div>
      <Link
        to={to}
        style={{ backgroundColor: bgColor }}
        className="inline-flex gap-4 items-center poppins-semibold no-underline px-9 py-2 text-white rounded-full"
      >
        {text}
        {icon && <span className="animate-icon">{icon}</span>}{" "}
        {/* Render the icon if provided */}
      </Link>
    </div>
  );
};

export default Button;
