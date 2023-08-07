import audioControls from '../modules/audioControls';

function Heart(props) {
  return (
    <div
      key={props.mode}
      className="heartContainer"
      style={{
        '--initial-scale': props.scale.toString(),
        top: props.top.toString() + 'vh',
        left: props.left.toString() + 'vw',
        '--initial-rotation': props.rotate.toString() + 'deg',
        '--move-up': props.mode === 'fly' ? '-210vh' : '0',
        animation:
          props.mode === 'fly'
            ? `${props.type} 5s ease-in-out 1 both`
            : `${props.type} 2s ease-in-out infinite both`,
        WebkitAnimation:
          props.mode === 'fly'
            ? `${props.type} 5s ease-in-out 1 both`
            : `${props.type} 2s ease-in-out infinite both`,
        zIndex: props.id === 3 && '5',
        position: 'absolute',
      }}
      onClick={
        props.id !== 3
          ? () => {
              audioControls.play('pop');
              props.onPop(props.id);
            }
          : null
      }
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
          onClick={
            props.id === 3
              ? () => {
                  audioControls.play('pop');
                  props.onPop(props.id);
                }
              : null
          }
        />
        <div
          className="heartCircle"
          style={{
            backgroundColor: props.color,
            border: `4px solid ${props.color}`,
            outline: '2px solid black',
          }}
          onClick={
            props.id === 3
              ? () => {
                  audioControls.play('pop');
                  props.onPop(props.id);
                }
              : null
          }
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
        onClick={
          props.id === 3
            ? () => {
                audioControls.play('pop');
                props.onPop(props.id);
              }
            : null
        }
      />
      <div
        className="heartTip"
        style={{
          backgroundColor: props.color,
          outline: '1.7px solid black',
        }}
        onClick={props.id === 3 ? () => props.onPop(3) : null}
      />
      {props.id === 3 && (
        <div
          className="heartText"
          onClick={() => {
            audioControls.play('pop');
            props.onPop(3);
          }}
        >
          <span>~70%</span>
          <span>SALE</span>
        </div>
      )}
    </div>
  );
}

export default Heart;
