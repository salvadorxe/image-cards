interface ImageBoxProps {
  src: string;
  alt: string;
  rotation: number;
}

function ImageBox(props: ImageBoxProps) {
  return (
    <div className="img" style={{ transform: `rotate(${props.rotation}deg)` }}>
      <img src={props.src} alt={props.alt} />
    </div>
  );
}

export default ImageBox;
