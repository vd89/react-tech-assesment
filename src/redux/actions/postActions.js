import Axios from 'axios';
import { GET_ALL_POST, NO_POST } from '../Types';

export const getAllPost = () => async (dispatch) => {
  try {
    const { data } = await Axios.get(`/api/v1/posts`);
    dispatch({
      type: GET_ALL_POST,
      payload: data,
    });
  } catch (e) {
    console.error(e);
    dispatch({
      type: NO_POST,
    });
  }
};
