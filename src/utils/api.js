const env = 'http://localhost:8080';

function post(url, data) {
  return fetch(url, {
    method: 'POST',
    headers: { 'content-type': 'application/json' },
    body: JSON.stringify(data),
  }).then((response) => (response.ok ? Promise.resolve(response.json()) : Promise.reject()));
}

function addTrainee(trainee) {
  const url = `${env}/trainees`;
  return post(url, trainee);
}

export { addTrainee };
