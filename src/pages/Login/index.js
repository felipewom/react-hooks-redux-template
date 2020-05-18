import React from 'react';
import {useDispatch} from 'react-redux';
import allActions from '../../redux/actions';

const Login = () => {
  const dispatch = useDispatch()

  return (
    <div>
    <h2>Login</h2>
      <div className={"btn-holder"}>
        <div>
          <button onClick={() => dispatch(allActions.counterActions.decrement())}>decrement</button>
        </div>
        <div>
          <button onClick={() => dispatch(allActions.counterActions.increment())}>increment</button>
        </div>
      </div>
  </div>
  );
};

export default Login;
