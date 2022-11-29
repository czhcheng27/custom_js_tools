function unique(arr) {
  const res = [];
  arr.forEach((item) => {
    // 检测res中是否有该元素
    if (res.indexOf(item) === -1) {
      // 若没有该元素，则插入到res中
      res.push(item);
    }
  });
  return res;
}

function unique2(arr) {
  const set = new Set(arr);
  const array = [...set];
  return array;
}
