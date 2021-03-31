import { CREATE_POST, DELETE_POST, EDIT_POST, GET_ALL_POST, GET_POST_BY_ID } from '../Types';

const INITIAL_STATE = {
  loading: true,
  allPosts: [],
  post: null,
};

const postReducer = (state = INITIAL_STATE, actions) => {
  const { type, payload } = actions;

  switch (type) {
    case GET_ALL_POST:
    case EDIT_POST:
    case DELETE_POST:
    case CREATE_POST:
      return {
        ...state,
        loading: false,
        allPosts: payload,
      };
    case GET_POST_BY_ID:
      return {
        ...state,
        loading: false,
        post: payload,
      };

    default:
      return state;
  }
};

export default postReducer;
