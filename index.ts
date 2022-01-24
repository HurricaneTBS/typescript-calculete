// Import stylesheets
import './style.css';

// Write TypeScript code!
const appDiv: HTMLElement = document.getElementById('app');
appDiv.innerHTML = `<h1>TypeScript Starter</h1>`;

const containsDuplicate = (nums: number[]) => {
  const set = new Set();
  for(const item of nums){
    if(set.has(item)){
      return true;
    }

    set.add(item);
  }

  return false;
};

console.log(containsDuplicate([1,2,3,7,5,6,9,0]))

