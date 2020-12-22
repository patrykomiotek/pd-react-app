import './App.css';

function Link(props) {
  const { url, children } = props;
  return <a href={url}>{children}</a>;
}

function Menu() {
  return (
    <div className="Menu">
      <Link url="https://onet.pl">Onet</Link>
      <Link url="https://wp.pl">WP</Link>
      <Link url="https://interia.pl">Interia</Link>
    </div>
  );
}

function Footer() {
  return <div className="Footer">&copy; 2020 by Ja</div>;
}

function App() {
  return (
    <div className="App">
      <Menu />
      <Footer />
    </div>
  );
}

export default App;
