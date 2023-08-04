function Bear({ id, top, left, scale, rotate, type, tip, onPop }) {
  return (
    <div
      key={id}
      className="bear"
      style={{
        '--initial-rotation': rotate.toString() + 'deg',
        top: top.toString() + 'vh',
        left: left.toString() + 'vw',
        '--initial-scale': scale.toString(),
        animation: `${type} 2s ease-in-out infinite both`,
        WebkitAnimation: `${type} 2s ease-in-out infinite both`,
      }}
      onClick={() => onPop(id)}
    >
      <div className="bearEars">
        <div
          className="ear"
          style={{
            transform: 'rotate(-40deg)',
            boxShadow: '-3px 6px 4px -2px #FBCD83 inset',
          }}
        >
          <div className="earShadow" />
        </div>
        <div className="ear" style={{ transform: 'rotate(40deg)' }}>
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
        {tip && <div className="bearString" />}
      </div>
    </div>
  );
}

export default Bear;
