// Code your solution here
function findMatching(arr, str) {
    return arr.filter(el => 
        el.toLowerCase() === str.toLowerCase()
    )
}

function fuzzyMatch(arr, str) {
    return arr.filter( el =>
        el.toLowerCase().indexOf(str.toLowerCase()) === 0
      )
}

function matchName(arr, str) {
    return arr.filter(el => 
        el.name === str
    )
}
