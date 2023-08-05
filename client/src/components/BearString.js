function BearString(props) {
  return (
    <div
      key={props.id}
      className="bear"
      style={{
        '--initial-rotation': props.rotate.toString() + 'deg',
        '--initial-scale': props.scale.toString(),
        animation: `${props.type} 2s ease-in-out infinite both`,
        WebkitAnimation: `${props.type} 2s ease-in-out infinite both`,
        marginBottom: props.bottom + 'px',
        marginRight: props.right + 'px',
        visibility: props.show ? 'visible' : 'hidden',
      }}
      onClick={() => props.onPop(props.id)}
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
        <div className="bearString" />
      </div>
    </div>
  );
}

export default BearString;
