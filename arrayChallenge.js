// Array Challenge:

function ArrayChallenge(arr) {
    var sum = [];
    for (var i = 1; i < arr.length; i++) {
        for (var j = i + 1; j < arr.length; j++) {
            if (arr[i] + arr[j] === arr[0]) {
                sum.push([arr[i], arr[j]].join());
            }
        }
    }
    return sum.length > 0 ? sum.join(' ') : -1;
}
