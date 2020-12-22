import './App.css';

function Link(props) {
  const { url, children } = props;
  return <a className="Link" href={url}>{children}</a>;
}

function Menu(props) {
  return (
    <div className="Menu">
      {props.children}
    </div>
  );
}

function Footer() {
  return <div className="Footer">&copy; 2020 by Ja</div>;
}

function App() {
  return (
    <div className="App">
      <Menu>
        <Link url="https://onet.pl">Onet</Link>
        <Link url="https://wp.pl">WP</Link>
        <Link url="https://interia.pl">Interia</Link>
      </Menu>
      <Footer />
    </div>
  );
}

export default App;
