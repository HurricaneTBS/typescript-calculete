// Import stylesheets
import './style.css';

// Write TypeScript code!
const appDiv: HTMLElement = document.getElementById('app');
appDiv.innerHTML = `<h1>TypeScript Starter</h1>`;

const containsDuplicate = (nums: number[]) => {
  nums.sort((a, b) => a - b);
  console.log(nums);
  for (let i = 0; i < nums.length - 1; i++) {
    if (nums[i] === nums[i + 1]) {
      return true;
    }
  }

  return false;
};

console.log(containsDuplicate([1,2,3,7,5,6]))
