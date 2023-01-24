/**
You are given an array of non-overlapping intervals intervals where intervals[i] = [starti, endi] represent the start and the end of the ith interval and intervals is sorted in ascending order by starti. You are also given an interval newInterval = [start, end] that represents the start and end of another interval.
Insert newInterval into intervals such that intervals is still sorted in ascending order by starti and intervals still does not have any overlapping intervals (merge overlapping intervals if necessary).
Return intervals after the insertion.

Example 1:

Input: intervals = [[1,3],[6,9]], newInterval = [2,5]
Output: [[1,5],[6,9]]
Example 2:

Input: intervals = [[1,2],[3,5],[6,7],[8,10],[12,16]], newInterval = [4,8]
Output: [[1,2],[3,10],[12,16]]
Explanation: Because the new interval [4,8] overlaps with [3,5],[6,7],[8,10].


Constraints:

0 <= intervals.length <= 104
intervals[i].length == 2
0 <= starti <= endi <= 105
intervals is sorted by starti in ascending order.
newInterval.length == 2
0 <= start <= end <= 105

*/

/**
 * @param {number[][]} intervals
 * @param {number[]} newInterval
 * @return {number[][]}
 */
 var insert = function(intervals, newInterval) {
    // Aproach
    // 1. Iterate and find out overlap
    // 2. select range of intervals overlapping
    // 3. Merge overlapping intervals
    // O(n) Time comlexity

    if(intervals.length === 0) return [newInterval];
    

    let result = [];
    // Iterate through intervals
    // ==========================
    // Case 1: If interval is not overlapping with current index
    //         Push to current index and return
    // newInterval
    // 1  2
    // |--|
    // Intervals
    //      4. 6 9 10 12.  14
    //      |--| |-|  |----|
    // 1. 2 4  6 9 10 12.  14
    // |--| |--| |-|  |----|
    // 
    // Case 2: If interval is overlapping and end of interval is less or equal to 
    //         end of new interval end, then
    //         merge to current interval set
    //
    for(let i = 0; i < intervals.length; i++ ){
        let [currentStart, currentEnd] = intervals[i];
        let [newIntervalStart, newIntervalEnd] = newInterval;
        //console.log(intervals[i], newInterval);
        // If interval is not overlapping,
        // Push to previous index and return
        if(newIntervalEnd < currentStart){
            
            result = [...result, newInterval, ...intervals.slice(i)];
            newInterval = null;
            //console.log('newInterval < interval', result);
            break;
        // If interval is overlapping and within interval range,
        // Merge new interval with current interval and return
        } else if(currentEnd >= newIntervalEnd){
            result.push([Math.min(newIntervalStart, currentStart), Math.max(newIntervalEnd, currentEnd)]);
            result.push(...intervals.slice(i+1));
            newInterval = null;
            //console.log('newInterval <= interval', result);
            break;
        // If interval is overlapping but end is greater than current interval end
        // Update interval with widening range and delete current interval
        } else if(newIntervalEnd > currentEnd && newIntervalStart <= currentEnd){
            newInterval = [Math.min(newIntervalStart, currentStart), Math.max(newIntervalEnd, currentEnd)];
            //console.log('newInterval > interval', result);
        } else {
            result.push(intervals[i]);
            //console.log('else', result);
        }
        
    }

    // If no overlap found, add to last
    if(newInterval) {
        result.push(newInterval);
    }
    // If no overlap found
    return result;
};