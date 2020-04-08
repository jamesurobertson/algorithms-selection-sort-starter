function swap (arr, index1, index2) {
  [arr[index1], arr[index2]] = [arr[index2], arr[index1]]
}

function selectionSort (list) {
  for (let i = 0; i < list.length - 1; i++) {
    let minimum = i
    for (let j = i + 1; j < list.length; j++) {
      if (list[j] < list[minimum]) {
        minimum = j
        // console.log(minimum)
      }
    }
    if (minimum !== i) {
      swap(list, minimum, i)
    }
  }

  return list
}
module.exports = {
  selectionSort,
  swap
}
