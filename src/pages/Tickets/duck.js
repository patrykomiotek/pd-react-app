import api from '../../api';

const ADD = 'tickets/add';
const LOAD = 'tickets/load';
const RESET = 'tickets/reset';

// { type: ADD, payload: { id, tile, description }}
// { type: LOAD }
// { type: RESET, payload: [] }
export const add = (ticket) => ({ type: ADD, payload: ticket });
export const load = (data = []) => ({ type: LOAD, payload: data });
export const reset = () => ({ type: RESET });

export const fetchTickets = () => {
  return (dispatch) => {
    // TODO: change api to use tickets
    // it uses mocked ticket data instead of real api
    api.get('/tickets').then((response) => dispatch(load(response.data)));
  };
};

const INITIAL_STATE = {
  data: [],
  isLoading: false,
  hasError: false
};

// TODO: remove me
// const mockData = [
//   {id: 1, title: 'Nie działa drukarka', description: 'Lorem ipsum....'},
//   {id: 2, title: 'Nie działa drukarka', description: 'Lorem ipsum....'},
//   {id: 3, title: 'Nie działa drukarka', description: 'Lorem ipsum....'},
// ];

const reducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ADD:
      return { ...state, data: [...state.data, action.payload] }; // [] [{id,name,title}]
    case LOAD:
      return { ...state, data: action.payload };
    case RESET:
      return { ...state, data: [] };
    default:
      return state;
  }
};

export default reducer;
