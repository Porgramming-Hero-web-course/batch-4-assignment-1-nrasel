{
  const getProperty = <T, K extends keyof T>(obj: T, propertyName: K): T[K] => {
    return obj[propertyName];
  };
  const person = { name: "Alice", age: 40 };
  const result = getProperty(person, "name");
  // console.log(result);
}
