function flattern(arr) {
  let result = [];
  arr.forEach((item) => {
    if (Array.isArray(item)) {
      result = result.concat(flattern(item));
    } else {
      result = result.concat(item);
    }
  });
  return result;
}

function flattern1(arr) {
  let result = [...arr];
  while (result.some((item) => Array.isArray(item))) {
    result = [].concat(...result);
  }
  return result;
}
