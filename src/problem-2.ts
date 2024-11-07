{
  const removeDuplicates = (arrOfNum: number[]): number[] => {
    const differentNumber: number[] = [];
    arrOfNum.forEach((num) => {
      if (!differentNumber.includes(num)) {
        differentNumber.push(num);
      }
    });
    return differentNumber;
  };

  const result = removeDuplicates([1, 2, 2, 3, 4, 4, 5]);
  // console.log(result);
}
