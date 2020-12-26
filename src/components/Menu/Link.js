function Link(props) {
  const { url, children } = props;
  return <a className="Link" href={url}>{children}</a>;
}

export default Link;
