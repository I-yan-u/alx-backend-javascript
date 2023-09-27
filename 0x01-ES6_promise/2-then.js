export default function handleResponseFromAPI(promise) {
  const res = { status: 200, body: 'Success' };
  return promise
    .then(() => res)
    .catch(() => console.log(new Error()))
    .finally(() => { console.log('Got a response from the API'); });
}
