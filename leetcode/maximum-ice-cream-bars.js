/**
1833. Maximum Ice Cream Bars

It is a sweltering summer day, and a boy wants to buy some ice cream bars.

At the store, there are n ice cream bars. You are given an array costs of length n, where costs[i] is the price of the ith ice cream bar in coins. The boy initially has coins coins to spend, and he wants to buy as many ice cream bars as possible. 

Note: The boy can buy the ice cream bars in any order.

Return the maximum number of ice cream bars the boy can buy with coins coins.

You must solve the problem by counting sort.

Example 1:

Input: costs = [1,3,2,4,1], coins = 7
Output: 4
Explanation: The boy can buy ice cream bars at indices 0,1,2,4 for a total price of 1 + 3 + 2 + 1 = 7.
Example 2:

Input: costs = [10,6,8,7,7,8], coins = 5
Output: 0
Explanation: The boy cannot afford any of the ice cream bars.
Example 3:

Input: costs = [1,6,3,1,2,5], coins = 20
Output: 6
Explanation: The boy can buy all the ice cream bars for a total price of 1 + 6 + 3 + 1 + 2 + 5 = 18.


Constraints:

costs.length == n
1 <= n <= 105
1 <= costs[i] <= 105
1 <= coins <= 108
 */


/**
 * @param {number[]} costs
 * @param {number} coins
 * @return {number}
 */
 var maxIceCream = function(costs, coins) {
    // Counting sort approach
    let count = [];
    // Iterate through costs input and create count array
    for(let i = 0; i < costs.length; i++){
        count[costs[i]] = (count[costs[i]] ?? 0) + 1;
    }

    // Last iteration - that finds the coins in greedy approach
    // Taking least costs coins as much as it can
    let index = 1, result = 0;
    while(index < count.length && coins > 0){
        
        if(count[index] && coins >= index){
            // Find used ice cream bars
            const used = coins < count[index] * index ? Math.floor(coins/index) : count[index];
            // Reduce the coins dependeing on number of used ice cream bars
            coins -= used * index;
            result += used;
          
        }
        index++;
    }
    return result;
};