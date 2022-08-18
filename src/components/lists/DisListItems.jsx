function DListItems({ title, text }) {
  return (
    <>
      <dt>{title}:</dt>
      <dd className="badge bg-secondary">{text}</dd>
    </>
  );
}

export default DListItems;
