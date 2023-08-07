import audioControls from '../modules/audioControls';

function Bear(props) {
  return (
    <div
      key={props.mode}
      className="bear"
      style={{
        '--initial-rotation': props.rotate.toString() + 'deg',
        top: props.top.toString() + 'vh',
        left: props.left.toString() + 'vw',
        '--initial-scale': props.scale.toString(),
        '--move-up': props.mode === 'fly' ? '-210vh' : '0',
        animation:
          props.mode === 'fly'
            ? `${props.type} 5s ease-in-out 1 both`
            : `${props.type} 2s ease-in-out infinite both`,
        WebkitAnimation:
          props.mode === 'fly'
            ? `${props.type} 5s ease-in-out 1 both`
            : `${props.type} 2s ease-in-out infinite both`,
        position: 'absolute',
      }}
      onClick={() => {
        audioControls.play('pop');
        props.onPop(props.id);
      }}
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
      </div>
    </div>
  );
}

export default Bear;
