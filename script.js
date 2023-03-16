//your JS code here. If required.
function byteSize(str) {
  // Use the TextEncoder API to encode the string into bytes
  const encoder = new TextEncoder();
  const bytes = encoder.encode(str);
  // Return the size of the bytes array
  return bytes.length;
}
console.log(byteSize('hello world')); // 11
console.log(byteSize('안녕하세요')); // 15
console.log(byteSize('')); // 0



// Get a reference to the table element
const table = document.querySelector('table');

// Create an array of 3 promises that resolve after a random time between 1 and 3 seconds
const promises = [
  new Promise((resolve) => setTimeout(() => resolve('Promise 1'), Math.random() * 2000 + 1000)),
  new Promise((resolve) => setTimeout(() => resolve('Promise 2'), Math.random() * 2000 + 1000)),
  new Promise((resolve) => setTimeout(() => resolve('Promise 3'), Math.random() * 2000 + 1000))
];

// Add a loading row to the table
const loadingRow = table.insertRow();
const loadingCell = loadingRow.insertCell();
loadingCell.colSpan = 2;
loadingCell.textContent = 'Loading...';

// Wait for all promises to resolve
Promise.all(promises)
  .then((results) => {
    // Remove the loading row
    table.deleteRow(0);

    // Add the results to the table
    results.forEach((result, index) => {
      const row = table.insertRow();
      const nameCell = row.insertCell();
      const timeCell = row.insertCell();
      nameCell.textContent = `Promise ${index + 1}`;
      timeCell.textContent = `${(performance.now() / 1000).toFixed(3)}`;
    });

    // Add a row for the total time
    const totalRow = table.insertRow();
    const totalNameCell = totalRow.insertCell();
    const totalTimeCell = totalRow.insertCell();
    totalNameCell.textContent = 'Total';
    totalTimeCell.textContent = `${(performance.now() / 1000).toFixed(3)}`;
  });
