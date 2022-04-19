function sortAnArrayByTwoCriteria(arr) {
    let sortedAlphabeticaly = arr.sort();
    let sortedByLength = sortedAlphabeticaly.sort((a, b) => a.length - b.length);
    console.log(sortedByLength.join(`\n`));
}

sortAnArrayByTwoCriteria(['alpha', 'beta', 'gamma']);
sortAnArrayByTwoCriteria(['Isacc', 'Theodor', 'Jack', 'Harrison', 'George']);
sortAnArrayByTwoCriteria(['test', 'Deny', 'omen', 'Default']);
