var textInput;
var line;
var triangle;
var done = false;

function main(){
    var start = new Date().getTime();

    var reader = new FileReader();
    textInput = document.getElementById("input").value;

    triangle = parse(textInput);
    document.getElementById("output").innerHTML = triangle;
    elapsed = new Date().getTime() - start;

    document.getElementById("runningTime").innerHTML = "Running time <br />" + elapsed + " millisecond(s)";
} 

function parse(input){
    var inputArray = input.split("\n"); 
    var temp2D = [];

    for (var i = 0; i < inputArray.length; i++){
        temp2D.push(inputArray[i].split(" ").map(Number));
    }

    return temp2D;
}

function getNumNodes(array) {
    var count = 0;

    for (var r = 0; r < array.length; r++){
        for (var c = 0; c < array[r].length; c++){
            count++;
        }
    }

    return count;
}

function makeAdjMatTriangle(tri2DArray) {
    var rows = tri2DArray.length;
    var columns = tri2DArray[rows - 1].length;
    var numNodes = rows - 1 + columns;
    var adjmat;
    for (var r = 0; r < tri2DArray.length; r++){
        for (var c = 0; c < tri2DArray[r].length; c++){
        }
    }
}

var testArray = [
            [59], 
          [73, 41],
        [52, 40, 09]
];

QUnit.test('parse()', function( assert ){
    assert.deepEqual(parse("59\n73 41\n52 40 09"), testArray, "Parse worked for the first three lines of Euler 67's triangle.txt");
});

QUnit.test('getNumNodes()', function( assert ){
    var test1 = [[1], [2], [3], [4], [5], [6], [7], [8, 9, 10, 11, 12], [13, 14, 15]];
    assert.equal(getNumNodes(testArray), 6, "getNumNodes is correct for the first three lines of Euler 67's triangle.txt");
    assert.equal(getNumNodes(test1), 15, "getNumNodes is correct for test1 array");
});

QUnit.test('makeAdjMatTriangle()', function( assert ){
    /*  Adjacency List   
           59  73  41  52  40  09
        59  0  59  59   0   0   0
        73  0   0   0  73  73   0
        41  0   0   0   0  41  41
        52  0   0   0   0   0   0
        40  0   0   0   0   0   0
        09  0   0   0   0   0   0
    */
    var correct = 
    [
        [0, 59, 59,  0,  0,  0],
        [0,  0,  0, 73, 73,  0],
        [0,  0,  0,  0, 41, 41],
        [0,  0,  0,  0,  0,  0], 
        [0,  0,  0,  0,  0,  0], 
        [0,  0,  0,  0,  0,  0] 
    ];
    assert.deepEqual(makeAdjMatTriangle(testArray), correct, "makeAdjMatTriangle correctly makes an adjancency list for weighted digraph");
});
