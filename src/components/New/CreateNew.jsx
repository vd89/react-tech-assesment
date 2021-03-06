import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { useHistory } from 'react-router';
import { createPost, getSinglePost, editPost } from '../../redux/actions/postActions';

const CreateNew = ({ createPost, edit, id, post, getSinglePost, editPost }) => {
  const history = useHistory();
  useEffect(() => {
    if (edit) {
      getSinglePost(id);
    }
    setFormData({
      Title: post?.Title,
      Description: post?.Description,
    });
  }, [edit, getSinglePost, id, post?.Description, post?.Title]);
  const [image, setImage] = useState('');
  // eslint-disable-next-line no-unused-vars
  const [imageName, setImageName] = useState('Upload');
  const [formData, setFormData] = useState({
    Title: '',
    Description: '',
  });

  if (edit) {
  }
  const onChangeHandler = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  const onFileSelectHandler = (e) => {
    
    setImage(e.target.files[0]);
    setImageName(e.target.files[0].name);
  };
  const onSubmitHandler = (e) => {
    e.preventDefault();
    const payload = new FormData();
    payload.append('Image', image);
    payload.append('Title', formData.Title);
    payload.append('Description', formData.Description);

    if (edit) {
      editPost(id, payload);
      history.push('/');
    }
    createPost(payload);
    history.push('/');
  };
  const onResetHandler = () => {
    setFormData({
      Title: '',
      Description: '',
    });
    setImage('');
    setImageName('Upload');
  };
  return (
    <div className='container'>
      <div className='row mt-5' style={{ display: 'flex', justifyContent: 'space-around' }}>
        <button className='btn btn-link' onClick={() => history.push('/')}>
          <h3>Back</h3>
        </button>
        <button className='btn btn-link' onClick={() => history.push('/createPost')}>
          <h3>New Post</h3>
        </button>
      </div>
      <div className='card mt-5'>
        <div className='card-header'>
          <h3>Create Post</h3>
        </div>
        <div className='card-body'>
          <form onSubmit={onSubmitHandler}>
            <input type='file' accept='image/*' multiple name='Image' className='form-control mb-2' onChange={onFileSelectHandler} />
            <input
              type='text'
              name='Title'
              placeholder='Title'
              className='form-control'
              onChange={onChangeHandler}
              value={formData.Title}
            />
            <textarea
              name='Description'
              cols='30'
              rows='10'
              className='form-control mt-2'
              onChange={onChangeHandler}
              placeholder='Description'
              value={formData.Description}></textarea>
            <div className='card-footer' style={{ display: 'flex', justifyContent: 'flex-end' }}>
              <button type='submit' className='btn btn-link'>
                Post
              </button>
              <button type='reset' className='btn btn-link text-danger' onReset={onResetHandler}>
                Cancel
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (store) => ({
  post: store.postStates.post,
});

export default connect(mapStateToProps, { createPost, getSinglePost, editPost })(CreateNew);
