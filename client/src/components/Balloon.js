function Balloon({ id, color, top, left, scale, rotate, type, tip, onPop }) {
  return (
    <div
      key={id}
      className="balloonLeft"
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
      <div
        className="roundShape"
        style={{
          background:
            color === '#A7DD2D'
              ? 'radial-gradient(#FBE519 10%, #A7DD2D, #A7DD2D)'
              : color === '#FF84AA'
              ? 'radial-gradient(#ffaebe 10%, #FF84AA, #FF84AA)'
              : color === '#F31C12'
              ? 'radial-gradient(#F67052 10%, #F31C12, #F31C12)'
              : color === '#FCBB11'
              ? 'radial-gradient(#FFF24A 10%, #FCBB11, #FCBB11)'
              : color === '#3110C0' &&
                'radial-gradient(#6B66BE 10%, #3110C0, #3110C0)',
          border: `5px solid ${color}`,
        }}
      >
        <div className="balloonTip" style={{ backgroundColor: color }} />
        {tip && <div className="balloonString" />}
      </div>
    </div>
  );
}

export default Balloon;
