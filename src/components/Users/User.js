function User(props) {
  const { first, last } = props;
  return <span className="users-user">{first} {last}</span>;
};

export default User;
