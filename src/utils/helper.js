import jwtDecode from 'jwt-decode';

export default function isValidToken() {
  const token = localStorage.getItem('id_token');

  if (!token) {
    return false;
  }

  const tokenData = jwtDecode(token);

  if ((Date.now() / 1000) > tokenData.exp) {
    return false;
  }

  return true;
}
