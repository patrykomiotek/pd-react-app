import { connect } from 'react-redux';

import { add, load, reset } from './duck';

const mockTicket = { id: 6, title: 'Halo halo', description: 'Lorem ipsum'};

function Tickets(props) {
  return (
    <div className="tickets">
      <div>
        <button onClick={props.load}>Load</button>
        <button onClick={() => props.add(mockTicket)}>Add</button>
        <button onClick={props.reset}>Reset</button>
      </div>
      <div>
        {props.krokodyl.map(elem => (
          <div key={elem.id}>
            <h2>{elem.title}</h2>
            <p>{elem.description}</p>
            <hr />
          </div>
        ))}
      </div>
    </div>
  );
}

const mapStateToProps = (state) => ({
  krokodyl: state.tickets.data
});

const mapDispatchToProps = {
  add,
  load,
  reset
};

// const mapDispatchToProps = (dispatch) => ({
//   add: (ticket) => dispatch(add(ticket)),
//   load: () => dispatch(load()),
//   reset: () => dispatch(reset())
// });

export default connect(
  mapStateToProps,
  mapDispatchToProps)
(Tickets);
