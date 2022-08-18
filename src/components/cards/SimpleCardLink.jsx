import { Link } from 'react-router-dom';

function SimpleCardLink({ path, text }) {
  return (
    <div className="card-body text-center">
      <Link to={path}>{text}</Link>
    </div>
  );
}

export default SimpleCardLink;
