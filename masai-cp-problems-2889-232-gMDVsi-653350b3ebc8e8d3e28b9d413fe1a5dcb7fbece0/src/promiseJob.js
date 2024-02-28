function job(delay, value) {
    


  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(value);
    }, delay);
  });
}

const promisesArray = [
  job(1000, 10),
  job(3000, 20),
  job(500, 30),
  job(1500, 40),
];

function triggerPromises() {
  return Promise.all(promisesArray);
}

module.exports = { job, triggerPromises };



var results;

export { job, results };
