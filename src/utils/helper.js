import jwtDecode from 'jwt-decode';

export function isValidToken() {
	let token = localStorage.getItem('id_token');

  if (!token) {
    return false;
  } else {
    let tokenData = jwtDecode(token);

    if ((Date.now() / 1000) > tokenData.exp) {
      return false;
    }
  }

	return true;
}
