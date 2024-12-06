const Bg = ({ backgroundImage, height = "100vh" }) => {
  return (
    <div
      className="w-full"
      style={{
        height: height,
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    ></div>
  );
};

export default Bg;
