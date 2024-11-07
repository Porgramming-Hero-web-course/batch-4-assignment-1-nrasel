{
  const countWordOccurrences = (sentence: string, word: string): number => {
    const eachWord = sentence.toLowerCase().split(" ");
    const lowerCaseWord = word.toLowerCase();
    const occurences = eachWord.filter((w) => w === lowerCaseWord).length;
    return occurences;
  };
  const result = countWordOccurrences(
    "TypeScript is a syntactic superset of Javascript",
    "Typescript"
  );
  // console.log(result);
}
