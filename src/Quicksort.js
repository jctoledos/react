import React, {Component} from 'react';

class Quicksort extends Component {

    constructor(props) {
        super();
        this.state = {result:''};
    }

    googleQuestion34() {
        /*
        Given an array of strictly the characters 'R', 'G', and 'B', segregate the values of the array so that all the Rs come first, the Gs come second,
        and the Bs come last. You can only swap elements of the array.

        Do this in linear time and in-place.
        For example, given the array ['G', 'B', 'R', 'R', 'B', 'R', 'G'], it should become ['R', 'R', 'R', 'G', 'G', 'B', 'B'].
        * */

        let arr = ['B', 'G', 'R', 'R', 'B', 'R', 'G'];
        let r = 0;
        let g = 0;
        let b = 0;
        for(let i = 0; i < arr.length; i++) {
            if(arr[i] === 'R'){
                r++;
            }
            if(arr[i] === 'G'){
                g++;
            }
            if(arr[i] === 'B'){
                b++;
            }
        }
        for(let i = 0; i < arr.length; i++) {
            if(i < r)
                arr[i] = 'R';
            else if(i < (g+r))
                arr[i] = 'G';
            else
                arr[i] = 'B';
        }
        //O(N)
        return arr;
    }

    googleQuestion37() {
        /*
        The power set of a set is the set of all its subsets. Write a function that, given a set, generates its power set.

        For example, given the set {1, 2, 3}, it should return {{}, {1}, {2}, {3}, {1, 2}, {1, 3}, {2, 3}, {1, 2, 3}}.
         */

        let arr = [1, 2, 3];

        for(let i = 0; i < arr.length; i++) {

        }
    }

    trueLogicQuestion(image) {
        /*
        0 0 0 1 1 0
        0 0 0 1 1 0
        1 1 1 1 1 1
        1 1 0 0 1 1
        1 1 0 0 1 1
        1 1 0 0 1 0

        return width and coordinates of inner rectangles (0's)
        * */
        /*
        * iterate multidimensional array to find 0
        * if [i][j] === 0 && not already saved continue
        * if [i][j] === 0 then save coordinate as start
        * check while [i][j + n] n !== 0 then save last [i][j + n] as width
        * check while [i + n][j] is 0 then save last [i + n][j] as height
        * save area in new array
        *
        * */

        image = [
            [0, 0, 1, 1, 1, 0],
            [0, 0, 1, 1, 1, 0],
            [0, 0, 1, 1, 1, 1],
            [0, 0, 1, 1, 1, 1],
            [1, 1, 1, 1, 1, 1],
            [1, 0, 0, 1, 0, 0],
            [1, 0, 0, 1, 0, 0],
            ];

        console.log(image);

        let coord = [];

        //40 min

        for(let i = 0; i < image.length; i++) {

            let width = 0;
            let height = 0;

            for(let j = 0; j < image[i].length; j++) {

                if(image[i][j] === 0) {

                    //width
                    let n = j + 1;
                    while((j + n) < image[i].length && image[i][j + n] === 0) {
                        n++;
                        width = n;
                    }

                    //height
                    n = i + 1;
                    while((i + n) < image.length && image[i + n][j] === 0) {
                        n++;
                        height = n;
                    }

                    //fill area to keep track of computations
                    for(let pivotx = j; pivotx < width; pivotx++) {
                        for(let pivoty = i; pivoty < height; pivoty++) {
                            image[pivotx][pivoty] = 1;
                        }
                    }

                    image[i][j] = 2;

                    coord.push({x: j, y: i, width:width, height:height});
                }
            }
        }

        console.log(image);

        return coord;
    }

    googleQuestion40() {
        /*
        Given an array of integers where every integer occurs three times except for one integer, which only occurs once, find and return the non-duplicated integer.

        For example, given [6, 1, 3, 3, 3, 6, 6], return 1. Given [13, 19, 13, 13], return 19.

        Do this in O(N) time and O(1) space.
         */

        //ordered solution:

        let arr = [9, 9, 3, 1, 3, 1, 7, 7, 9, 3 ,7, 1, 8];

        arr.sort();

        for(let i = 0; (i+3) < arr.length; i+=3) {
            if(arr[i] !== arr[i+1]) return arr[i];
        }

        return null;

        //unordered solution


    }

