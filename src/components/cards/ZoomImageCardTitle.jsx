import Zoom from 'react-medium-image-zoom';

function ZoomImageCardTitle({ image, title }) {
  return (
    <div className="card h-100 shadow">
      <Zoom>
        <img src={image} className="card-img-top" alt={title} />
      </Zoom>

      <div className="card-body">
        <h5 className="card-title">{title}</h5>
      </div>
    </div>
  );
}

export default ZoomImageCardTitle;
