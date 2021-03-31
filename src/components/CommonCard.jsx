import React from 'react';

const CommonCard = ({ Title, Description, Image, createdAt, updatedAt, Comments, _id }) => {
  const onEditHandler = () => {
    console.log('edit handler');
  };
  const onDeleteHandler = () => {
    console.log('Delete handler');
  };
  return (
    <div className='card md-1 mt-5'>
      <h3 className='card-header'>{Title}</h3>
      <div className='card-body'>
        <h4 className='card-title'>{Title}</h4>
        <p className='card-subtitle'>Created: {new Date(createdAt).toDateString()} </p>
        <p className='card-subtitle'>Updated: {new Date(updatedAt).toDateString()} </p>
      </div>
      <img src={Image} className='card-img-top' width='100%' height='200' alt='' />
      <div className='card-body'>
        <p className='card-text'>{Description}</p>
        <h4>
          <span className='bold'>{Comments.length} </span> Comments
        </h4>
        <div className='container '>
          <button type='button' className='btn btn-outline-primary mr-2' onClick={onEditHandler}>
            Edit
          </button>
          <button type='button' className='btn btn-outline-danger' onClick={onDeleteHandler}>
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};

export default CommonCard;
