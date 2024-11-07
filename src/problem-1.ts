{
  const sumArray = (numbersArr: number[]): number => {
    return numbersArr.reduce((acc, currentValue) => acc + currentValue, 0);
  };
  const result = sumArray([1, 2, 3, 4, 5]);
  // console.log(result);
}
