const generatePassword = require('generate-password');

function generatePasswordAndLog() {
  const password = generatePassword.generate({
    length: 10,
    numbers: true,
    symbols: true,
    uppercase: true,
    strict: true
  });

  console.log(password);
}

generatePasswordAndLog();