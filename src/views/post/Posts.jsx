import CardTitleBodyLink from 'components/cards/CardTitleBodyLink';
import TitlePage from 'components/titles/TitlePage';
import useReqGet from 'hooks/useReqGet';
import Default from 'layouts/Default';

function Posts() {
  // posts list
  const { data: posts } = useReqGet(
    'https://jsonplaceholder.typicode.com/posts',
    []
  );

  return (
    <Default>
      <TitlePage>Posts</TitlePage>

      {/* posts list */}
      <div className="row g-1">
        {posts.map((post, index) => {
          return (
            <div className="col-12 col-lg-6" key={index}>
              <CardTitleBodyLink
                path={`/posts/${post.id}`}
                title={post.title}
                text={post.body}
              />
            </div>
          );
        })}
      </div>
    </Default>
  );
}

export default Posts;
