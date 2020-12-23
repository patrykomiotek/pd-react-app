function objectToArray(obj) {
  const arr = [];
  Object.entries(obj).forEach(elem => {
    const item = { id: elem[0], ...elem[1] };
    arr.push(item);
  });
  return arr;
}

export {
  objectToArray
};
