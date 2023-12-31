const OverlayImage = (props) => (
    <div
    className="image-container"
    style={{  position: "relative" }}
  >
    <div
      className="overlay-text"
      style={{ position: "absolute", width: "200px" }}
    >
  {props.text}
      </div>
    {console.log(props.scale)}
    <img src={props.src} className="img" style={{scale: props.scale?.toString(), opacity : props.showImg ? '1':'0' }}/>
  </div>
);

export default OverlayImage;
