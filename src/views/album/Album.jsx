import { useParams } from 'react-router-dom';
import Default from '../../layouts/Default';
import useReqGet from '../../hooks/useReqGet';
import TitlePage from '../../components/titles/TitlePage';
import CardZoomImageTitle from '../../components/cards/CardZoomImageTitle';

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
      <TitlePage>Album - {album && album.title}</TitlePage>

      {/* album images */}
      <div className="row g-3">
        {images.map((image, index) => {
          return (
            <div className="col-12 col-md-6 col-xl-4" key={index}>
              <CardZoomImageTitle image={image.url} title={image.title} />
            </div>
          );
        })}
      </div>
    </Default>
  );
}

export default Album;
