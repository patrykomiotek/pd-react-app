function request(method, endpoint, data = null) {
  const config = {
    method,
    headers: {
      'Accept': 'application/json',
      'Content-type': 'application/json',
    }
  };
  if (method === 'POST' || method === 'PATCH') {
    config.body = JSON.stringify(data);
  }
  return fetch(
      `${process.env.REACT_APP_API_URL}${endpoint}`,
      config
    )
    .then(response => response.json());
}

function get(endpoint) {
  return request('GET', endpoint);
}

function post(endpoint, data) {
  return request('POST', endpoint, data);
}

function patch(endpoint, data) {
  return request('PATCH', endpoint, data);
}

function _delete(endpoint) {
  return request('DELETE', endpoint);
}

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  get,
  post,
  patch,
  delete: _delete
};
