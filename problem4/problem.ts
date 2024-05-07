// Time Complexity: O(n) — The loop iterates n times.
// Space Complexity: O(1) — Uses a constant amount of space regardless of the input size.
function sum_to_n_a(n: number): number {
    let sum = 0;
    for (let i = 1; i <= n; i++) {
        sum += i;
    }
    return sum;
}

// Time Complexity: O(1) — This method involves a constant number of operations.
// Space Complexity: O(1) — Only a few variables are used, independent of the input size.
function sum_to_n_b(n: number): number {
    return n * (n + 1) / 2;
}


// Time Complexity: O(n) — The function calls itself recursively n times.
// Space Complexity: O(n) — Each function call adds a layer to the call stack, which can lead to stack overflow if n is very large.
function sum_to_n_c(n: number): number {
    if (n === 1) return 1; // base case
    return n + sum_to_n_c(n - 1);
}
