export default function getFetchConfig(method, includeToken, data) {
  const fetchConfig = {
    method,
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json'
    }
  };

  if (includeToken) {
    fetchConfig.headers.Authorization = `JWT ${localStorage.getItem('id_token')}`;
  }

  if (data) {
    fetchConfig.body = data;
  }

  return fetchConfig;
}
