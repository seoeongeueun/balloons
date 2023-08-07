import audioControls from '../modules/audioControls';

function BalloonString(props) {
  return (
    <div
      key={props.id}
      className="balloonLeft"
      style={{
        '--initial-rotation': props.rotate.toString() + 'deg',
        '--initial-scale': props.scale.toString(),
        '--move-up': '0',
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
      <div
        className="roundShape"
        style={{
          background:
            props.color === '#A7DD2D'
              ? 'radial-gradient(#FBE519 10%, #A7DD2D, #A7DD2D)'
              : props.color === '#FF84AA'
              ? 'radial-gradient(#ffaebe 10%, #FF84AA, #FF84AA)'
              : props.color === '#F31C12'
              ? 'radial-gradient(#F67052 10%, #F31C12, #F31C12)'
              : props.color === '#FCBB11'
              ? 'radial-gradient(#FFF24A 10%, #FCBB11, #FCBB11)'
              : props.color === '#3110C0' &&
                'radial-gradient(#6B66BE 10%, #3110C0, #3110C0)',
          border: `5px solid ${props.color}`,
        }}
      >
        <div className="balloonTip" style={{ backgroundColor: props.color }} />
        <div className="balloonString" />
      </div>
    </div>
  );
}

export default BalloonString;
