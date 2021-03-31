import React from 'react';
import { connect } from 'react-redux';
import { useHistory } from 'react-router';
import { deletePost } from '../redux/actions/postActions';
const CommonCard = ({ Title, Description, Image, createdAt, updatedAt, Comments, _id, individual, deletePost }) => {
  const history = useHistory();
  const onEditHandler = () => {
    history.push(`/editPost/${_id}`);
  };
  const onDeleteHandler = () => {
    deletePost(_id);
  };
  const onPostViewHandler = () => {
    history.push(`/individualPost/${_id}`);
  };
  return (
    <div className='card md-1 mt-5'>
      <h3 className='card-header'>{Title}</h3>
      <div className='card-body'>
        <h4 className='card-title'>{Title}</h4>
        <p className='card-subtitle'>Created: {new Date(createdAt).toDateString()} </p>
        <p className='card-subtitle'>Updated: {new Date(updatedAt).toDateString()} </p>
      </div>
      <img
        src={Image}
        className='card-img-top'
        width='100%'
        height='200'
        alt=''
        onClick={onPostViewHandler}
        style={{ cursor: 'pointer' }}
      />
      <div className='card-body'>
        <p className='card-text'>{Description}</p>
        <h4>
          <span className='bold'>{Comments?.length} </span> Comments
        </h4>
        <div className='container' style={{ display: 'flex', justifyContent: 'flex-end' }}>
          <button type='button' className='btn btn-outline-primary mr-2' onClick={onEditHandler}>
            Edit
          </button>
          <button type='button' className='btn btn-outline-danger' onClick={onDeleteHandler}>
            Delete
          </button>
        </div>
        {individual
          ? Comments?.map((comment) => (
              <div className='card-body' key={comment.id}>
                <h5 className='card-text'>{comment.comment}</h5>
                <p className='card-subtitle'>Created: {new Date(comment.createdAt).toDateString()}</p>
              </div>
            ))
          : ''}
      </div>
    </div>
  );
};

export default connect(null, { deletePost })(CommonCard);
