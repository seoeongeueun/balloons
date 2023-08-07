import audioControls from '../modules/audioControls';

function Daisy(props) {
  return (
    <div
      className="daisy"
      key={props.mode}
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
      <div className="daisyPetals">
        <div
          className="petalsHalf"
          style={{
            transform: 'scaleY(-1)',
            marginBottom: '-2px',
          }}
        >
          <div className="petal" />
          <div className="petal" style={{ marginTop: '33px' }} />
          <div className="petal" />
        </div>
        <div className="petalsHalf" style={{ marginLeft: '6px' }}>
          <div className="petal" />
          <div className="petal" style={{ marginTop: '33px' }} />
          <div className="petal" />
        </div>
      </div>
      <div className="daisyCenter">
        <div className="daisyYellow">
          <div className="daisyEyes">
            <div className="daisyEye" />
            <div className="daisyEye" />
          </div>
          <div className="daisySmile" />
        </div>
      </div>
      <div className="daisyTip" />
    </div>
  );
}

export default Daisy;
