There are two n-element arrays of integers, A and B. Permute them into some A' and B' such that the relation A'[i] + B'[i] >= k holds for all i where 0 <= i < n.

There will be q queries consisting of A, B, and k. For each query, return YES if some permutation A', B' satisfying the relation exists. Otherwise, return NO.

Example
A = [0, 1]
B = [0, 2]
k = 1

A valid A', B' is A'=[1,0] and B'=[0, 2] : 1 + 0 >= 1 and 0 + 2 >= 1. Return YES.

## Function Description
Complete the twoArrays function. It should return a string, either YES or NO.

### twoArrays has the following parameter(s):
int k: an integer
int A[n]: an array of integers
int B[n]: an array of integers

### Returns
- string: either YES or NO


### Constraints
* 1 <= n <= 1000 
* 1 <= k <= 10^9
* 0 <= A[i], B[i] <= 10^9
