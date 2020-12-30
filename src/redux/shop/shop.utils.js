const compare2Elems = (obj1, obj2) => {
  if (!(obj1 instanceof Object || obj2 instanceof Object) && obj1 === obj2) {
    return true;
  } if (Array.isArray(obj1) && Array.isArray(obj2)) {
    if (obj1.length !== obj2.length) {
      return false;
    }
    return true;
  } if ((obj1 instanceof Object && obj2 instanceof Object)) {
    for (const prop in obj1) {
      if (Object.prototype.hasOwnProperty.call(obj2, prop)
        !== Object.prototype.hasOwnProperty.call(obj1, prop)) {
        return false;
      }
      if (typeof obj2[prop] !== typeof obj1[prop]) {
        return false;
      }

      if ((typeof obj1[prop] !== 'object') && obj1[prop] !== obj2[prop]) {
        return false;
      } else if ((typeof obj1[prop] === 'object') && !compare2Objects(obj1[prop], obj2[prop])) {
        return false;
      }
    }
    return true;
  }

  return false;
}

const compare2Arrays = (arr1, arr2) => arr1.every((elem, idx) => compare2Elems(elem, arr2[idx]));

export const memoize = (fn) => {
  let prevArgs = [];
  let prevResult = null;

  return (...args) => {
    if (prevArgs.length !== args.length || !compare2Arrays(prevArgs, args)) {
      prevArgs = args;
      prevResult = fn(...args);
      console.log(prevResult);
      return prevResult;
    }

    return prevResult;
  }
};
