import React from 'react';
import { useDispatch } from 'react-redux';
import { logout } from '../ducks/thunks';

const Logout = () => {
  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(logout());
  };

  return <button onClick={handleLogout}>Logout</button>;
};

export default Logout;
