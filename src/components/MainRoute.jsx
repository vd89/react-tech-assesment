import React from 'react';
import { Route, Switch } from 'react-router';
import EditPost from './Edit/EditPost';
import IndividualPost from './Individual/IndividualPost';
import List from './List/List';
import CreateNew from './New/CreateNew';

const MainRoute = () => {
  return (
    <React.Fragment>
      <Switch>
        <Route exact path='/' component={List} />
        <Route exact path='/createPost' component={CreateNew} />
        <Route exact path='/editPost' component={EditPost} />
        <Route exact path='/individualPost/:id' component={IndividualPost} />
      </Switch>
    </React.Fragment>
  );
};

export default MainRoute;
