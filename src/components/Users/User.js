function User(props) {
  const { first, last } = props;
  return <span>{first} {last}</span>;
};

export default User;
