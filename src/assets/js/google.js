function runGoogleScript(serviceFunctionName, ...params) {
  return new Promise((resolve, reject) => {
    google.script.run
      .withSuccessHandler((data) => {
        resolve(data);
      })
      .withFailureHandler((error) => {
        alert(error);
        reject(error);
      })
      [serviceFunctionName](...params);
  });
}

export default runGoogleScript;
