export default function getFullResponseFromAPI(success) {
  const promise = new Promise((resolve, reject) => {
    if (success === true) {
      resolve({ status: 200, body: 'Success' });
    } else {
      const err = 'The fake API is not working currently';
      reject(new Error(err));
    }
  });
  return promise;
}
