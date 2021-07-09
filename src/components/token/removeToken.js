import { Redirect } from 'react-router-dom';

export default function removeToken() {
  localStorage.removeItem('token');
  window.location.reload();
  return <Redirect to="/" />;
}
