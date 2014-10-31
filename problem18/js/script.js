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

function makeAdjMatTriangle(triangle2DArray) {

}
QUnit.test('parse()', function( assert ){
    var testArray = [[59], [73, 41],[52, 40, 09]];
    assert.deepEqual(parse("59\n73 41\n52 40 09"), testArray, "Parse worked for the first three lines of Euler 67's triangle.txt");
});

QUnit.test('makeAdjMatTriangle()', function( assert ){
    var testArray = [[59], [73, 41],[52, 40, 09]];
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
        [0, 59, 59,  0,  0,  0] 
        [0,  0,  0, 73, 73,  0] 
        [0,  0,  0,  0, 41, 41]
        [0,  0,  0,  0,  0,  0] 
        [0,  0,  0,  0,  0,  0] 
        [0,  0,  0,  0,  0,  0] 
    ];
    assert.deepEqual(makeAdjMatTriangle(testArray), correct, "makeAdjMatTriangle correctly makes an adjancency list for weighted digraph");
});
