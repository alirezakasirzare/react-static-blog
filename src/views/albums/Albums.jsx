import useReqGet from '../../hooks/useReqGet';
import Default from '../../layouts/Default';
import SimpleCardLink from '../../components/cards/SimpleCardLink';
import TitlePage from '../../components/titles/TitlePage';

function Users() {
  const { data: users } = useReqGet(
    'https://jsonplaceholder.typicode.com/users',
    []
  );

  return (
    <Default>
      <TitlePage>Albums</TitlePage>

      {/* album list */}
      <div className="row g-1">
        {users.map((user, index) => {
          return (
            <div className="col-12 col-sm-6 col-md-4 col-lg-3" key={index}>
              <SimpleCardLink path={`/users/${user.id}`} text={user.name} />
            </div>
          );
        })}
      </div>
    </Default>
  );
}

export default Users;
