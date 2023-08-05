import audioControls from '../modules/audioControls';
function HeartString(props) {
  return (
    <div
      key={props.id}
      className="heartContainer"
      style={{
        '--initial-scale': props.scale.toString(),
        '--initial-rotation': props.rotate.toString() + 'deg',
        animation: `${props.type} 2s ease-in-out infinite both`,
        WebkitAnimation: `${props.type} 2s ease-in-out infinite both`,
        marginBottom: props.bottom + 'px',
        marginRight: props.right + 'px',
        visibility: props.show ? 'visible' : 'hidden',
      }}
      onClick={() => {
        audioControls.play('pop');
        props.onPop(props.id);
      }}
    >
      <div className="heartTop">
        <div
          className="heartCircle"
          style={{
            marginRight: '-13px',
            boxShadow: '7px 2px 1px -4px #FFFFFF inset',
            backgroundColor: props.color,
            border: `4px solid ${props.color}`,
            outline: '2px solid black',
          }}
        />
        <div
          className="heartCircle"
          style={{
            backgroundColor: props.color,
            border: `4px solid ${props.color}`,
            outline: '2px solid black',
          }}
        />
      </div>
      <div
        className="heartBottom"
        style={{
          borderBottom: '2px solid black',
          borderRight: '2px solid black',
          background:
            props.color === '#A7DD2D'
              ? 'radial-gradient(at 38% 38%, #FBE519 3%, #A7DD2D, #A7DD2D)'
              : props.color === '#FF84AA'
              ? 'radial-gradient(at 38% 38%, #ffaebe 3%, #FF84AA, #FF84AA)'
              : props.color === '#F31C12'
              ? 'radial-gradient(at 38% 38%, #F97421 3%, #F31C12, #F31C12)'
              : props.color === '#FCBB11'
              ? 'radial-gradient(at 38% 38%, #FFF24A 3%, #FCBB11, #FCBB11)'
              : props.color === '#3110C0' &&
                'radial-gradient(at 38% 38%, #6B66BE 3%, #3110C0, #3110C0)',
        }}
      />
      <div
        className="heartTip"
        style={{
          backgroundColor: props.color,
          outline: '1.7px solid black',
        }}
      />
      <div className="heartString" />
    </div>
  );
}

export default HeartString;
