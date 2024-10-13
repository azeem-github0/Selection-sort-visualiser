document.getElementById('sortBtn').addEventListener('click', function() {
    const arrayInput = document.getElementById('arrayInput').value;

    let array = arrayInput.split(',').map(Number);

    if (array.some(isNaN)) {
        document.getElementById('result').textContent = "Please enter valid numbers!";
        return;
    }

    selectionSort(array);

    document.getElementById('result').textContent = `Sorted Array: ${array.join(', ')}`;
});

function selectionSort(arr) {
    let n = arr.length;

    for (let i = 0; i < n - 1; i++) {
        let minIndex = i;
        for (let j = i + 1; j < n; j++) {
            if (arr[j] < arr[minIndex]) {
                minIndex = j;
            }
        }
        if (minIndex !== i) {
            let temp = arr[i];
            arr[i] = arr[minIndex];
            arr[minIndex] = temp;
        }
    }
}