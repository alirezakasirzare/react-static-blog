import { useParams } from 'react-router-dom';
import Default from '../../layouts/Default';
import DListItems from '../../components/lists/DisListItems';
import TitleUndreline from '../../components/titles/TitleUndreline';
import useReqGet from '../../hooks/useReqGet';
function User() {
  // user info
  const { id: userId } = useParams();
  const { data: user } = useReqGet(
    `https://jsonplaceholder.typicode.com/users/${userId}`
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
    </Default>
  );
}

export default User;
