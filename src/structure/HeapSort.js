let effLength;

const swap = (arr, a, b) => {
  const temp = arr[a];
  arr[a] = arr[b];
  arr[b] = temp;
}

const buildHeap = (arr, i) => {
  const left = 2 * i + 1;
  const right = 2 * i + 2;

  let largest = i;
  if (left < effLength && arr[left] > arr[largest]) 
    largest = left;
  if (right < effLength && arr[right] > arr[largest]) 
    largest = right;

  if (largest != i) {
    swap(arr, i, largest);
    buildHeap(arr, largest);
  }
}

const heapsort = (arr) => {
  effLength = arr.length;

  let i = Math.floor(effLength / 2);
  for (i; i >= 0; i--)
    buildHeap(arr, i);

  for (let j = arr.length - 1; j > 0; j--) {
    swap(arr, 0, j);
    effLength--;
    buildHeap(arr, 0);
  }
  return arr;
}


module.exports = heapsort;