import { MdDoubleArrow } from "react-icons/md";

const CallButton = ({ bgColor, hoverBgColor, text, icon, className }) => {
  const handleClick = () => {
    const phoneNumber = "263776477958";
    window.location.href = `tel:${phoneNumber}`;
  };

  return (
    <button
      onClick={handleClick}
      style={{ backgroundColor: bgColor }}
      className={`flex items-center justify-center py-2 px-4 rounded-full transition-colors duration-300 ${className} hover:bg-[${hoverBgColor}]`}
    >
      {icon}
      <span className="ml-2">{text}</span>
    </button>
  );
};

export default CallButton;
