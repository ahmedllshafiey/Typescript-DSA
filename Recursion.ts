function foo(num: number): number {
    /* Base Case */
    
    if (num === 1) {
        return 1;
    }

    /* Recursion */

    // Before the recursion
    console.log(`Number is ${num}`)

    // During the recursion
    let sum = num + foo(num - 1);

    // After the recursion
    console.log(`Sum is ${sum}`)

    return sum
}