import Axios from 'axios';
import { GET_ALL_POST, GET_POST_BY_ID, NO_POST } from '../Types';

const config = {
  'Content-type': 'multipart/form-data',
};

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

export const createPost = (formData) => async (dispatch) => {
  try {
    await Axios.post(`/api/v1/posts`, formData, config);
    dispatch(getAllPost());
  } catch (e) {
    console.error(e);
    dispatch({
      type: NO_POST,
    });
  }
};

export const getSinglePost = (id) => async (dispatch) => {
  try {
    const { data } = await Axios.get(`/api/v1/posts/${id}`);
    dispatch({
      type: GET_POST_BY_ID,
      payload: data,
    });
  } catch (e) {
    console.error(e);
    dispatch({
      type: NO_POST,
    });
  }
};
