export function randa(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}

export function randn(num) {
  return Math.floor(Math.random() * num);
}

export function slugify(text) {
  return text
    .toString()
    .toLowerCase()
    .replace(/\s+/g, "-")
    .replace(/[^\w-]+/g, "")
    .replace(/--+/g, "-")
    .replace(/^-+/, "")
    .replace(/-+$/, "");
}

export function arena(pp, mp) {
  const graph = ['[', '.', '.', '.', '|', '.', '.', '.', ']'];
  return graph;
}

export default randa;


