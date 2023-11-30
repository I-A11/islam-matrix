const RainStream = () => {
  return (
    <div
      className="pt-2"
      style={{
        fontFamily: "matrixFont",
        color: "#20c20e",
        writingMode: "vertical-rl",
        textOrientation: "upright",
        userSelect: "none",
        whiteSpace: "nowrap",
        textShadow: "0px 0px 8px rgba(32, 194, 14, 0.8)",
        fontSize: 30,
      }}
    >
      {"test".split("").map((char, index) => (
        <a style={{ marginTop: "-8" }} key={index}>
          {char}
        </a>
      ))}
    </div>
  );
};
export default RainStream;
