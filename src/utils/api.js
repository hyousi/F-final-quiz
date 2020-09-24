const env = 'http://localhost:8080';

function get(url) {
  return fetch(url)
    .then((response) => (response.ok ? Promise.resolve(response) : Promise.reject()))
    .then((response) => response.json());
}

function post(url, data) {
  return fetch(url, {
    method: 'POST',
    headers: { 'content-type': 'application/json' },
    body: JSON.stringify(data),
  })
    .then((response) => (response.ok ? Promise.resolve(response) : Promise.reject()))
    .then((response) => response.json());
}

function addTrainee(trainee) {
  const url = `${env}/trainees`;
  return post(url, trainee);
}

function getTrainees() {
  const url = `${env}/trainees?grouped=false`;
  return get(url);
}

function deleteTrainee(id) {
  const url = `${env}/trainees/${id}`;
  return fetch(url, {
    method: 'DELETE',
    headers: { 'content-type': 'application/json' },
  }).then((response) => (response.ok ? Promise.resolve() : Promise.reject()));
}

function getTrainers() {
  const url = `${env}/trainers?grouped=false`;
  return get(url);
}

export { addTrainee, getTrainees, deleteTrainee, getTrainers };
