import React from 'react';
import { useParams } from 'react-router';
import CreateNew from '../New/CreateNew';

const EditPost = () => {

  return <CreateNew edit={true} id={useParams().id} />;
};

export default EditPost;
