function CardTitleSubtitleBody({ title, text, subtitle }) {
  return (
    <div className="card h-100">
      <div className="card-body d-flex flex-column justify-content-between">
        <div className="mb-3">
          <h5 className="card-title">{title}</h5>
          <h6 className="card-subtitle mb-2 text-muted">{subtitle}</h6>
          <p className="card-text">{text}</p>
        </div>
      </div>
    </div>
  );
}

export default CardTitleSubtitleBody;
