exports.handleBase64 = async function(payload) {
  const parts = payload.split(';base64,');
  const ext = parts[0].split('/')[1];
  const file = Buffer.from(parts[1], 'base64');
  return { ext, file };
}

exports.fileToBuffer = async function(filePath) {
  return new Promise((resolve, reject) => {
    readFile(filePath, (err, data) => {
      if (err || !data) {
        reject(err);
      }
      data ? resolve(data) : reject();
    });
  });
}

exports.getShortName = function(fullname) {
  const fullName = fullname.split(' ');
  const initials = `${fullName[0].charAt(0)}${fullName[1].charAt(0)}`;
  return initials.toUpperCase();
}
