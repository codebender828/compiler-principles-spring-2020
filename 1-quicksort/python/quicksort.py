
# ===================================================
#  Name: Jonathan Bakebwa
#  StudentNo.: 1820162048
#  Class: Compiler Principles Spring 2020
#
#  Implements a high level version of quicksort algorithm in javascript
#  Time complexity: O(nlog(n))
#
# ===================================================
#


# Partition function to partition the set of values so we can recursively
# call quick_sort on all the partitions


def partition(array, start, end):
    pivot = array[start]
    low = start + 1
    high = end

    while True:
        while low <= high and array[high] >= pivot:
            high = high - 1

        while low <= high and array[low] <= pivot:
            low = low + 1

        if low <= high:
            array[low], array[high] = array[high], array[low]

        else:
            break

    array[start], array[high] = array[high], array[start]

    return high


# Quick sort function to implement the quick sort algorithm.


def quick_sort(array, start, end):
    if start >= end:
        return

    p = partition(array, start, end)
    quick_sort(array, start, p - 1)
    quick_sort(array, p + 1, end)


# Here we utilize the algorithm.


array = [29, 99, 27, 41, 66, 28, 44, 78, 87, 19, 31, 76, 58, 88, 83, 97, 12, 21, 44]
print('Input: ====> ')
print(array)
quick_sort(array, 0, len(array) - 1)
print('Output: ====> ')
print(array)
