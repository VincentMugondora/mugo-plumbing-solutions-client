const MapBackground = () => {
  return (
    <div style={{ width: "100%", height: "60vh", position: "relative" }}>
      <h2
        style={{
          position: "absolute",
          top: "20px",
          left: "20px",
          zIndex: 1,
          color: "white",
          backgroundColor: "rgba(0, 0, 0, 0.5)",
          padding: "10px",
          borderRadius: "5px",
        }}
      >
        Our Location
      </h2>
      <iframe
        title="Google Map showing our location"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3808.5641988386875!2d31.06305251462238!3d-17.81682968815245!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x193084d7f2c2d3f3%3A0xc773c5dc6f688e9f!2s22%20Muriranyenze%20Street%2C%20Mufakose%2C%20Harare%2C%20Zimbabwe!5e0!3m2!1sen!2sus!4v1634007165863!5m2!1sen!2sus"
        width="100%"
        height="100%"
        style={{ border: 0 }}
        allowFullScreen=""
        loading="lazy"
      ></iframe>
    </div>
  );
};

export default MapBackground;
