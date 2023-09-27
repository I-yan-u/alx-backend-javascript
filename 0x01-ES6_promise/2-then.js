export default function handleResponseFromAPI(promise) {
  const res = { status: 200, body: 'Success' };
  return promise
    .then(() => res)
    .then(() => { console.log('Got a response from the API'); })
    .catch(() => new Error());
}
