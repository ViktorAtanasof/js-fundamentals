function reverseAnArrayOfNumbers(n, arr) {
    let newArr = [];
    for (let a = 0; a < n; a++) {
        newArr.push(arr[a]);
    }
    let reverse = newArr.reverse();
    console.log(reverse.join(" "));
}

reverseAnArrayOfNumbers(3, [10, 20, 30, 40, 50]);
reverseAnArrayOfNumbers(4, [-1, 20, 99, 5]);
reverseAnArrayOfNumbers(2, [66, 43, 75, 89, 47]);
