import { FETCH_ALL, CREATE, DELETE, CALCLEVEL} from '../constants/actionTypes';

export default (characters = [], action) => {
  switch (action.type) {
    case FETCH_ALL:
      return action.payload;
    case CREATE:
      return [...characters, action.payload];
    case DELETE:
      return characters.filter((post) => post._id !== action.payload);
    case CALCLEVEL:
      return characters.map((post) => (post._id === action.payload._id ? action.payload : post));
    default:
      return characters;
  }
};