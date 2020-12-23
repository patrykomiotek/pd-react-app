function objectToArray(obj) {
  const arr = [];
  Object.entries(obj).forEach(elem => {
    const user = { id: elem[0], ...elem[1] };
    arr.push(user);
  });
  return arr;
}

export {
  objectToArray
};
