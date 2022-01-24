// Import stylesheets
import './style.css';

// Write TypeScript code!
const appDiv: HTMLElement = document.getElementById('app');
appDiv.innerHTML = `<h1>TypeScript Starter</h1>`;

const maxSubArray = (nums) => {
  // 记录第n项时子数组的和f(n)
  let pre = 0;
  // 记录最大子数组的和
  let max = 0;
  nums.forEach((item) => {
    pre = Math.max(pre + item, item);
    max = Math.max(pre, max);
  });

  return max;
};

console.log(maxSubArray([-2, 1, -3, 4, -1, 2, 1, -5, 4]));
