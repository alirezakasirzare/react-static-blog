import SimpleCardContent from 'components/cards/SimpleCardContent';
import TitleUndreline from 'components/titles/TitleUndreline';
import useReqGet from 'hooks/useReqGet';
import Default from 'layouts/Default';
import { useParams } from 'react-router-dom';

function Post() {
  const { id: postId } = useParams();

  // post info
  const { data: post } = useReqGet(
    `https://jsonplaceholder.typicode.com/posts/${postId}`
  );

  // comments list
  const { data: comments } = useReqGet(
    `https://jsonplaceholder.typicode.com/comments/`,
    []
  );

  return (
    <Default>
      {/* post info */}
      <TitleUndreline>post</TitleUndreline>
      {post && (
        <>
          <h1 className="h2">{post.title}</h1>
          <p>{post.body}</p>
        </>
      )}

      {/* comments */}
      <TitleUndreline>comments</TitleUndreline>
      {comments.map((comment, index) => {
        return (
          <div className="mb-2" key={index}>
            <SimpleCardContent
              text={comment.body}
              title={comment.name}
              subtitle={comment.email}
            />
          </div>
        );
      })}
    </Default>
  );
}

export default Post;
