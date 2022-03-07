const convert = async (word: string, style: string | undefined): Promise<string> => {
  return new Promise(resolve => {
    if (style) {
      resolve(`${word} with ${style}`);
    } else {
      resolve(word);
    }
  });
};

export default convert;
