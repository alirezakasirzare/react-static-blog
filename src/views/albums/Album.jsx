import { useParams } from 'react-router-dom';
import Default from '../../layouts/Default';
import useReqGet from '../../hooks/useReqGet';
import Zoom from 'react-medium-image-zoom';
import TitlePage from '../../components/titles/TitlePage';

function Album() {
  const { id: albumId } = useParams();
  // album info
  const { data: album } = useReqGet(
    `https://jsonplaceholder.typicode.com/albums/${albumId}`
  );
  // images of the album
  const { data: images } = useReqGet(
    `https://jsonplaceholder.typicode.com/photos?albumId=${albumId}`,
    []
  );

  return (
    <Default>
      <TitlePage>album - {album && album.title}</TitlePage>

      {/* album images */}
      <div className="row g-3">
        {images.map((image, index) => {
          return (
            <div className="col-12 col-md-6 col-xl-4" key={index}>
              <div className="card h-100 shadow">
                <Zoom>
                  <img
                    src={image.url}
                    className="card-img-top"
                    alt={image.title}
                  />
                </Zoom>

                <div className="card-body">
                  <h5 className="card-title">{image.title}</h5>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </Default>
  );
}

export default Album;
