import { loginSuccess, logoutSuccess, loginFailure } from './actions';
import { login as apiLogin, logout as apiLogout } from '../api';  // Ensure this path is correct

export const login = (email, password) => async (dispatch) => {
  try {
    const { token, user } = await apiLogin(email, password);
    localStorage.setItem('token', token);  // Store token in local storage
    dispatch(loginSuccess(user));
  } catch (error) {
    dispatch(loginFailure(error.message));
  }
};

export const logout = () => async (dispatch) => {
  try {
    await apiLogout();
    localStorage.removeItem('token');  // Remove token from local storage
    dispatch(logoutSuccess());
  } catch (error) {
    dispatch(loginFailure(error.message));
  }
};

