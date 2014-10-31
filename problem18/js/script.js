var textInput;
var triangle;
var done = false;

function main(){
    var start = new Date().getTime();
    textInput = document.getElementById("input").value;
    triangle = textInput.split("\n");
    document.getElementById("output").innerHTML = triangle;
    elapsed = new Date().getTime() - start;
    document.getElementById("runningTime").innerHTML = "Running time <br />" + elapsed + " millisecond(s)";
} 

QUnit.test("hello test", function( assert ){
    assert.ok( 1 == "1", "Passed!" );
});
