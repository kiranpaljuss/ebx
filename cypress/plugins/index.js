const cucumber = require('cypress-cucumber-preprocessor').default;

module.exports = (on, config, text1) => {
  on('file:preprocessor', cucumber());

  console.log(on);
  console.log(config);

  on('task', {
    setVal: (val) => {
      return (text1 = val);
    },
    getVal: () => {
      return text1;
    }
  });
};