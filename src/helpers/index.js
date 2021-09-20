function getSum(acc, property) {
  const [ n1,n2 ] = property.split('-').map(str=> parseInt(str,10));
  const averageCatLife = (n1 + n2) / 2;

  acc += averageCatLife;
  return acc;
}

function sanitazeResult(result) {
  return result.toFixed(2);
}

export {
  getSum,
  sanitazeResult
}