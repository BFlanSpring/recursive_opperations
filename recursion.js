function product(nums, index = 0) {
  if (index === nums.length) {
    return 1;
  }
  return nums[index] * product(nums, index + 1);
}


function longest(words, maxLength = 0, index = 0) {
  if (index === words.length) {
    return maxLength;
  }
  const currentLength = words[index].length;
  return longest(words, Math.max(maxLength, currentLength), index + 1);
}

function everyOther(str, index = 0) {
  if (index >= str.length) {
    return '';
  }
  return str[index] + everyOther(str, index + 2);
}

function isPalindrome(str) {
  if (str.length <= 1) {
    return true;
  }
  if (str[0] !== str[str.length - 1]) {
    return false;
  }
  return isPalindrome(str.slice(1, -1));
}


function findIndex(arr, val, index = 0) {
  if (index === arr.length) {
    return -1;
  }
  if (arr[index] === val) {
    return index;
  }
  return findIndex(arr, val, index + 1);
}


function revString(str) {
  if (str === '') {
    return '';
  }
  return revString(str.substr(1)) + str.charAt(0);
}


function gatherStrings(obj) {
  let strings = [];
  for (let key in obj) {
    if (typeof obj[key] === 'string') {
      strings.push(obj[key]);
    } else if (typeof obj[key] === 'object') {
      strings = strings.concat(gatherStrings(obj[key]));
    }
  }
  return strings;
}



function binarySearch(arr, val, start = 0, end = arr.length - 1) {
  if (start > end) {
    return -1;
  }

  const mid = Math.floor((start + end) / 2);
  if (arr[mid] === val) {
    return mid;
  } else if (arr[mid] < val) {
    return binarySearch(arr, val, mid + 1, end);
  } else {
    return binarySearch(arr, val, start, mid - 1);
  }
}




module.exports = {
  product,
  longest,
  everyOther,
  isPalindrome,
  findIndex,
  revString,
  gatherStrings,
  binarySearch
};
