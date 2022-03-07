// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import art from "ascii-art";

const convert = async (word: string, style: string | undefined) => {
  try {
    switch (style) {
      case "doom":
      {
        const rendered = await art.font(word, style).completed();
        return rendered;
      }
      default:
      {
        const rendered = await art.font(word, "doom").completed();
        return rendered;
      }
    }
  } catch (err) {
    return word;
  }
};

export default convert;
