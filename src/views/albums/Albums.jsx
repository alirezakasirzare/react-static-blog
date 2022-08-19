import useReqGet from '../../hooks/useReqGet';
import Default from '../../layouts/Default';
import SimpleCardLink from '../../components/cards/SimpleCardLink';
import TitlePage from '../../components/titles/TitlePage';

function Albums() {
  const { data: albums } = useReqGet(
    'https://jsonplaceholder.typicode.com/albums',
    []
  );

  return (
    <Default>
      <TitlePage>Albums</TitlePage>

      {/* album list */}
      <div className="row g-1">
        {albums.map((album, index) => {
          return (
            <div className="col-12 col-sm-6 col-md-4 col-lg-3" key={index}>
              <SimpleCardLink path={`/albums/${album.id}`} text={album.title} />
            </div>
          );
        })}
      </div>
    </Default>
  );
}

export default Albums;
