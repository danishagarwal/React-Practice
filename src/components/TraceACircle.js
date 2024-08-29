import { useRef } from "react";

export default function TraceACircle() {
  const cricleRef = useRef(null);
  const handleMouseMove = (e) => {
    const x = e.clientX;
    const y = e.clientY;
    cricleRef.current.style.transform = `translate(${x}px, ${y}px)`;
  };

  return (
    <div style={styles.parentDiv} onMouseMove={handleMouseMove}>
      <div
        ref={cricleRef}
        style={{
          position: "absolute",
          width: "30px",
          height: "30px",
          borderRadius: "50%",
          backgroundColor: "blue",
        }}
      ></div>
    </div>
  );
}

const styles = {
  parentDiv: {
    width: "100vw",
    height: "100vh",
    backgroundColor: "red",
  },
};
