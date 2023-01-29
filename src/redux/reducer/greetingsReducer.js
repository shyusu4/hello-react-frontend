import axios from 'axios';

const GET_GREETING = 'GET_GREETING';
const baseUrl = 'http://127.0.0.1:3000/greetings';

const initialState = [];

const greetingsReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_GREETING:
      return action.payload;
    default:
      return state;
  }
};

export const getRandomGreeting = () => (dispatch) => {
  axios.get(baseUrl).then((resonse) => {
    const { data } = resonse;
    dispatch({ type: GET_GREETING, payload: data[0] });
  });
};

export default greetingsReducer;
