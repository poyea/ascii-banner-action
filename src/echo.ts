/**
 * Returns the procesed string
 * @param {string} thing The string
 * @returns {string} The processed string
 */
const echoThis = (thing: string): string => {
  if (thing.length <= 16) return thing;
  else return thing.slice(0, 16);
};

export default echoThis;
