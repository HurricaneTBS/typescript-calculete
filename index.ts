// Import stylesheets
import './style.css';

// Write TypeScript code!
const appDiv: HTMLElement = document.getElementById('app');
appDiv.innerHTML = `<h1>TypeScript Starter</h1>`;

const arr = [1, 3, 5, 7, 9, 11];
const tree = [0];
const size = arr.length;

const build_tree = (arr, tree, node, start, end) => {
  if (start === end) {
    tree[node] = arr[start];
  } else {
    const mid = Math.floor((start + end) / 2);
    const left_node = 2 * node + 1;
    const right_node = 2 * node + 2;

    build_tree(arr, tree, left_node, start, mid);
    build_tree(arr, tree, right_node, mid + 1, end);
    tree[node] = tree[left_node] + tree[right_node];
  }
  return tree;
};

const result = build_tree(arr, tree, 0, 0, size - 1);
console.log(result);

