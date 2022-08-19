import Header from '../components/public/Header';

function Default({ children }) {
  return (
    <>
      <Header />
      <main className="container mb-5">{children}</main>
    </>
  );
}

export default Default;
