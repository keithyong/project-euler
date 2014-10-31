var textInput;
var line;
var triangle;
var done = false;

function main(){
    var start = new Date().getTime();
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

QUnit.test('parse()', function( assert ){
    var testArray = [[1, 2, 3],[4, 5, 6]];
    assert.deepEqual(parse("1 2 3\n4 5 6"), testArray, "Parse works!");
});
