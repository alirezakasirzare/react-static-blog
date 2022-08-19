import { Link } from 'react-router-dom';

function CardJustLink({ path, text }) {
  return (
    <div className="card h-100">
      <div className="card-body d-flex align-items-center justify-content-center text-center">
        <Link to={path}>{text}</Link>
      </div>
    </div>
  );
}

export default CardJustLink;
