const ADD = 'tickets/add';
const LOAD = 'tickets/load';
const RESET = 'tickets/reset';

// { type: ADD, payload: { id, tile, description }}
// { type: LOAD }
// { type: RESET, payload: [] }
export const add = (ticket) => ({ type: ADD, payload: ticket });
export const load = () => ({ type: LOAD });
export const reset = () => ({ type: RESET });

const INITIAL_STATE = {
  data: [],
  isLoading: false,
  hasError: false
};

// TODO: remove me
const mockData = [
  {id: 1, title: 'Nie działa drukarka', description: 'Lorem ipsum....'},
  {id: 2, title: 'Nie działa drukarka', description: 'Lorem ipsum....'},
  {id: 3, title: 'Nie działa drukarka', description: 'Lorem ipsum....'},
];

const reducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ADD:
      return { ...state, data: state.data.concat([action.payload]) }; // [] [{id,name,title}]
    case LOAD:
      return { ...state, data: mockData };
    case RESET:
      return { ...state, data: [] };
    default:
      return state;
  }
};

export default reducer;
