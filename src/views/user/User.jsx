import { useParams } from 'react-router-dom';
import Default from '../../layouts/Default';
import DListItems from '../../components/lists/DisListItems';
import TitleUndreline from '../../components/titles/TitleUndreline';
import useReqGet from '../../hooks/useReqGet';
import SimpleCardLink from '../../components/cards/SimpleCardLink';
function User() {
  const { id: userId } = useParams();
  // user info
  const { data: user } = useReqGet(
    `https://jsonplaceholder.typicode.com/users/${userId}`
  );
  // albums info
  const { data: albums } = useReqGet(
    `https://jsonplaceholder.typicode.com/albums?userId=${userId}`,
    []
  );

  return (
    <Default>
      {/* user info */}
      <TitleUndreline>user info</TitleUndreline>

      {user && (
        <div className="mb-4">
          <dl>
            <DListItems title="name" text={user.name} />
            <DListItems title="username" text={user.username} />
            <DListItems title="email" text={user.email} />
            <DListItems title="phone" text={user.phone} />
            <DListItems title="city" text={user.address.city} />
            <DListItems title="website" text={user.website} />
            <DListItems title="company name" text={user.company.name} />
          </dl>
        </div>
      )}

      {/* albums */}
      <TitleUndreline>albums</TitleUndreline>

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

export default User;
