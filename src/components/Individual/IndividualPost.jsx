import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { useParams } from 'react-router';
import { getSinglePost } from '../../redux/actions/postActions';
import CommonCard from '../CommonCard';
const IndividualPost = ({ getSinglePost, post, loading }) => {
  const individual = true;
  const id = useParams().id;
  useEffect(() => {
    getSinglePost(id);
  }, [getSinglePost, id]);
  return (
    <div className='container '>
      <div className='row mt-5' style={{ display: 'flex', justifyContent: 'center' }}>
        {loading ? <h4>Loading.....</h4> : <CommonCard {...post} individual={individual} />}
      </div>
    </div>
  );
};
const mapStateToProps = (store) => ({
  post: store.postStates.post,
  loading: store.postStates.loading,
});
export default connect(mapStateToProps, { getSinglePost })(IndividualPost);
