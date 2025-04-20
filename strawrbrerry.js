
export const strawrbrerry = ({input = 'strawberry', search='r'}) => {
  let count = 0;
  for (let i = 0; i < input.length; i++) {
    if (input.slice(i, i + search.length) === search) {
      count++;
        }
  }
  return count;
}

console.log(strawrbrerry({input: 'strawberry', search: 'r'})); // 2
