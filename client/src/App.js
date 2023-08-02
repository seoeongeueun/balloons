import Flag from "./images/flag.png";
import Mansion from "./images/mansion.png";

function App() {
  // eslint-disable-next-line no-unused-vars
  const positions = [
    {
      id: 1,
      top: "90vh",
      left: "30vw",
      scale: "1.5",
      rotate: "150deg",
      color: "#FF84AA",
      shape: "round",
      more: false,
      tip: false,
    },
    {
      id: 2,
      top: "50vh",
      left: "17vw",
      scale: "0.9",
      rotate: "160deg",
      color: "#FF84AA",
      shape: "round",
      more: false,
      tip: false,
    },
    {
      id: 3,
      top: "60vh",
      left: "68vw",
      scale: "18",
      rotate: "33deg",
      color: "#F31C12",
      shape: "heart",
      more: false,
      tip: false,
    },
    {
      id: 4,
      top: "33vh",
      left: "2vw",
      scale: "0.9",
      rotate: "20deg",
      color: "brown",
      shape: "bear",
      more: false,
      tip: false,
    },
    {
      id: 5,
      top: "78vh",
      left: "50vw",
      scale: "1",
      rotate: "135deg",
      color: "#FF84AA",
      shape: "round",
      more: true,
      tip: true,
    },
    {
      id: 6,
      top: "82vh",
      left: "53vw",
      scale: "1.2",
      rotate: "160deg",
      color: "#FF84AA",
      shape: "round",
      more: false,
      tip: true,
    },
  ];
  return (
    <main>
      <img src={Mansion} alt="mansion" className="mansion" />
      {positions.map((balloon, index) => (
        <>
          {balloon.shape === "round" ? (
            <div
              key={index + 1}
              className="balloonLeft"
              style={{
                "--initial-rotation": balloon.rotate,
                top: balloon.top,
                left: balloon.left,
                "--initial-scale": balloon.scale,
                color: balloon.color,
                animation: balloon.more
                  ? "shake-bottom-more 2s ease-in-out infinite both"
                  : balloon.tip &&
                    "shake-bottom-tip 2s ease-in-out infinite both",
                WebkitAnimation: balloon.more
                  ? "shake-bottom-more 2s ease-in-out infinite both"
                  : balloon.tip &&
                    "shake-bottom-tip 2s ease-in-out infinite both",
              }}
            >
              <div className="roundShape">
                <div className="balloonTip" />
                {balloon.tip && <div className="balloonString" />}
              </div>
            </div>
          ) : balloon.shape === "bear" ? (
            <div
              key={index + 1}
              className="bear"
              style={{
                "--initial-rotation": balloon.rotate,
                top: balloon.top,
                left: balloon.left,
                "--initial-scale": balloon.scale,
              }}
            >
              <div className="bearEars">
                <div
                  className="ear"
                  style={{
                    transform: "rotate(-40deg)",
                    boxShadow: "-3px 6px 4px -2px #FBCD83 inset",
                  }}
                >
                  <div className="earShadow" />
                </div>
                <div className="ear" style={{ transform: "rotate(40deg)" }}>
                  <div className="earShadow" />
                </div>
              </div>
              <div className="bearFace">
                <div className="bearEyes">
                  <div className="eye" />
                  <div className="eye" />
                </div>
                <div className="noseAndMouth">
                  <div className="nose" />
                  <div className="mouthLine" />
                  <div className="smile">
                    <div className="smileHalf" />
                    <div className="smileHalf" />
                  </div>
                  <div className="mouthOpen" />
                </div>
                <div className="bearTip" />
              </div>
            </div>
          ) : balloon.shape === "heart" ? (
            <div
              key={index + 1}
              className="heartBalloon"
              style={{
                "--initial-scale": balloon.scale,
                top: balloon.top,
                left: balloon.left,
                "--initial-rotation": balloon.rotate,
              }}
            >
              <div
                className="heartBorder"
                style={{ transform: "scale(1.02)" }}
              />
              <div className="heart">
                <div style={{ zIndex: 1 }} className="heartBalloonText">
                  <span>~70%</span>
                  <span>SALE</span>
                </div>
              </div>
            </div>
          ) : null}
        </>
      ))}
      <img src={Flag} alt="flag" className="flag" />
      <div
        className="cloud"
        style={{
          top: "70vh",
          left: "0vw",
          transform: "scale(0.8) rotate(5deg)",
        }}
      >
        <div
          className="cloudHalf"
          style={{ marginBottom: "-6rem", marginLeft: "-1rem" }}
        >
          <div className="cloudShape2" style={{ marginRight: "-15px" }} />
          <div className="cloudShape3" />
          <div className="cloudShape3" style={{ marginBottom: "-10px" }} />
        </div>
        <div className="cloudHalf">
          <div className="cloudShape4" />
          <div className="cloudShape1" />
          <div className="cloudShape1" />
          <div className="cloudShape1" style={{ marginBottom: "10px" }} />
        </div>
      </div>
      <div
        className="cloud"
        style={{
          top: "34vh",
          left: "13vw",
          transform: "scale(0.5) rotate(5deg)",
          filter: "blur(5px)",
        }}
      >
        <div
          className="cloudHalf"
          style={{ marginBottom: "-6rem", marginLeft: "-1rem" }}
        >
          <div className="cloudShape2" style={{ marginRight: "-15px" }} />
          <div className="cloudShape3" />
          <div className="cloudShape3" style={{ marginBottom: "-10px" }} />
        </div>
        <div className="cloudHalf">
          <div className="cloudShape4" />
          <div className="cloudShape1" />
          <div className="cloudShape1" />
          <div className="cloudShape1" style={{ marginBottom: "10px" }} />
        </div>
      </div>
      <div
        className="cloud"
        style={{
          top: "88vh",
          left: "15vw",
          transform: "scale(0.8) rotate(5deg)",
        }}
      >
        <div
          className="cloudHalf"
          style={{ marginBottom: "-6rem", marginLeft: "-1rem" }}
        >
          <div className="cloudShape2" style={{ marginRight: "-15px" }} />
          <div className="cloudShape3" />
          <div className="cloudShape3" style={{ marginBottom: "-10px" }} />
        </div>
        <div className="cloudHalf">
          <div className="cloudShape4" />
          <div className="cloudShape1" />
          <div className="cloudShape1" />
          <div className="cloudShape1" style={{ marginBottom: "10px" }} />
        </div>
      </div>
      <div
        className="cloud"
        style={{
          top: "70vh",
          left: "29vw",
          transform: "scale(0.25) rotate(10deg)",
          filter: "blur(10px)",
        }}
      >
        <div
          className="cloudHalf"
          style={{ marginBottom: "-6rem", marginLeft: "-1rem" }}
        >
          <div className="cloudShape2" style={{ marginRight: "-15px" }} />
          <div className="cloudShape3" />
          <div className="cloudShape3" style={{ marginBottom: "-10px" }} />
        </div>
        <div className="cloudHalf">
          <div className="cloudShape4" />
          <div className="cloudShape1" />
          <div className="cloudShape1" />
          <div className="cloudShape1" style={{ marginBottom: "10px" }} />
        </div>
      </div>
      <div
        className="cloud"
        style={{
          top: "60vh",
          left: "47vw",
          transform: "scale(0.35) rotate(-10deg)",
          filter: "blur(8px)",
        }}
      >
        <div
          className="cloudHalf"
          style={{ marginBottom: "-6rem", marginLeft: "-1rem" }}
        >
          <div className="cloudShape2" style={{ marginRight: "-15px" }} />
          <div className="cloudShape3" />
          <div className="cloudShape3" style={{ marginBottom: "-10px" }} />
        </div>
        <div className="cloudHalf">
          <div className="cloudShape4" />
          <div className="cloudShape1" />
          <div className="cloudShape1" />
          <div className="cloudShape1" style={{ marginBottom: "10px" }} />
        </div>
      </div>
      <div
        className="cloud"
        style={{
          top: "93vh",
          left: "70vw",
          transform: "scale(1.5) rotate(-23deg)",
          filter: "blur(2px)",
        }}
      >
        <div
          className="cloudHalf"
          style={{ marginBottom: "-6rem", marginLeft: "-1rem" }}
        >
          <div className="cloudShape2" style={{ marginRight: "-15px" }} />
          <div className="cloudShape3" />
          <div className="cloudShape3" style={{ marginBottom: "-10px" }} />
        </div>
        <div className="cloudHalf">
          <div className="cloudShape4" />
          <div className="cloudShape1" />
          <div className="cloudShape1" />
          <div className="cloudShape1" style={{ marginBottom: "10px" }} />
        </div>
      </div>
      <div
        className="cloud"
        style={{
          top: "40vh",
          left: "67vw",
          transform: "scale(0.5) rotate(-10deg)",
          filter: "blur(4px)",
        }}
      >
        <div
          className="cloudHalf"
          style={{ marginBottom: "-6rem", marginLeft: "-1rem" }}
        >
          <div className="cloudShape2" style={{ marginRight: "-15px" }} />
          <div className="cloudShape3" />
          <div className="cloudShape3" style={{ marginBottom: "-10px" }} />
        </div>
        <div className="cloudHalf">
          <div className="cloudShape4" />
          <div className="cloudShape1" />
          <div className="cloudShape1" />
          <div className="cloudShape1" style={{ marginBottom: "10px" }} />
        </div>
      </div>
      <div
        className="cloud"
        style={{
          top: "50vh",
          left: "80vw",
          transform: "scale(0.7) rotate(-8deg)",
          filter: "blur(3px)",
        }}
      >
        <div
          className="cloudHalf"
          style={{ marginBottom: "-6rem", marginLeft: "-1rem" }}
        >
          <div className="cloudShape2" style={{ marginRight: "-15px" }} />
          <div className="cloudShape3" />
          <div className="cloudShape3" style={{ marginBottom: "-10px" }} />
        </div>
        <div className="cloudHalf">
          <div className="cloudShape4" />
          <div className="cloudShape1" />
          <div className="cloudShape1" />
          <div className="cloudShape1" style={{ marginBottom: "10px" }} />
        </div>
      </div>
    </main>
  );
}

export default App;
