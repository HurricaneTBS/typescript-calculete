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

const update_tree = (arr, tree, node, start, end, idx, val) => {
  if (start === end) {
    arr[idx] = val;
    tree[node] = val;
  } else {
    const mid = Math.floor((start + end) / 2);
    const left_node = 2 * node + 1;
    const right_node = 2 * node + 2;
    if (idx >= start && idx <= mid) {
      update_tree(arr, tree, left_node, start, mid, idx, val);
    } else {
      update_tree(arr, tree, right_node, mid + 1, end, idx, val);
    }

    tree[node] = tree[left_node] + tree[right_node];
  }
};

const query_tree = (arr, tree, node, start, end, L, R) => {
  console.log(start, '====', end);
  if (L > end || R < start) {
    return 0;
  } else if (start === end) {
    return tree[node];
  } else if (L <= start && end <= R) {
    return tree[node];
  } else {
    const mid = Math.floor((start + end) / 2);
    const left_node = 2 * node + 1;
    const right_node = 2 * node + 2;
    const sum_left = query_tree(arr, tree, left_node, start, mid, L, R);
    const sum_right = query_tree(arr, tree, right_node, mid + 1, end, L, R);
    return sum_left + sum_right;
  }
};

build_tree(arr, tree, 0, 0, size - 1);

const res = query_tree(arr, tree, 0, 0, size - 1, 2, 5);
console.log(res);

