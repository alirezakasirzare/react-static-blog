import { Link } from 'react-router-dom';

function SimpleCardContent({ title, text, path }) {
  return (
    <div className="card h-100">
      <div className="card-body d-flex flex-column justify-content-between">
        <div className="mb-3">
          <h5 className="card-title">{title}</h5>
          <p className="card-text">{text}</p>
        </div>

        <Link to={path} className="btn btn-primary">
          see post
        </Link>
      </div>
    </div>
  );
}

export default SimpleCardContent;
