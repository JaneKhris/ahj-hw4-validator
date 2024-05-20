export default function getNumber(input) {
  const regex = /(\d{4,16})[-| ]?(\d{4,6})?[-| ]?(\d{4,5})?[-| ]?(\d{4})?/;
  let str = '';
  if (input.match(regex)) {
    for (let i = 1; i < input.match(regex).length; i += 1) {
      if (input.match(regex)[i]) {
        str += input.match(regex)[i];
      }
    }
  }
  return str;
}