    facebookQuestion41() {
        /*
        Given an unordered list of flights taken by someone, each represented as (origin, destination) pairs, and a starting airport,
        compute the person's itinerary. If no such itinerary exists, return null. If there are multiple possible itineraries,
        return the lexicographically smallest one. All flights must be used in the itinerary.

        For example, given the list of flights [('SFO', 'HKO'),
                                                ('YYZ', 'SFO'),
                                                ('YUL', 'YYZ'),
                                                ('HKO', 'ORD')] and starting airport 'YUL', you should return the list ['YUL', 'YYZ', 'SFO', 'HKO', 'ORD'].

        Given the list of flights [('SFO', 'COM'), ('COM', 'YYZ')] and starting airport 'COM', you should return null.

        Given the list of flights [('A', 'B'),
                                   ('A', 'C'),
                                   ('B', 'C'),
                                   ('C', 'A')] and starting airport 'A', you should return the list ['A', 'B', 'C', 'A', 'C'] even though ['A', 'C', 'A', 'B', 'C'] is also a valid itinerary.
                                   However, the first one is lexicographically smaller.
         */
    }

    amazonQuestion43() {
        /*
        Implement a stack that has the following methods:

        push(val), which pushes an element onto the stack
        pop(), which pops off and returns the topmost element of the stack. If there are no elements in the stack, then it should throw an error or return null.
        max(), which returns the maximum value in the stack currently. If there are no elements in the stack, then it should throw an error or return null.

        Each method should run in constant time.
         */
    }

    googleQuestion45() {
        /*
        We can determine how "out of order" an array A is by counting the number of inversions it has.
        Two elements A[i] and A[j] form an inversion if A[i] > A[j] but i < j. That is, a smaller element appears after a larger element.

        Given an array, count the number of inversions it has. Do this faster than O(N^2) time.

        You may assume each element in the array is distinct.

        For example, a sorted list has zero inversions.
        The array [2, 4, 1, 3, 5] has three inversions: (2, 1), (4, 1), and (4, 3). The array [5, 4, 3, 2, 1] has ten inversions: every distinct pair forms an inversion.

        */
    }

    amazonQuestion46() {
        /*
        Given a string, find the longest palindromic contiguous substring. If there are more than one with the maximum length, return any one.

        For example, the longest palindromic substring of "aabcdcb" is "bcdcb". The longest palindromic substring of "bananas" is "anana".
         */
    }

    facebookQuestion47() {
        /*
        Given a array of numbers representing the stock prices of a company in chronological order,
        write a function that calculates the maximum profit you could have made from buying and selling that stock once. You must buy before you can sell it.

        For example, given [9, 11, 8, 5, 7, 10], you should return 5, since you could buy the stock at 5 dollars and sell it at 10 dollars.
         */
    }

    facebookQuestion51() {
        /*
        Given a function that generates perfectly random numbers between 1 and k (inclusive),
        where k is an input, write a function that shuffles a deck of cards represented as an array using only swaps.

        It should run in O(N) time.

        Hint: Make sure each one of the 52! permutations of the deck is equally likely.
         */
    }

    googleQuestion52() {
        /*
        Implement an LRU (Least Recently Used) cache. It should be able to be initialized with a cache size n, and contain the following methods:

        set(key, value): sets key to value. If there are already n items in the cache and we are adding a new item, then it should also remove the least recently used item.
        get(key): gets the value at key. If no such key exists, return null.
        Each operation should run in O(1) time.
         */
    }

    appleQuestion53() {
        /*
        Implement a queue using two stacks. Recall that a queue is a FIFO (first-in, first-out) data structure with the following methods: enqueue,
        which inserts an element into the queue, and dequeue, which removes it.
         */
    }

