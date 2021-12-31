/*Siempre tenemos un key un valor
 */

const get = (key, defaultData) => {
  const data = localStorage.getItem(key);
  if (data === null) {
    return defaultData;
  } else {
    return JSON.parse(data);
  }
};

const set = (key, value) => {
  localStorage.setItem(key, JSON.stringify(value));
};
/*Para que te salga errores aunque funciona sin lo del objeto*/
const obj = {
  get: get,
  set: set,
};

export default obj;
