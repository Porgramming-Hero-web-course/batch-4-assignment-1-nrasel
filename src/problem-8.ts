{
  const validateKeys = <T extends object>(
    obj: T,
    keys: (keyof T)[]
  ): boolean => {
    for (const key of keys) {
      if (!(key in obj)) {
        return false;
      }
    }
    return true;
  };
  const person = { name: "Alice", age: 25, email: "alice@example.com" };
  const result = validateKeys(person, ["name", "age"]);
  // console.log(result);
}