    microsoftQuestion55() {
        /*
        Implement a URL shortener with the following methods:

        shorten(url), which shortens the url into a six-character alphanumeric string, such as zLg6wl.
        restore(short), which expands the shortened string into the original url. If no such shortened string exists, return null.
        Hint: What if we enter the same URL twice?
         */
    }

    googleQuestion56() {
        /*
        Given an undirected graph represented as an adjacency matrix and an integer k,
        write a function to determine whether each vertex in the graph can be colored such that no two adjacent vertices share the same color using at most k colors.
         */
    }

    quicksort = function(arr) {
        return this.doQuicksortV2(arr, 0, arr.length - 1);
    };

    doQuicksort = (arr, left, right) => {

        if (left >= right) return;

        let pivot = parseInt(arr[((left + right) / 2).toFixed()]);
        let index = this.partition(arr, left, right, pivot);

        this.doQuicksort(arr, left, index - 1);
        this.doQuicksort(arr, index, right);

        return arr;
    };

    doQuicksortV2 = (arr, left, right) => {
        let l = left;
        let r = right;
        let tmp;
        let pivotidx = (left + right) / 2;
        let pivot = parseInt(arr[pivotidx.toFixed()]);

        //partition
        while (l <= r) {
            while(parseInt(arr[l]) < pivot) {
                l++;
            }
            while(parseInt(arr[r]) > pivot) {
                r--;
            }
            //swap
            if (l <= r) {
                tmp = arr[l];
                arr[l] = arr[r];
                arr[r] = tmp;
                l++;
                r--;
            }
        }

        if (left < r)
            this.doQuicksortV2(arr, left, pivotidx - 1);
        if (l < right)
            this.doQuicksortV2(arr, pivotidx, right);
        return arr;
    };

    partition = function(arr, left, right, pivot) {

        left = parseInt(left);
        right = parseInt(right);

        while(left <= right) {
            while(arr[left] < pivot) {
                left++;
            }

            while(pivot > arr[right]) {
                right--;
            }

            if(left <= right) {
                let temp = arr[left];
                arr[left] = arr[right];
                arr[right] = temp;

                left++;
                right--;
            }
        }
        return left;
    };

    bubblesort = function(arr) {
        for(let i = 0; i < arr.length; i++) {
            for(let j = i; j < arr.length; j++) {
                if(arr[i] > arr[j]) {
                    let temp = arr[i];
                    arr[i] = arr[j];
                    arr[j] = temp;
                }
            }
        }
        return arr;
    };

    binarySearchRecursive = (arr, n, left, right) => {
        let pivot = arr[((left + right) / 2).toFixed()];

        if(n === pivot) {
            return true;
        }
        if(n < pivot) {
            this.binarySearchRecursive(arr, n, left, pivot - 1);
        }
        else {
            this.binarySearchRecursive(arr, n, pivot + 1, right);
        }
    };

    binarySearchIterative = (arr, n) => {
        let left = parseInt(0);
        let right = parseInt(arr.length - 1);
        console.log(left <= right);
        while(left <= right) {
            console.log(left + ' -> ' + right);
            let pivot = ((right + left) / 2).toFixed();
            console.log(pivot);
            if(n === arr[pivot]) {
                console.log('===');
                return true;
            }
            else if(n > arr[pivot]) {
                console.log('left');
                left = parseInt(pivot) + 1;
            }
            else {
                console.log('right');
                right = parseInt(pivot) - 1;
            }
        }
        return false;
    };

    render() {

        const arr = [2, 8, 11, 14, 24, 27, 30, 31, 50, 61, 90];

        return (
            <div>
                <form onSubmit={(e)=>{
                    e.preventDefault();
                    this.setState({result: this.quicksort(arr)});
                    console.log(this.quicksort(arr));
                }}>
                    <input type={'submit'} />
                </form>
                <div>
                    <h1>
                        {this.state.result.toString()}
                    </h1>
                </div>
            </div>
        );
    }
}

export default Quicksort;