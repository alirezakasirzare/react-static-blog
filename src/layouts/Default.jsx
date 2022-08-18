import Header from '../components/public/Header';

function Default({ children }) {
  return (
    <>
      <Header />
      <main className="container">{children}</main>
    </>
  );
}

export default Default;
