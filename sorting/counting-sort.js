const countingSort = (input) => {
    // Create counting array of each element
    let count = [], result = [];
    input.forEach((num) => {
        count[num] = (count[num] ?? 0) + 1;
    })

    // Sum last element values at each index
    // to have number of elements less and equivalent to current number
    let index = 0;
    while(index < count.length){
        count[index] = (count[index] ?? 0) + (count[index - 1] ?? 0);
        index++;
    }

    // Iterate through input array and place elements according to count array
    index = 0;
    while(index < input.length){
        let num = input[index];
        result[count[num] - 1] = num;
        count[num] -= 1;
        index++;
    }
    return result;
};


console.log(countingSort([1,4,1,7,3,2,0]));