import { connect } from 'react-redux';

function Tickets(props) {
  return (
    <div className="tickets">
      {props.krokodyl.map(elem => (
        <div key={elem.id}>
          <h2>{elem.title}</h2>
          <p>{elem.description}</p>
          <hr />
        </div>
      ))}
    </div>
  );
}

const mapStateToProps = (state) => ({
  krokodyl: state.tickets.data
});

export default connect(mapStateToProps)(Tickets);
