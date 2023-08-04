function Heart({ id, color, top, left, scale, rotate, type, tip, onPop }) {
  return (
    <div
      key={id}
      className="heartContainer"
      style={{
        '--initial-scale': scale.toString(),
        top: top.toString() + 'vh',
        left: left.toString() + 'vw',
        '--initial-rotation': rotate.toString() + 'deg',
        animation: `${type} 2s ease-in-out infinite both`,
        WebkitAnimation: `${type} 2s ease-in-out infinite both`,
      }}
      onClick={() => onPop(id)}
    >
      <div className="heartTop">
        <div
          className="heartCircle"
          style={{
            marginRight: '-13px',
            boxShadow: '7px 2px 1px -4px #FFFFFF inset',
            backgroundColor: color,
            border: `4px solid ${color}`,
            outline: '2px solid black',
          }}
        />
        <div
          className="heartCircle"
          style={{
            backgroundColor: color,
            border: `4px solid ${color}`,
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
            color === '#A7DD2D'
              ? 'radial-gradient(at 38% 38%, #FBE519 3%, #A7DD2D, #A7DD2D)'
              : color === '#FF84AA'
              ? 'radial-gradient(at 38% 38%, #ffaebe 3%, #FF84AA, #FF84AA)'
              : color === '#F31C12'
              ? 'radial-gradient(at 38% 38%, #F97421 3%, #F31C12, #F31C12)'
              : color === '#FCBB11'
              ? 'radial-gradient(at 38% 38%, #FFF24A 3%, #FCBB11, #FCBB11)'
              : color === '#3110C0' &&
                'radial-gradient(at 38% 38%, #6B66BE 3%, #3110C0, #3110C0)',
        }}
      />
      <div
        className="heartTip"
        style={{
          backgroundColor: color,
          outline: '1.7px solid black',
        }}
      />
      {tip && <div className="heartString" />}
    </div>
  );
}

export default Heart;
