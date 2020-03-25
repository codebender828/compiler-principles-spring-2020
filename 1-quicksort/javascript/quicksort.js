/**
 * ===================================================
 *  Name: Jonathan Bakebwa  乔纳森
 *  StudentNo.: 1820162048
 *  Class: Compiler Principles Spring 2020
 * 
 *  Implements a high level version of quicksort algorithm in javascript
 *  Time complexity: O(nlog(n))
 * 
 * ===================================================
 */

/**
 * Partition array to locate pivot
 * @param {Array<Number>} array Array of values in whch to locate partition
 * @param {Number} start Index of start
 * @param {Number} end Index of end
 */
function partition (array, start, end) {
  const pivot = array[Math.floor((start + end) / 2)]
  let low = start
  let high = end

  while (low < high) {
    while (array[low] < pivot) {
      low++
    }

    while (array[high] > pivot) {
      high--
    }

    if (low <= high) {
      /**
       * Swap locations in array
       */
      const temp = array[low]
      array[low] = array[high]
      array[high] = temp

      low++
      high--
    }
  }
  return low
}


function quicksort(set, start, end) {
  let index

  if (set.length > 1) {
    index = partition(set, start, end)

    if (start < index - 1) {
      quicksort(set, start, index - 1)
    }

    if (index < end) {
      quicksort(set, index, end)
    }
  }
  return set
}

const array = [29, 99, 27, 41, 66, 28, 44, 78, 87, 19, 31, 76, 58, 88, 83, 97, 12, 21, 44]

console.log('Input: ============> \n', array)

const sorted = quicksort(array, 0, array.length - 1)

console.log('Output ============> \n', sorted)