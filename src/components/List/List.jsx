import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { getAllPost } from '../../redux/actions/postActions';
import CommonCard from '../CommonCard';
const List = ({ getAllPost, allPosts, loading }) => {
  useEffect(() => {
    getAllPost();
  }, [getAllPost]);
  const onNewPostHandler = () => {
    console.log(`Create new Post`);
  };
  return (
    <div className='container'>
      <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
        <button className='btn mt-5 btn-link' onClick={onNewPostHandler}>
          <h3>New Post</h3>
        </button>
      </div>
      <div className='  row row-cols-1 row-cols-md-3'>{!loading && allPosts?.map((post) => <CommonCard key={post._id} {...post} />)}</div>
    </div>
  );
};
const mapStateToProps = (store) => ({ allPosts: store.postStates.allPosts, loading: store.postStates.loading });
export default connect(mapStateToProps, { getAllPost })(List);
